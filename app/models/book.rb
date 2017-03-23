# == Schema Information
#
# Table name: books
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  author       :string           not null
#  description  :text
#  cover_url    :string
#  avg_rating   :float
#  pages        :integer
#  publish_date :date
#  publisher    :string
#  isbn         :string
#  language     :string
#  buy_url      :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Book < ApplicationRecord
  validates :title, :author, presence: true
  # 
  # has_and_belongs_to_many :bookshelves
  #
  # has_and_belongs_to_many :users, through: :bookshelves
end
