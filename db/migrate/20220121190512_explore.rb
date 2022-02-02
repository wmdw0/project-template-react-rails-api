class Explore < ActiveRecord::Migration[6.1]
  def change
    create_table :explore do |t|
      t.string :image
      t.string :heading
      t.boolean :subheading
      t.string :text
      t.timestamps
    end
  end
 end
 
