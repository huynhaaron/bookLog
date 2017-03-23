@bookshelves.each do |bookshelf|
  json.set! bookshelf.id do
    json.partial! "api/bookshelves/bookshelf", bookshelf: bookshelf
    json.shelvedbooks do
      bookshelf.books.each do |book|
        json.set! book.id do
          json.extract! book, :id, :title, :cover_url
        end
      end
    end
  end
end
