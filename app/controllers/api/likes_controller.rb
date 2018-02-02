class Api::LikesController < ApplicationController
  include SessionsHelper

  def create
    @like = Like.create!(likes_params)
    render json: @like
  end

  private
 

  def likes_params
    params.permit(:user_id, :posting_id)
  end 
  
end