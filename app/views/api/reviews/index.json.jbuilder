@reviews.each do |review|
  json.set! review[:id] do
    json.extract! review, :id, :user_id, :book_id,
                  :title, :body, :rating, :username, :created_at
  end
end
