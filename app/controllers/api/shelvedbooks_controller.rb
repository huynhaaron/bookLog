class Api::ShelvedbooksController < ApplicationController

  def create
    @shelvedbook = Shelvedbook.new(shelvedbook_params)
    if @shelvedbook.save
       @bookshelf = @shelvedbook.bookshelf
       render "api/bookshelves/show"
    else
      render json: @shelvedbook.errors.full_messages, status: 422
    end

  end

  def destroy
    @shelvedbook = Shelvedbook.find_by(shelvedbook_params)
    @bookshelf = Bookshelf.find(shelvedbook_params[:bookshelf_id])
    @shelvedbook.destroy
    render "api/bookshelves/show"

  end

  private

  def shelvedbook_params
    params.require(:shelvedBook).permit(:book_id, :bookshelf_id)
  end

end
