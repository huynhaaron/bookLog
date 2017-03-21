class Api::ShelvedbooksController < ApplicationController

  def create
    target_bookshelf = Bookshelf.find_by(id: params[:bookshelf_id],
                                         user_id: current_user.id)

    debugger;
    @shelvedbook = Shelvedbook.new(book_id: params[:book_id],
                                   bookshelf_id: target_bookshelf.id)

    if @shelvedbook.save
      render json: @shelvedbook, status: 200
    else
      render json: @shelvedbook.errors.full_messages, status: 422
    end

  end

  def destroy
    @shelvedbook = Shelvedbook.find_by(book_id: params[:book_id],
                                       bookshelf_id: params[:bookshelf_id])
    @shelvedbook.destroy
    render json: {}, status: 200

  end

  private

  def shelvedbook_params
    params.require(:shelvedbooks).permit(:book_id, :bookshelf_id)
  end

end
