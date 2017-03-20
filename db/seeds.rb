# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Book.create!(title: "N/A",
#              author: "N/A",
#              description: "N/A",
#              cover_url: "N/A",
#              avg_rating: 4.5,
#              pages: 0,
#              publish_date: "N/A",
#              publisher: "N/A",
#              isbn: "N/A",
#              language: "en",
#              buy_url: "N/A")


User.destroy_all
Book.destroy_all

User.create!(username: "test123", password: "password")
User.create!(username: "testing123", password: "password")
User.create!(username: "guest", password: "password")
User.create!(username: "demo", password: "password")
User.create!(username: "demouser", password: "password")


Book.create!(title: "Harry Potter and the Sorcerer's Stone",
             author: "J.K. Rowling",
             description: "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.",
             cover_url: "https://images.gr-assets.com/books/1474154022l/3.jpg",
             avg_rating: 4.52,
             pages: 309,
             publish_date: "7-8-1999",
             publisher: "Scholastic",
             isbn: "0-7475-3269-9",
             language: "en",)

Book.create!(title: "Flowers for Algernon",
             author: "Daniel Keyes",
             description: "Daniel Keyes has produced one of the cleverest works in fiction by adapting his writing style, to incorporate the transition of the character Charlie from a mentally-disabled halfwit with debilitating learning difficulties to a witty, cultured and highly intelligent individual. As his development is accompanied by similar medical tests on Algernon, the eponymous mouse, the novel explores themes of eugenics and natural intelligence as well as how this relates to the meritocratic society he lives in - and the merits of this itself. It also raises perhaps the most important question of all - will greater intelligence bring Charlie greater happiness?",
             cover_url: "https://images.gr-assets.com/books/1457894843l/830616.jpg",
             avg_rating: 4.5,
             pages: 311,
             publish_date: "2007-12-01",
             publisher: "Houghton Mifflin Harcourt",
             isbn: "0547539630",
             language: "en")

Book.create!(title: "Ender's Game",
             author: "Orson Scott Card",
             description: "Winner of the Hugo and Nebula Awards In order to develop a secure defense against a hostile alien race's next attack, government agencies breed child geniuses and train them as soldiers. A brilliant young boy, Andrew \"Ender\" Wiggin lives with his kind but distant parents, his sadistic brother Peter, and the person he loves more than anyone else, his sister Valentine. Peter and Valentine were candidates for the soldier-training program but didn't make the cut—young Ender is the Wiggin drafted to the orbiting Battle School for rigorous military training. Ender's skills make him a leader in school and respected in the Battle Room, where children play at mock battles in zero gravity. Yet growing up in an artificial community of young soldiers Ender suffers greatly from isolation, rivalry from his peers, pressure from the adult teachers, and an unsettling fear of the alien invaders. His psychological battles include loneliness, fear that he is becoming like the cruel brother he remembers, and fanning the flames of devotion to his beloved sister. Is Ender the general Earth needs? But Ender is not the only result of the genetic experiments. The war with the Buggers has been raging for a hundred years, and the quest for the perfect general has been underway for almost as long. Ender's two older siblings are every bit as unusual as he is, but in very different ways. Between the three of them lie the abilities to remake a world. If, that is, the world survives. Ender's Game is the winner of the 1985 Nebula Award for Best Novel and the 1986 Hugo Award for Best Novel. At the Publisher's request, this title is being sold without Digital Rights Management Software (DRM) applied.",
             cover_url: "https://images.gr-assets.com/books/1310241262l/700713.jpg",
             avg_rating: 4.5,
             pages: 324,
             publish_date: "2010-04-01",
             publisher: "Macmillan",
             isbn: "142996393X",
             language: "en")

Book.create!(title: "Animal Farm",
             author: "George Orwell",
             description: "George Orwell's classic satire of the Russian Revolution is an intimate part of our contemporary culture. It is the account of the bold struggle, initiated by the animals, that transforms Mr. Jones's Manor Farm into Animal Farm--a wholly democratic society built on the credo that All Animals Are Created Equal. Out of their cleverness, the pigs Napoleon, Squealer, and Snowball emerge as leaders of the new community in a subtle evolution that proves disastrous. The climax is the brutal betrayal of the faithful horse Boxer, when totalitarian rule is reestablished with the bloodstained postscript to the founding slogan: But some Animals Are More Equal Than Others. . . .",
             cover_url: "https://images.gr-assets.com/books/1327959366l/5472.jpg",
             avg_rating: 4.2,
             pages: 112,
             publish_date: "1950-05-05",
             publisher: "Signet Classic",
             isbn: "0451516796",
             language: "en")

Book.create!(title: "Of Mice and Men",
             author: "John Steinbeck",
             description: "George Orwell's classic satire of the Russian Revolution is an intimate part of our contemporary culture. It is the account of the bold struggle, initiated by the animals, that transforms Mr. Jones's Manor Farm into Animal Farm--a wholly democratic society built on the credo that All Animals Are Created Equal. Out of their cleverness, the pigs Napoleon, Squealer, and Snowball emerge as leaders of the new community in a subtle evolution that proves disastrous. The climax is the brutal betrayal of the faithful horse Boxer, when totalitarian rule is reestablished with the bloodstained postscript to the founding slogan: But some Animals Are More Equal Than Others. . . .",
             cover_url: "https://images.gr-assets.com/books/1348679186l/40698.jpg",
             avg_rating: 3.83,
             pages: 112,
             publish_date: "2002-01-08",
             publisher: "Penguin",
             isbn: "0142000671",
             language: "en")

Book.create!(title: "Heart of Darkness",
             author: "Joseph Conrad",
             description: "Heart of Darkness is a novella (published in 1902) by Joseph Conrad. Before publication, it appeared in a three-part series in Blackwood's Magazine (1899). This highly symbolic story is actually a story within a story, or frame tale, following a man named Charlie Marlow as he recounts his adventure to a group of men on a ship at dusk and continuing into the evening. It details an incident earlier in Marlow's life, a journey on what readers can assume is the Congo River (although the name of the country Marlow is visiting is never specified in the text) to investigate the work of Kurtz, a Belgian ivory trader in the Congo Free State.",
             cover_url: "https://images.gr-assets.com/books/1280598392l/8688806.jpg",
             avg_rating: 3.49,
             pages: 176,
             publish_date: "1990",
             publisher: "Dover",
             isbn: "0451526570",
             language: "en")


Book.create!(title: "Memoirs of a Geisha",
             author: "Arthur Golden",
             description:  "A literary sensation and runaway bestseller, this brilliant debut novel tells with seamless authenticity and exquisite lyricism the true confessions of one of Japan's most celebrated geisha. Speaking to us with the wisdom of age and in a voice at once haunting and startlingly immediate, Nitta Sayuri tells the story of her life as a geisha. It begins in a poor fishing village in 1929, when, as a nine-year-old girl with unusual blue-gray eyes, she is taken from her home and sold into slavery to a renowned geisha house. We witness her transformation as she learns the rigorous arts of the geisha: dance and music; wearing kimono, elaborate makeup, and hair; pouring sake to reveal just a touch of inner wrist; competing with a jealous rival for men's solicitude and the money that goes with it. In Memoirs of a Geisha, we enter a world where appearances are paramount; where a girl's virginity is auctioned to the highest bidder; where women are trained to beguile the most powerful men; and where love is scorned as illusion. It is a unique and triumphant work of fiction—at once romantic, erotic, suspenseful—and completely unforgettable. ",
             cover_url: "https://images.gr-assets.com/books/1409595968l/929.jpg",
             avg_rating: 4.07,
             pages: 512,
             publish_date: "2005-11-22",
             publisher: "Vintage Books USA",
             isbn: "1400096898",
             language: "en")

Book.create!(title: "The Great Gatsby",
             author: "F. Scott Fitzgerald",
             description:  "THE GREAT GATSBY, F. Scott Fitzgerald’s third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted “gin was the national drink and sex the national obsession,” it is an exquisitely crafted tale of America in the 1920s.
The Great Gatsby is one of the great classics of twentieth-century literature. ",
             cover_url: "https://images.gr-assets.com/books/1480580717l/4671.jpg",
             avg_rating: 3.88,
             pages: 180,
             publish_date: "2004",
             publisher: "Scribner",
             isbn: "0743273567",
             language: "en")

Book.create!(title: "Lord of the Flies",
             author: "William Golding",
             description: "When a plane crashes on a remote island, a small group of schoolboys are the sole survivors. From the prophetic Simon and virtuous Ralph to the lovable Piggy and brutish Jack, each of the boys attempts to establish control as the reality - and brutal savagery - of their situation sets in.

The boys' struggle to find a way of existing in a community with no fixed boundaries invites readers to evaluate the concepts involved in social and political constructs and moral frameworks. Ideas of community, leadership, and the rule of law are called into question as the reader has to consider who has a right to power, why, and what the consequences of the acquisition of power may be. Often compared to Catcher in the Rye, Lord of the Flies also represents a coming-of-age story of innocence lost.",
             cover_url: "https://images.gr-assets.com/books/1340919381l/84943.jpg",
             avg_rating: 3.64,
             pages: 202,
             publish_date: "2003",
             publisher: "Perigree",
             isbn: "0399501487",
             language: "en")

Book.create!(title: "To Kill a Mockingbird",
             author: "Harper Lee",
             description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.

Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos.",
             cover_url: "https://images.gr-assets.com/books/1339392178l/37449.jpg",
             avg_rating: 4.25,
             pages: 376,
             publish_date: "1982",
             publisher: "Grand Central Publishing (Hachette Book Group)",
             isbn: "1439550417",
             language: "en")

Book.create!(title: "Brave New World",
             author: "Aldous Huxley",
             description: "Aldous Huxley's profoundly important classic of world literature, Brave New World is a searching vision of an unequal, technologically-advanced future where humans are genetically bred, socially indoctrinated, and pharmaceutically anesthetized to passively uphold an authoritarian ruling order--all at the cost of our freedom, full humanity, and perhaps also our souls. “A genius [who] who spent his life decrying the onward march of the Machine” (The New Yorker), Huxley was a man of incomparable talents: equally an artist, a spiritual seeker, and one of history’s keenest observers of human nature and civilization. Brave New World, his masterpiece, has enthralled and terrified millions of readers, and retains its urgent relevance to this day as both a warning to be heeded as we head into tomorrow and as thought-provoking, satisfying work of literature. Written in the shadow of the rise of fascism during the 1930s, Brave New World likewise speaks to a 21st-century world dominated by mass-entertainment, technology, medicine and pharmaceuticals, the arts of persuasion, and the hidden influence of elites. ",
             cover_url: "https://images.gr-assets.com/books/1298180450l/5485.jpg",
             avg_rating: 3.96,
             pages: 259,
             publish_date: "2006-10-17",
             publisher: "Harper Perennial Modern Classics",
             isbn: "0060850523",
             language: "en")

Book.create!(title: "Sophie's World",
             author: "Jostein Gaardner",
             description: "Sophie finds two questions in her mailbox: 'Who are you?' and 'Where does the world come from?' This is the start of her journey through the history of philosophy, guided by a mysterious mentor. To find the truth, we must understand the questions, but the truth is stranger than Sophie can imagine.",
             cover_url: "https://images.gr-assets.com/books/1391118333l/25406.jpg",
             avg_rating: 3.87,
             pages: 518,
             publish_date: "2007-03-20",
             publisher: "Farrar, Straus and Giroux",
             isbn: "0374530718",
             language: "en")

Book.create!(title: "Atlas Shrugged",
             author: "Ayn Rand",
             description: "This is the story of a man who said that he would stop the motor of the world and did. Was he a destroyer or the greatest of liberators?

Why did he have to fight his battle, not against his enemies, but against those who needed him most, and his hardest battle against the woman he loved? What is the world’s motor — and the motive power of every man? You will know the answer to these questions when you discover the reason behind the baffling events that play havoc with the lives of the characters in this story.

Tremendous in its scope, this novel presents an astounding panorama of human life — from the productive genius who becomes a worthless playboy — to the great steel industrialist who does not know that he is working for his own destruction — to the philosopher who becomes a pirate — to the composer who gives up his career on the night of his triumph — to the woman who runs a transcontinental railroad — to the lowest track worker in her Terminal tunnels.

You must be prepared, when you read this novel, to check every premise at the root of your convictions.

This is a mystery story, not about the murder — and rebirth — of man’s spirit. It is a philosophical revolution, told in the form of an action thriller of violent events, a ruthlessly brilliant plot structure and an irresistible suspense. Do you say this is impossible? Well, that is the first of your premises to check.",
             cover_url: "https://images.gr-assets.com/books/1405868167l/662.jpg",
             avg_rating: 3.68,
             pages: 1168,
             publish_date: "1999-08-01",
             publisher: "Plume",
             isbn: "0452011876",
             language: "en")
