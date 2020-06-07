# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


seed_users = User.create([
  { username: "User_Demo", email: "demo@jello.com", password: "password" },
  { username: "rickyz", email: "rickyz@jello.com", password: "password" },
  { username: "App_Student", email: "appstudent@aa.com", password: "password" },
])

seed_boards = Board.create([
  { title: "Demo Board 1",
    description: "This is a description for Demo Board 1",
    admin_id: seed_users.first.id
  },
  { title: "Demo Board 2",
    description: "This is a description for Demo Board 2",
    admin_id: seed_users.first.id
  },
  { title: "Demo Board 3",
    description: "This is a description for Demo Board 3",
    admin_id: seed_users.first.id
  },
  { title: "Ricky's Board",
    description: "This is a description for Ricky's Board",
    admin_id: seed_users.first.id
  },
  { title: "App Student's Board 3",
    description: "This is a description for App's Board",
    admin_id: seed_users.first.id
  }
])