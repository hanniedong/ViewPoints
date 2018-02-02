class Api::LikesController < ApplicationController
  include SessionsHelper

  def create
    @likes = Like.create!(likes_params)
    p likes_params
    render json: @posting
  end

  private
 

  def likes_params
    params.permit(:user_id, :photo_id)
  end 
  
end