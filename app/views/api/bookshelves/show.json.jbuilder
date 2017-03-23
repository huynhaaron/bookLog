json.extract! @bookshelf, :id, :name, :user_id

json.shelvedbooks do
  @bookshelf.books.each do |book|
    json.set! book.id do
      json.extract! book, :id, :title, :cover_url
    end
  end
end
