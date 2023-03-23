class BooksController < ApplicationController

    before_action :find_book, only: [:show]

    def index 
        books = Book.all
        render json: books, status: :ok
    end

    def show 
        render json: @book, status: :ok
    end

    def create
        book = Book.create!(book_params)
        render json: book, status: :created 
    end


    private 

    def find_book
        @book = Book.find(params[:id])
    end

    def book_params 
        params.permit(:title, :author, :image_url)
    end

end
