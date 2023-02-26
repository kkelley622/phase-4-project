class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :image_url
  has_many :reviews 
end
