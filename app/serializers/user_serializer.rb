class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :password, :first_name, :last_name
end