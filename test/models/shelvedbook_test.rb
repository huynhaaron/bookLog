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

require 'test_helper'

class ShelvedbookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
