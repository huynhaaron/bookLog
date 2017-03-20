class Api::BookshelvesController < ApplicationController

  def index
    @bookshelves = Bookshelf.where(user_id: current_user.id)
    render 'api/bookshelves/index'
  end

  def create
    @bookshelf = Bookshelf.new(bookshelf_params)
    @bookshelf.user_id = current_user.id
    if @bookshelf.save
      render json: @bookshelf
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def show
    @bookshelf = Bookshelf.find(params[:id])
    if @bookshelf
      render json: @bookshelf
    else
      render json: ["Unable to find books"], status: 404
    end
  end

  def destroy
    @bookshelf = Bookshelf.find(params[:id]).destroy
    render json: {id: params[:id]}, status: 200
  end

  private

  def bookshelf_params
    params.require(:bookshelf).permit(:name, :user_id)
  end

end
