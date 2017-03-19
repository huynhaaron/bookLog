class Api::BookshelvesController < ApplicationController

  def index
    @bookshelves = Bookshelf.where(user_id: current_user.id)
  end

  def create
    @bookshelf = Bookshelf.new(bookshelf_params)
    @bookshelf.user_id = current_user.id
    if @bookshelf.save
      render 'api/bookshelves/index'
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def show
    @bookshelf = Bookshelf.find(params[:id])
    if @bookshelf
      render :show
    else
      render json: ["Unable to find books"], status: 404
    end
  end

  def destroy
    @bookshelf = Bookshelf.find(params[:id])
    if @bookself.user_id == current_user.id
      @bookshelf.destroy
      render 'api/bookshelves/index'
    else
      render json: ["Unable find bookshelf"], status: 404
    end
  end

  private

  def bookshelf_params
    params.require(:bookshelf).permit(:id, :name, :user_id)
  end

end
