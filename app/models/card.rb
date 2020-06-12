class Card < ApplicationRecord
    validates :title, :list_id, presence: true

    belongs_to :list,
        primary_key: :id,
        foreign_key: :list_id,
        class_name: :List

end