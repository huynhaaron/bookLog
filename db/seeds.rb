# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Book.destroy_all

User.create!(username: "test123", password: "password")
User.create!(username: "guest", password: "password")
User.create!(username: "demo", password: "password")


Book.create!(title: "Harry Potter and the Sorcerer's Stone (Harry Potter, #1)",
             author: "J.K. Rowling",
             description: "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.",
             cover_url: "https://images.gr-assets.com/books/1474154022m/3.jpg",
             avg_rating: 4.52,
             publish_date: "7-8-1999",
             publisher: "",
             isbn: "0-7475-3269-9",
             language: "en",
             buy_url: "")

Book.create!(title: "Flowers for Algernon",
             author: "Daniel Keyes",
             description: "The beloved, classic story of a mentally disabled man whose experimental quest for intelligence mirrors that of Algernon, an extraordinary lab mouse.",
             cover_url: "http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
             avg_rating: 4.5,
             publish_date: "2007-12-01",
             publisher: "Houghton Mifflin Harcourt",
             isbn: "0547539630",
             language: "en",
             buy_url: "")

Book.create!(title: "Ender's Game",
             author: "Orson Scott Card",
             description: "Winner of the Hugo and Nebula Awards In order to develop a secure defense against a hostile alien race's next attack, government agencies breed child geniuses and train them as soldiers. A brilliant young boy, Andrew \"Ender\" Wiggin lives with his kind but distant parents, his sadistic brother Peter, and the person he loves more than anyone else, his sister Valentine. Peter and Valentine were candidates for the soldier-training program but didn't make the cut—young Ender is the Wiggin drafted to the orbiting Battle School for rigorous military training. Ender's skills make him a leader in school and respected in the Battle Room, where children play at mock battles in zero gravity. Yet growing up in an artificial community of young soldiers Ender suffers greatly from isolation, rivalry from his peers, pressure from the adult teachers, and an unsettling fear of the alien invaders. His psychological battles include loneliness, fear that he is becoming like the cruel brother he remembers, and fanning the flames of devotion to his beloved sister. Is Ender the general Earth needs? But Ender is not the only result of the genetic experiments. The war with the Buggers has been raging for a hundred years, and the quest for the perfect general has been underway for almost as long. Ender's two older siblings are every bit as unusual as he is, but in very different ways. Between the three of them lie the abilities to remake a world. If, that is, the world survives. Ender's Game is the winner of the 1985 Nebula Award for Best Novel and the 1986 Hugo Award for Best Novel. At the Publisher's request, this title is being sold without Digital Rights Management Software (DRM) applied.",
             cover_url: "http://books.google.com/books/content?id=Ojqi8KbWuLwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
             avg_rating: 4.5,
             publish_date: "2010-04-01",
             publisher: "Macmillan",
             isbn: "142996393X",
             language: "en",
             buy_url: "")

Book.create!(title: "Animal Farm",
             author: "George Orwell",
             description: "George Orwell's classic satire of the Russian Revolution is an intimate part of our contemporary culture. It is the account of the bold struggle, initiated by the animals, that transforms Mr. Jones's Manor Farm into Animal Farm--a wholly democratic society built on the credo that All Animals Are Created Equal. Out of their cleverness, the pigs Napoleon, Squealer, and Snowball emerge as leaders of the new community in a subtle evolution that proves disastrous. The climax is the brutal betrayal of the faithful horse Boxer, when totalitarian rule is reestablished with the bloodstained postscript to the founding slogan: But some Animals Are More Equal Than Others. . . .",
             cover_url: "https://images.gr-assets.com/books/1327959366m/5472.jpg",
             avg_rating: 4.2,
             publish_date: "1950-05-05",
             publisher: "Signet Classic",
             isbn: "2966408",
             language: "en",
             buy_url: "0-451-51679-6")

Book.create!(title: "",
             author: "",
             description: "",
             cover_url: "",
             avg_rating: 4.5,
             publish_date: "",
             publisher: "",
             isbn: "",
             language: "en",
             buy_url: "")
