class Api::SessionsController < ApplicationController
  include SessionsHelper

  # render JSON user object for logged in user
  def index
    render json: current_user
  end

  # render JSON user object for user profile that's not logged in
  def show
    render json: User.find(params[:id])
  end

  def create
    user = User.find_by(email: params[:session][:email])

    if user && user.authenticate(params[:session][:password])
      login_user(user)
      render json: { status: 200 }
    else
      render json: { errors: ["incorrect email or password"], status: 422 }
    end
  end

  def destroy
    logout_user
    redirect_to "/"
  end

  private
  def sessions_params
    params.require(:session).permit(:email, :session)
  end

end