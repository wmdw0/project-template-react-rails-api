class TweetSerializer < ActiveModel::Serializer
  attributes :id, :content, :image, :location
  has_one :user
end
