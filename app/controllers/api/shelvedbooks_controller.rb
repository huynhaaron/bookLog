class Api::ShelvedbooksController < ApplicationController

  def create
    @shelvedbook = Shelvedbook.new(shelvedbook_params)
    if @shelvedbook.save
      render json: {}, status: 200
    else
      render json: @shelvedbook.errors.full_messages, status: 422
    end

  end

  def destroy
    @shelvedbook = Shelvedbook.find_by(book_id: params[:book_id],
                                       bookshelf_id: params[:bookshelf_id])
    @shelvedbook.destroy
    render json: {}

  end

  private

  def shelvedbook_params
    params.require(:shelvedbook).permit(:book_id, :bookshelf_id)
  end

end
