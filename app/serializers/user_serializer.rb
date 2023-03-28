class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :password_digest, :first_name, :last_name
  has_many :reviews, serializer: ReviewSerializer
  has_many :books
end
