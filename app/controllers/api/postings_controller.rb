class Api::PostingsController < ApplicationController

  def index
    @postings = Posting.all
    render json: @postings
  end

end