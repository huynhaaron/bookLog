# == Schema Information
#
# Table name: shelvedbooks
#
#  id           :integer          not null, primary key
#  book_id      :integer          not null
#  bookshelf_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Shelvedbook < ApplicationRecord
  validates :book_id, :bookshelf_id, presence: true
  validates :book_id, uniqueness: { scope: :bookshelf_id }

  belongs_to :book
  belongs_to :bookshelf
end
