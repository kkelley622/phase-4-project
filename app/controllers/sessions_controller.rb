class SessionsController < ApplicationController

    def create 
        user = User.find_by_user_name(params[:user_name])
        if user&.authenticate(params[:password])
            render json: user
        else
            render json: { errors: ("Username or Password Didn't Match")}, status: :unprocessable_entity
        end
    end

end
