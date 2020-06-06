class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :title, null: false
      t.string :description
      t.integer :admin_id, null: false
      t.timestamps
    end

    add_index :boards, :admin_id
  end
end
