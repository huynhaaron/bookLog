class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username],
                                     params[:user][:password])
    if @user
      log_in_user!(@user)
      render "api/users/show"
    else
      render json: "Error: Invalid Credentials", status: 422
    end

  end

  def destroy
    if logged_in?
      log_out_user!
      render json: {}
    else
      render json: "Error: No one logged in", status: 404
    end
  end

end
