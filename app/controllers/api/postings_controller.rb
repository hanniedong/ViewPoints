class Api::PostingsController < ApplicationController
  include SessionsHelper

  def index
    postings = Posting.search(search_params.to_h.symbolize_keys)
    render json: postings
  end
 
  def show
    posting = Posting.find(params[:id])
    render json: posting
  end

  def create
    @posting = Posting.create!(posting_params)
    render json: @posting
  end

  private
 
  def search_params
    params.permit(:min_lng, :max_lng, :min_lat, :max_lat)
  end

  def post_show_params
    params.permit(:posting_id)
  end 

  def posting_params
    params.permit(:name, :address, :description, :latitude, :user_id, :longitude, :photo)
  end 
  
end