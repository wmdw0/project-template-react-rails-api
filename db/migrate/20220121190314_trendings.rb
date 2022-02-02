class Trendings < ActiveRecord::Migration[6.1]
  def change
    create_table :trendings do |t|
      t.string :topic
      t.string :status
      t.string :title
      t.string :description
      t.string :image_url
       t.timestamps
    end
  end
 end
 
