
json.extract! @book, :id, :title, :author, :description, :cover_url,
              :avg_rating, :pages, :publish_date, :publisher, :isbn,
              :language, :buy_url
json.cover_url asset_path(@book.cover_url)

json.reviews do
  @book.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :title, :body, :rating, :user_id,
                    :username, :created_at
    end
  end
end
