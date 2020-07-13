# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Board.destroy_all
List.destroy_all
Card.destroy_all

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
    admin_id: seed_users.second.id
  },
  { title: "App Student's Board",
    description: "This is a description for App's Board",
    admin_id: seed_users.third.id
  }
])

seed_lists = List.create([
  { title: "Demo List 1 Part One",
    board_id: seed_boards.first.id
  },
  { title: "Demo List 1 Part Two",
    board_id: seed_boards.first.id
  },
  { title: "Demo List 1 Part Three",
    board_id: seed_boards.first.id
  },
  { title: "Demo List 2 Part One",
    board_id: seed_boards.second.id
  },
  { title: "Demo List 2 Part Two",
    board_id: seed_boards.second.id
  },
  { title: "Demo List 2 Part Three",
    board_id: seed_boards.second.id
  },
  { title: "Demo List 3 Part One",
    board_id: seed_boards.third.id
  },
  { title: "Demo List 3 Part Two",
    board_id: seed_boards.third.id
  },
  { title: "Demo List 3 Part Three",
    board_id: seed_boards.third.id
  },
  { title: "Ricky's List 1",
    board_id: seed_boards.fourth.id
  },
  { title: "Ricky's List 2",
    board_id: seed_boards.fourth.id
  },
  { title: "Ricky's List 3",
    board_id: seed_boards.fourth.id
  },
  { title: "App Student's List 1",
    board_id: seed_boards.fifth.id
  },
  { title: "App Student's List 2",
    board_id: seed_boards.fifth.id
  },
  { title: "App Student's List 3",
    board_id: seed_boards.fifth.id
  }
])


seed_cards = Card.create([
  { title: "Demo Card 1 Part One",
    description: "A Description for Demo 1",
    list_id: seed_lists.first.id
  },
  { title: "Demo Card 1 Part Two",
    description: "A Description for Demo 1",
    list_id: seed_lists.first.id
  },
  { title: "Demo Card 2 Part One",
    description: "A Description for Demo 2",
    list_id: seed_lists.second.id
  },
  { title: "Demo Card 2 Part Two",
    description: "A Description for Demo 2",
    list_id: seed_lists.second.id
  },
  { title: "Demo Card 3 Part One",
    description: "A Description for Demo 3",
    list_id: seed_lists.third.id
  },
  { title: "Demo Card 3 Part Two",
    description: "A Description for Demo 3",
    list_id: seed_lists.third.id
  },
  { title: "Demo Card 3 Part Three",
    description: "A Description for Demo 3",
    list_id: seed_lists.third.id
  }
])