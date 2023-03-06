class User < ApplicationRecord
    has_many :reviews 
    has_many :books, through: :reviews 

    validates :user_name, presence: true, uniqueness: true
    validates :first_name, presence: true 
    validates :last_name, presence: true 

    has_secure_password
    
end
