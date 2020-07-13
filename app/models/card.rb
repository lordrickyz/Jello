class Card < ApplicationRecord
  validates :title, :list_id, presence: true

  belongs_to :list,
      primary_key: :id,
      foreign_key: :list_id,
      class_name: :List

  def prev_card
    Card.find_by(id: self.prev_id)
  end

  def next_card
    Card.find_by(id: self.next_id)
  end

  def updateCards(prev_id = nil, next_id = nil)

    old_prev_card = self.prev_card
    old_next_card = self.next_card

    new_prev_card = Card.find_by(id: prev_id)
    new_next_card = Card.find_by(id: next_id)

    new_prev_card.next_id = self.id unless new_prev_card.nil?
    new_next_card.prev_id = self.id unless new_next_card.nil?

    self.prev_id = prev_id
    self.next_id = next_id

    if !old_prev_card.nil? 
      if !old_next_card.nil?
        old_prev_card.next_id = old_next_card.id
        old_next_card.prev_id = old_prev_card.id
      else
        old_prev_card.next_id = nil
      end
    else
      if !old_next_card.nil?
        old_next_card.prev_id = nil
      end
    end

    Card.transaction do
      old_prev_card.save unless old_prev_card.nil?
      old_next_card.save unless old_next_card.nil?
      new_prev_card.save unless new_prev_card.nil?
      new_next_card.save unless new_next_card.nil?
      self.save
    end
  end  

end