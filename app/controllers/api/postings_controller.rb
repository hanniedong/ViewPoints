class Api::PostingsController < ApplicationController

  def index
    postings = Posting.search(search_params.to_h.symbolize_keys)
    render json: postings
  end
 
  def create
    p "**********" 
    p posting_params
    p posting_params[:photo]
    @posting = Posting.create!(posting_params)
    puts "posting.photo =" + @posting.photo.inspect
    render json: @posting
  end

  private
 
  def search_params
    params.permit(:min_lng, :max_lng, :min_lat, :max_lat)
  end

  def posting_params
    params.permit(:name, :description, :latitude, :longitude, :user_id, :photo)
  end 
  
end