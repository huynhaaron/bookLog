
json.extract! @book, :id, :title, :author, :description, :cover_url, :avg_rating, :pages, :publish_date, :publisher, :isbn, :language, :buy_url
json.cover_url asset_path(@book.cover_url)
