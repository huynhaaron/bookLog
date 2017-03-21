class CreateShelvedbooks < ActiveRecord::Migration[5.0]
  def change
    create_table :shelvedbooks do |t|
      t.integer :book_id, null: false
      t.integer :bookshelf_id, null: false
      t.timestamps
    end

    add_index :shelvedbooks, :book_id
    add_index :shelvedbooks, :bookshelf_id
    add_index :shelvedbooks, [:book_id, :bookshelf_id], unique: true

  end
end
