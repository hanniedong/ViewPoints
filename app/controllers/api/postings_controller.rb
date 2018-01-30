class Api::PostingsController < ApplicationController

  def index
    @postings = Posting.search(search_params.to_h.symbolize_keys)
    render json: @postings
  end

  private
  def search_params
    params.permit(:min_lng, :max_lng, :min_lat, :max_lat)
  end

end