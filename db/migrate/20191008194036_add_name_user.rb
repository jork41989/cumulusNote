class AddNameUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :f_name, :string
    add_column :users, :l_name, :string
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
