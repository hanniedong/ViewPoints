class Api::PostingsController < ApplicationController
  include SessionsHelper

  def index
    postings = Posting.search(search_params.to_h.symbolize_keys)
    render json: postings
  end
 
  def create
    @posting = Posting.create!(posting_params)
    render json: @posting
  end

  private
 
  def search_params
    params.permit(:min_lng, :max_lng, :min_lat, :max_lat)
  end

  def posting_params
    params.permit(:name, :description, :latitude, :user_id, :longitude, :photo)
  end 
  
end