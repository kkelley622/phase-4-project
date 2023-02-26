class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :stars, :summary, :user_id, :book_id
end
