# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170323163734) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "books", force: :cascade do |t|
    t.string   "title",        null: false
    t.string   "author",       null: false
    t.text     "description"
    t.string   "cover_url"
    t.float    "avg_rating"
    t.integer  "pages"
    t.date     "publish_date"
    t.string   "publisher"
    t.string   "isbn"
    t.string   "language"
    t.string   "buy_url"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["author"], name: "index_books_on_author", using: :btree
    t.index ["title"], name: "index_books_on_title", using: :btree
  end

  create_table "bookshelves", force: :cascade do |t|
    t.string   "name"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_bookshelves_on_name", using: :btree
    t.index ["user_id"], name: "index_bookshelves_on_user_id", using: :btree
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",                null: false
    t.integer  "book_id",                null: false
    t.string   "username"
    t.string   "title",                  null: false
    t.text     "body",                   null: false
    t.integer  "rating",     default: 5, null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.index ["book_id"], name: "index_reviews_on_book_id", using: :btree
    t.index ["user_id"], name: "index_reviews_on_user_id", using: :btree
  end

  create_table "shelvedbooks", force: :cascade do |t|
    t.integer  "book_id",      null: false
    t.integer  "bookshelf_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["book_id", "bookshelf_id"], name: "index_shelvedbooks_on_book_id_and_bookshelf_id", unique: true, using: :btree
    t.index ["book_id"], name: "index_shelvedbooks_on_book_id", using: :btree
    t.index ["bookshelf_id"], name: "index_shelvedbooks_on_bookshelf_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
