class Notifications < ActiveRecord::Migration[6.1]
  def change
    create_table :notifications do |t|
      t.string :image
      t.string :message
      t.integer :time
      # t.belongs_to :user, null: false, foreign_key: true
      t.timestamps
    end
  end
 end
 
