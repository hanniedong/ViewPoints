class Api::LikesController < ApplicationController
  include SessionsHelper

  def create
    p "**********"
    p current_user.id
    p "**********"
    p likes_params
    @like = Like.create!(current_user.id, likes_params[:photo_id])
    render json: @like
  end

  private
 

  def likes_params
    params.permit(:photo_id)
  end 
  
end