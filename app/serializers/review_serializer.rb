class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :stars, :summary, :user_id, :book_id
  has_one :book 
  has_one :user 
end
