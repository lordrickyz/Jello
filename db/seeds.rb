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
])

seed_boards = Board.create([
  { title: Faker::Team.name,
    description: Faker::Team.state,
    admin_id: seed_users.first.id
  },
  { title: Faker::Team.name,
    description: Faker::Team.state,
    admin_id: seed_users.first.id
  },
  { title: Faker::Team.name,
    description: Faker::Team.state,
    admin_id: seed_users.first.id
  },
  { title: "Ricky's Board",
    description: "This is a description for Ricky's Board",
    admin_id: seed_users.second.id
  },
])

b1_seed_lists = List.create([
  { title: Faker::Game.title,
    board_id: seed_boards.first.id
  },
  { title: Faker::Game.title,
    board_id: seed_boards.first.id
  },
  { title: Faker::Game.title,
    board_id: seed_boards.first.id
  }
])
b1_seed_lists[0].updateLists(nil, b1_seed_lists[1].id)
b1_seed_lists[1].updateLists(b1_seed_lists[0].id, b1_seed_lists[2].id)
b1_seed_lists[2].updateLists(b1_seed_lists[1].id, nil)

b2_seed_lists = List.create([
  { title: Faker::Game.platform,
    board_id: seed_boards.second.id
  },
  { title: Faker::Game.platform,
    board_id: seed_boards.second.id
  },
  { title: Faker::Game.platform,
    board_id: seed_boards.second.id
  }
])
b2_seed_lists[0].updateLists(nil, b2_seed_lists[1].id)
b2_seed_lists[1].updateLists(b2_seed_lists[0].id, b2_seed_lists[2].id)
b2_seed_lists[2].updateLists(b2_seed_lists[1].id, nil)

b3_seed_lists = List.create([
  { title: Faker::Game.genre,
    board_id: seed_boards.third.id
  }
])
b3_seed_lists[0].updateLists(nil, nil)

b4_seed_lists = List.create([
  { title: "Ricky's List 1",
    board_id: seed_boards.fourth.id
  },
  { title: "Ricky's List 2",
    board_id: seed_boards.fourth.id
  },
  { title: "Ricky's List 3",
    board_id: seed_boards.fourth.id
  }
])
b4_seed_lists[0].updateLists(nil, b4_seed_lists[1].id)
b4_seed_lists[1].updateLists(b4_seed_lists[0].id, b4_seed_lists[2].id)
b4_seed_lists[2].updateLists(b4_seed_lists[1].id, nil)


b1l1_seed_cards = Card.create([
  { title: Faker::Marketing.buzzwords,
    description: Faker::Quote.robin,
    list_id: b1_seed_lists[0].id
  },
  { title: Faker::Marketing.buzzwords,
    description: Faker::Quote.robin,
    list_id: b1_seed_lists[0].id
  }
])

b1l1_seed_cards[0].updateCards(nil, b1l1_seed_cards[1].id)
b1l1_seed_cards[1].updateCards(b1l1_seed_cards[0].id, nil)

b1l2_seed_cards = Card.create([
  { title: Faker::Marketing.buzzwords,
    description: Faker::Quote.robin,
    list_id: b1_seed_lists[1].id
  },
  { title: Faker::Marketing.buzzwords,
    description: Faker::Quote.robin,
    list_id: b1_seed_lists[1].id
  }
])

b1l2_seed_cards[0].updateCards(nil, b1l2_seed_cards[1].id)
b1l2_seed_cards[1].updateCards(b1l2_seed_cards[0].id, nil)

b1l3_seed_cards = Card.create([
  { title: Faker::Marketing.buzzwords,
    description: Faker::Quote.most_interesting_man_in_the_world,
    list_id: b1_seed_lists[2].id
  },
  { title: Faker::Marketing.buzzwords,
    description: Faker::Quote.most_interesting_man_in_the_world,
    list_id: b1_seed_lists[2].id
  },
  { title: Faker::Marketing.buzzwords,
    description: Faker::Quote.most_interesting_man_in_the_world,
    list_id: b1_seed_lists[2].id
  }
])

b1l3_seed_cards[0].updateCards(nil, b1l3_seed_cards[1].id)
b1l3_seed_cards[1].updateCards(b1l3_seed_cards[0].id, b1l3_seed_cards[2].id)
b1l3_seed_cards[2].updateCards(b1l3_seed_cards[1].id, nil)


b2l1_seed_cards = Card.create([
  { title: Faker::Marketing.buzzwords,
    description: Faker::Quote.yoda,
    list_id: b2_seed_lists[0].id
  },
  { title: Faker::Marketing.buzzwords,
    description: Faker::Quote.yoda,
    list_id: b2_seed_lists[0].id
  }
])

b2l1_seed_cards[0].updateCards(nil, b2l1_seed_cards[1].id)
b2l1_seed_cards[1].updateCards(b2l1_seed_cards[0].id, nil)

b2l2_seed_cards = Card.create([
  { title: Faker::Marketing.buzzwords,
    description: Faker::Quote.yoda,
    list_id: b2_seed_lists[1].id
  },
  { title: Faker::Marketing.buzzwords,
    description: Faker::Quote.yoda,
    list_id: b2_seed_lists[1].id
  }
])

b2l2_seed_cards[0].updateCards(nil, b2l2_seed_cards[1].id)
b2l2_seed_cards[1].updateCards(b2l2_seed_cards[0].id, nil)

b2l3_seed_cards = Card.create([
  { title: Faker::Marketing.buzzwords,
    description: Faker::Quote.yoda,
    list_id: b2_seed_lists[2].id
  },
  { title: Faker::Marketing.buzzwords,
    description: Faker::Quote.yoda,
    list_id: b2_seed_lists[2].id
  }
])

b2l3_seed_cards[0].updateCards(nil, b2l3_seed_cards[1].id)
b2l3_seed_cards[1].updateCards(b2l3_seed_cards[0].id, nil)


b3l1_seed_cards = Card.create([
  { title: Faker::Marketing.buzzwords,
    description: Faker::Quote.yoda,
    list_id: b3_seed_lists[0].id
  },
  { title: Faker::Marketing.buzzwords,
    description: Faker::Quote.yoda,
    list_id: b3_seed_lists[0].id
  }
])

b3l1_seed_cards[0].updateCards(nil, b3l1_seed_cards[1].id)
b3l1_seed_cards[1].updateCards(b3l1_seed_cards[0].id, nil)