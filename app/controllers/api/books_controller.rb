class Api::BooksController < ApplicationController

  def index
    @books = Book.all
  end

  def show
    @book = Book.find(params[:id])
    if @book
      render :show
    else
      render json: "Book is not in the database", status: 422
    end
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :description, :cover_url,
                                 :avg_rating, :pages, :publish_date,
                                 :publisher, :isbn, :language, :buy_url)
  end

end
