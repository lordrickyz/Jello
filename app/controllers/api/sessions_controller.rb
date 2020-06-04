class Api::SessionsController < ApplicationController

  def create
    if User.find_by(username: params[:user][:username])
      @user = User.find_by_credentials(params[:user][:username],params[:user][:password])

      if @user.instance_of? User
        login!(@user)
        render :show
      else
        render json: ["Password does not match"], status: 422
      end
    else
      render json: ["User does not exist"], status: 422
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: ['No one is logged in!'], status: 404
    end
  end

end
