class List < ApplicationRecord
  validates :title, :board_id, presence: true

  belongs_to :board,
  primary_key: :id,
  foreign_key: :board_id,
  class_name: :Board

  has_many :cards,
  primary_key: :id,
  foreign_key: :list_id,
  class_name: :Card

  def prev_list
    List.find_by(id: self.prev_id)
  end

  def next_list
    List.find_by(id: self.next_id)
  end

  def updateLists(prev_id = nil, next_id = nil)
    old_prev_list = self.prev_list
    old_next_list = self.next_list

    new_prev_list = List.find_by(id: prev_id)
    new_next_list = List.find_by(id: next_id)

    new_prev_list.next_id = self.id if new_prev_list
    new_next_list.prev_id = self.id if new_next_list

    self.prev_id = prev_id
    self.next_id = next_id

    if !old_prev_list.nil? 
      if !old_next_list.nil?
        old_prev_list.next_id = old_next_list.id
        old_next_list.prev_id = old_prev_list.id
      else
        old_prev_list.next_id = nil
      end
    else
      if !old_next_list.nil?
        old_next_list.prev_id = nil
      end
    end

    List.transaction do
      old_prev_list.save unless old_prev_list.nil?
      old_next_list.save unless old_next_list.nil?
      new_prev_list.save unless new_prev_list.nil?
      new_next_list.save unless new_next_list.nil?
      self.save
    end
  end

end