class ReviewsController < ApplicationController

    before_action :find_review, only: [:show, :update, :destroy]

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
        if @review.user_id == current_user.id 
            @review.update!(review_params)
            render json: @review
        else 
            render json: { errors: ["You are not authorized to edit this review."]}, status: :unauthorized
        end 
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
