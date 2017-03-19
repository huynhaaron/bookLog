class CreateBookshelves < ActiveRecord::Migration[5.0]
  def change
    create_table :bookshelves do |t|
      t.string :name
      t.integer :user_id

      t.timestamps
    end

    add_index :bookshelves, :user_id
    add_index :bookshelves, :name
  end
end
