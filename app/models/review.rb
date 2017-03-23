# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  book_id    :integer          not null
#  body       :text             not null
#  title      :string           not null
#  rating     :integer          default("5"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :user_id, :book_id, :title, :body, :rating, presence: true
  
  belongs_to :user
  belongs_to :book
end
