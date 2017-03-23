json.partial! "api/users/user", user: @user

json.bookshelves do
  @user.bookshelves.each do |bookshelf|
    json.set! bookshelf.id do
      json.extract! bookshelf, :id, :name, :user_id
    end
  end
end


json.shelvedbooks do
  @user.shelvedbooks.each do |book|
    json.set! book.id do
      json.extract! book, :id, :title, :cover_url
    end
  end
end
