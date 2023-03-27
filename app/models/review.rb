class Review < ApplicationRecord
    belongs_to :user 
    belongs_to :book

    validates :stars, presence: true, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
    validates :summary, presence: true, length: { maximum: 250 }
    validates :book_id, presence: true
    validates :user_id, presence: true 

end
