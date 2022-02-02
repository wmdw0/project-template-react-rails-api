class Tweet < ApplicationRecord
  belongs_to :user
  validates :content, presence: true
  # validates :image, presence: true
  # validates :likes, presence: true
  has_many :comments
  has_many :likes
  # has_many :retweets
 

end
