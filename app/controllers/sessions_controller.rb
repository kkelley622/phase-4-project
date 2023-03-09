class SessionsController < ApplicationController

    skip_before_action :authorize, only: [:create]
    before_action :authorized, only: [:create]

    def create 
        user = User.find_by_user_name(params[:user_name])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: ("Username or Password Didn't Match")}, status: :unprocessable_entity
        end
    end

    def destroy 
        session.delete :user_id
    end

end
