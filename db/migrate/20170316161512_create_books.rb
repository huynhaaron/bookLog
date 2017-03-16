class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.text :description
      t.string :cover_url
      t.float :avg_rating
      t.integer :pages
      t.date :publish_date
      t.string :publisher
      t.string :isbn
      t.string :language
      t.string :buy_url

      t.timestamps
    end

    add_index :books, :title
    add_index :books, :author
  end
end
