class User < ApplicationRecord
    has_many :reviews 
    has_many :books, through: :reviews 

    validates :user_name, presence: true, uniqueness: true
    validates :first_name, presence: true 
    validates :last_name, presence: true 

    has_secure_password

    def self.find_the_user_with_most_reviews
         # Users and find how many reviews they have
         
         usersReviewsLength = User.all.map{|user| user.reviews.length}
        # Order our users based on number of reviews
        orderedUsers = usersReviewsLength.sort
        # orderedReviews = usersReviewsLength.sort 
        # Return the user with the highest number
    end
    
end
