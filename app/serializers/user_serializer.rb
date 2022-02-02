class UserSerializer < ActiveModel::Serializer
  attributes :id, :displayName, :username, :verified, :text, :avatar, :image
  has_many :tweets
end
