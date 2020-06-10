class Board < ApplicationRecord
  validates :title, :admin_id, presence: true
  # before_validation :assign_default_title

  belongs_to :admin,
  foreign_key: :admin_id,
  class_name: :User,
  primary_key: :id

  # def assign_default_title
  #   if (!self.title.blank?)
  #     self.title = "Default Board Title"
  #   end
  # end

  def is_admin?(user) #basically owners of the board.
    user.id == self.admin_id
  end

end
