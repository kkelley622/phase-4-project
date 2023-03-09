class UsersController < ApplicationController

    before_action :find_user, only: [:show]
    skip_before_action :authorize, only: [:get_current_user, :create]
    before_action :authorized, only: [:get_current_user, :create]

    def get_current_user
        render json: current_user
    end

    def index 
        users = User.all
        render json: users, status: :ok 
    end

    def show 
        render json: @user, status: :ok
    end

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, status: :created
    end

    private 

    def find_user 
        @user = User.find(params[:id])
    end 

    def user_params 
        params.permit(:user_name, :first_name, :last_name, :password)
    end
end
