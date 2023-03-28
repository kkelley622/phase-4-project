class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :stars, :summary, :user_id, :book_id, :book, :user
end
