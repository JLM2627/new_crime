class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :title
      t.string :description
      t.references :user, foreign_key: true
      t.references :crime, foreign_key: true

      t.timestamps
    end
  end
end
