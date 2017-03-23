class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.string :username
      t.string :title, null: false
      t.text :body, null: false
      t.integer :rating, null: false, default: 5
      t.timestamps
    end

    add_index :reviews, :user_id
    add_index :reviews, :book_id
  end
end
