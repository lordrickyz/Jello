class Board < ApplicationRecord
  validates :title, :admin_id, presence: true
  before_validation :assign_default_label

  def assign_default_label
    if (!self.title.blank?)
      self.title = "Default Board Title"
    end
  end

  def is_admin?(user)
    user.id == self.admin_id
  end

end
