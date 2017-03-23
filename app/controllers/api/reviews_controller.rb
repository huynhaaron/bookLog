class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.where(book_id: params[:book_id]).order(created_at: :desc)
  end


  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    @review.username = current_user.username
    @review.book_id = params[:book_id]
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :book_id, :user_id,
                                   :username, :title, :body)
  end
end
