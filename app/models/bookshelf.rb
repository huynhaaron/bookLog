# == Schema Information
#
# Table name: bookshelves
#
#  id         :integer          not null, primary key
#  name       :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Bookshelf < ApplicationRecord
  validates :name, :user_id, presence: true
  validates_uniqueness_of :name, scope: :user_id

  belongs_to :user
  has_many :books, through: :shelvedbooks
  has_many :shelvedbooks, dependent: :destroy
end
