class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true
    validates :username, uniqueness: true
    # validates :image, presence: true
    has_many :tweets
    has_many :notifications
    has_many :subscriptions, foreign_key: :follower_id, dependent: :destroy
    has_many :leaders, through: :subscriptions


    has_many :reverse_subscriptions, foreign_key: :leader_id, class_name: 'Subscription', dependent: :destroy
    has_many :followers, through: :reverse_subscriptions

    def following?(leader)
        leaders.include? leader
    end

    def follow!(leader)
        if leader != self && !following?(leader)
            leaders << leader
        else
            puts "error"
        end
    end
    # !following?(leader) && leader != self
end
