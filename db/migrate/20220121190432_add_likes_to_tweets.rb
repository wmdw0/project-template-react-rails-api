class AddLikesToTweets < ActiveRecord::Migration[6.1]
  def change
    add_column :tweets, :likes, :integer
  end
 end
 
