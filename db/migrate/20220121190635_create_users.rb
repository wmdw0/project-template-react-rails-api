class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string "displayName"
      t.string "username"
      t.boolean "verified"
      t.string "text"
      t.string "avatar"
      t.string "image"
  
      t.timestamps
    end
  end
 end
 
