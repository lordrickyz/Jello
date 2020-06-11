class Board < ApplicationRecord
  validates :title, :admin_id, presence: true

  belongs_to :admin,
  foreign_key: :admin_id,
  class_name: :User,
  primary_key: :id

  has_many :lists,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: :List,

  has_many :cards,
      through: :lists,
      source: :cards

  def is_admin?(user) #basically owners of the board.
    user.id == self.admin_id
  end

end
