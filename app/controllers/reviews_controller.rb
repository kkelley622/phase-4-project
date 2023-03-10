class ReviewsController < ApplicationController

    before_action :find_review, only: [:show, :update, :destroy]
    before_action only: [:update, :destroy] do 
        authorize_user_resource(@review.user_id)
    end

    def index 
        if params[:user_id]
            user = User.find_by_id(params[:user_id])
            @reviews = user.reviews
        else
        @reviews = Review.all
        end
        render json: @reviews, status: :ok 
    end

    def show 
        render json: @review, status: :ok
    end

    def create 
        review = current_user.reviews.create!(review_params)
        render json: review, status: :created
    end

    def update
        @review.update!(review_params)
        render json: @review
    end

    def destroy 
        @review.destroy 
        render json: @review
    end

    private 

    def find_review
        @review = Review.find(params[:id])
    end

    def review_params 
        params.permit(:stars, :summary, :book_id)
    end

end
