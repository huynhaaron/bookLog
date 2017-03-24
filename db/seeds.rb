# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Book.destroy_all
Bookshelf.destroy_all
Shelvedbook.destroy_all

User.create!(username: "demo", password: "password")
User.create!(username: "guest", password: "password")
User.create!(username: "test123", password: "password")
User.create!(username: "testing123", password: "password")
User.create!(username: "jack", password: "password")
User.create!(username: "john", password: "password")

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

Book.create!(title: "Gone with the Wind",
            author: "Margaret Mitchell",
            description: "Gone with the Wind is a novel written by Margaret Mitchell, first published in 1936. The story is set in Clayton County, Georgia, and Atlanta during the American Civil War and Reconstruction era. It depicts the struggles of young Scarlett O'Hara, the spoiled daughter of a well-to-do plantation owner, who must use every means at her disposal to claw her way out of the poverty she finds herself in after Sherman's March to the Sea. A historical novel, the story is a Bildungsroman or coming-of-age story, with the title taken from a poem written by Ernest Dowson.

Gone with the Wind was popular with American readers from the onset and was the top American fiction bestseller in the year it was published and in 1937. As of 2014, a Harris poll found it to be the second favorite book of American readers, just behind the Bible. More than 30 million copies have been printed worldwide.",
            cover_url: "https://images.gr-assets.com/books/1332603639l/237241.jpg",
            avg_rating: 4.28,
            pages: 1011,
            publish_date: "1991-09-25",
            publisher: "Pan Books",
            isbn: "0330323490",
            language: "en")

Book.create!(title: "Lord of the Rings",
            author: "J.R.R. Tolkien",
            description: "J.R.R. Tolkien's The Lord of the Rings trilogy is a genuine masterpiece. The most widely read and influential fantasy epic of all time, it is also quite simply one of the most memorable and beloved tales ever told. Originally published in 1954, The Lord of the Rings set the framework upon which all epic/quest fantasy since has been built. Through the urgings of the enigmatic wizard Gandalf, young hobbit Frodo Baggins embarks on an urgent, incredibly treacherous journey to destroy the One Ring. This ring -- created and then lost by the Dark Lord, Sauron, centuries earlier -- is a weapon of evil, one that Sauron desperately wants returned to him. With the power of the ring once again his own, the Dark Lord will unleash his wrath upon all of Middle-earth. The only way to prevent this horrible fate from becoming reality is to return the Ring to Mordor, the only place it can be destroyed. Unfortunately for our heroes, Mordor is also Sauron's lair. The Lord of the Rings trilogy is essential reading not only for fans of fantasy but for lovers of classic literature as well...",
            cover_url: "https://images.gr-assets.com/books/1411114164l/33.jpg",
            avg_rating: 4.47,
            pages: 1216,
            publish_date: "2005-10-12",
            publisher: "Houghton Mifflin Harcourt",
            isbn: "061864015",
            language: "en")

Book.create!(title: "Great Expectations",
            author: "Charles Dickens",
            description: "In what may be Dickens's best novel, humble, orphaned Pip is apprenticed to the dirty work of the forge but dares to dream of becoming a gentleman — and one day, under sudden and enigmatic circumstances, he finds himself in possession of 'great expectations.' In this gripping tale of crime and guilt, revenge and reward, the compelling characters include Magwitch, the fearful and fearsome convict; Estella, whose beauty is excelled only by her haughtiness; and the embittered Miss Havisham, an eccentric jilted bride.",
            cover_url: "https://images.gr-assets.com/books/1327920219l/2623.jpg",
            avg_rating: 3.74,
            pages: 505,
            publish_date: "1998-06-25",
            publisher: "Oxford University Press",
            isbn: "0192833596",
            language: "en")

Book.create!(title: "Crime and Punishment",
            author: "Fyodor Dostoyevsky",
            description: "With the same suppleness, energy, and range of voices that won their translation of The Brothers Karamazov the PEN/Book-of-the-Month Club Prize, Pevear and Volokhonsky offer a brilliant translation of Dostoevsky's classic novel that presents a clear insight into this astounding psychological thriller. ",
            cover_url: "https://images.gr-assets.com/books/1327909635l/28348.jpg",
            avg_rating: 4.18,
            pages: 564,
            publish_date: "1993-03-02",
            publisher: "Vintage Classics",
            isbn: "06797345",
            language: "en")

Book.create!(title: "Sense and Sensibility",
            author: "Jane Austen",
            description: "Marianne Dashwood wears her heart on her sleeve, and when she falls in love with the dashing but unsuitable John Willoughby she ignores her sister Elinor's warning that her impulsive behaviour leaves her open to gossip and innuendo. Meanwhile Elinor, always sensitive to social convention, is struggling to conceal her own romantic disappointment, even from those closest to her. Through their parallel experience of love - and its threatened loss - the sisters learn that sense must mix with sensibility if they are to find personal happiness in a society where status and money govern the rules of love. ",
            cover_url: "https://images.gr-assets.com/books/1347328574l/6147464.jpg",
            avg_rating: 4.06,
            pages: 448,
            publish_date: "2008-11-06",
            publisher: "Penguin",
            isbn: "0141040378",
            language: "en")

Book.create!(title: "The Color Purple",
            author: "Alice Walker",
            description: "Taking place mostly in rural Georgia, the story focuses on the life of African-American women in the southern United States in the 1930s, addressing numerous issues including their exceedingly low position in American social culture. The novel has been the frequent target of censors and appears on the American Library Association list of the 100 Most Frequently Challenged Books of 2000–2009 at number seventeen because of the sometimes explicit content, particularly in terms of violence",
            cover_url: "https://images.gr-assets.com/books/1440374985l/1100590.jpg",
            avg_rating: 4.16,
            pages: 295,
            publish_date: "2004-04-01",
            publisher: "Pocket",
            isbn: "0671727796",
            language: "en")

Book.create!(title: "Watership Down",
            author: "Richard Adams",
            description: "Set in England's Downs, a once idyllic rural landscape, this stirring tale of adventure, courage and survival follows a band of very special creatures on their flight from the intrusion of man and the certain destruction of their home. Led by a stouthearted pair of friends, they journey forth from their native Sandleford Warren through the harrowing trials posed by predators and adversaries, to a mysterious promised land and a more perfect society.",
            cover_url: "https://images.gr-assets.com/books/1405136931l/76620.jpg",
            avg_rating: 4.05,
            pages: 478,
            publish_date: "1975-06-01",
            publisher: "Avon Books",
            isbn: "038039586X",
            language: "en")

Book.create!(title: "The Remains of the Day",
            author: "Kazuo Ishiguro",
            description: "In 1956, Stevens, a long-serving butler at Darlington Hall, decides to take a motoring trip through the West Country. The six-day excursion becomes a journey into the past of Stevens and England, a past that takes in fascism, two world wars, and an unrealised love between the butler and his housekeeper. Ishiguro's dazzling novel is a sad and humorous love story, a meditation on the condition of modern man, and an elegy for England at a time of acute change. ",
            cover_url: "https://images.gr-assets.com/books/1327128714l/28921.jpg",
            avg_rating: 4.1,
            pages: 258,
            publish_date: "2005-01-01",
            publisher: "Faber & Faber",
            isbn: "0571225381",
            language: "en")

Book.create!(title: "The Pillars of the Earth",
            author: "Ken Follett",
            description: "The building of the cathedral, with the almost eerie artistry of the unschooled stonemasons, is the center of the drama. Around the site of the construction, Follett weaves a story of betrayal, revenge, and love, which begins with the public hanging of an innocent man and ends with the humiliation of a king.",
            cover_url: "https://images.gr-assets.com/books/1417307281l/442119.jpg",
            avg_rating: 4.29,
            pages: 983,
            publish_date: "1990-07-09",
            publisher: "Signet",
            isbn: "0451166892",
            language: "en")

Book.create!(title: "American Psycho",
            author: "Bret Easton Ellis",
            description: "Patrick Bateman is twenty-six and he works on Wall Street, he is handsome, sophisticated, charming and intelligent. He is also a psychopath. Taking us to head-on collision with America's greatest dream—and its worst nightmare—American Psycho is bleak, bitter, black comedy about a world we all recognise but do not wish to confront.",
            cover_url: "https://images.gr-assets.com/books/1436934349l/28676.jpg",
            avg_rating: 3.81,
            pages: 399,
            publish_date: "1991-03-01",
            publisher: "Vintage Contemporaries / Random House",
            isbn: "0679735771",
            language: "en")

Book.create!(title: "A Game of Thrones",
            author: "George R.R. Martin",
            description: "Summers span decades. Winter can last a lifetime. And the struggle for the Iron Throne has begun.

As Warden of the north, Lord Eddard Stark counts it a curse when King Robert bestows on him the office of the Hand. His honour weighs him down at court where a true man does what he will, not what he must … and a dead enemy is a thing of beauty.

The old gods have no power in the south, Stark’s family is split and there is treachery at court. Worse, the vengeance-mad heir of the deposed Dragon King has grown to maturity in exile in the Free Cities. He claims the Iron Throne.",
            cover_url: "https://images.gr-assets.com/books/1436732693l/13496.jpg",
            avg_rating: 4.44,
            pages: 835,
            publish_date: "2005-08-01",
            publisher: "Bantam",
            isbn: "0553588486",
            language: "en")

Book.create!(title: "The Women in the Castle",
            author: "Jessica Shattuck",
            description: "Set at the end of World War II, in a crumbling Bavarian castle that once played host to all of German high society, a powerful and propulsive story of three widows whose lives and fates become intertwined—an affecting, shocking, and ultimately redemptive novel from the author of the New York Times Notable Book The Hazards of Good Breeding

Amid the ashes of Nazi Germany’s defeat, Marianne von Lingenfels returns to the once grand castle of her husband’s ancestors, an imposing stone fortress now fallen into ruin following years of war. The widow of a resistor murdered in the failed July, 20, 1944, plot to assassinate Adolf Hitler, Marianne plans to uphold the promise she made to her husband’s brave conspirators: to find and protect their wives, her fellow resistance widows.

First, Marianne rescues six-year-old Martin, the son of her dearest childhood friend, from a Nazi reeducation home. Together, they make their way across the smoldering wreckage of their homeland to Berlin, where Martin’s mother, the beautiful and naïve Benita, has fallen into the hands of occupying Red Army soldiers. Then she locates Ania, another resistor’s wife, and her two boys, now refugees languishing in one of the many camps that house the millions displaced by the war.

As Marianne assembles this makeshift family from the ruins of her husband’s resistance movement, she is certain their shared pain and circumstances will hold them together. But she quickly discovers that the black-and-white, highly principled world of her privileged past has become infinitely more complicated, filled with secrets and dark passions that threaten to tear them apart. Eventually, all three women must come to terms with the choices that have defined their lives before, during, and after the war—each with their own unique share of challenges. ",
            cover_url: "https://images.gr-assets.com/books/1472678686l/30653967.jpg",
            avg_rating: 4.22,
            pages: 368,
            publish_date: "2014-03-28",
            publisher: "William Morrow",
            isbn: "0062563661",
            language: "en")

Book.create!(title: "Harry Potter and the Chamber of Secrets",
            author: "J.K. Rowling",
            description: "The Dursleys were so mean and hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he's packing his bags, Harry receives a warning from a strange, impish creature named Dobby who says that if Harry Potter returns to Hogwarts, disaster will strike.

And strike it does. For in Harry's second year at Hogwarts, fresh torments and horrors arise, including an outrageously stuck-up new professor, Gilderoy Lockhart, a spirit named Moaning Myrtle who haunts the girls' bathroom, and the unwanted attentions of Ron Weasley's younger sister, Ginny. But each of these seem minor annoyances when the real trouble begins, and someone, or something, starts turning Hogwarts students to stone. Could it be Draco Malfoy, a more poisonous rival than ever? Could it possibly be Hagrid, whose mysterious past is finally told? Or could it be the one everyone at Hogwarts most suspects: Harry Potter himself?",
            cover_url: "https://images.gr-assets.com/books/1474169725l/15881.jpg",
            avg_rating: 4.37,
            pages: 341,
            publish_date: "1992-07-02",
            publisher: "Scholastic Inc.",
            isbn: "043906486",
            language: "en")



Bookshelf.create!(user_id: 1, name: "sci-fi")
Bookshelf.create!(user_id: 1, name: "classics")
Bookshelf.create!(user_id: 1, name: "harry potter")
Bookshelf.create!(user_id: 1, name: "thrillers")
Bookshelf.create!(user_id: 1, name: "romance")



Shelvedbook.create!(bookshelf_id: 1, book_id: 1)
Shelvedbook.create!(bookshelf_id: 1, book_id: 2)
Shelvedbook.create!(bookshelf_id: 1, book_id: 3)
Shelvedbook.create!(bookshelf_id: 1, book_id: 4)
Shelvedbook.create!(bookshelf_id: 1, book_id: 5)
Shelvedbook.create!(bookshelf_id: 2, book_id: 6)
Shelvedbook.create!(bookshelf_id: 2, book_id: 7)
Shelvedbook.create!(bookshelf_id: 2, book_id: 8)
Shelvedbook.create!(bookshelf_id: 2, book_id: 9)
Shelvedbook.create!(bookshelf_id: 3, book_id: 15)
Shelvedbook.create!(bookshelf_id: 3, book_id: 17)
Shelvedbook.create!(bookshelf_id: 3, book_id: 11)
Shelvedbook.create!(bookshelf_id: 3, book_id: 20)
Shelvedbook.create!(bookshelf_id: 3, book_id: 14)
Shelvedbook.create!(bookshelf_id: 3, book_id: 12)
Shelvedbook.create!(bookshelf_id: 21, book_id: 1)
Shelvedbook.create!(bookshelf_id: 21, book_id: 26)
Shelvedbook.create!(bookshelf_id: 19, book_id: 3)
Shelvedbook.create!(bookshelf_id: 20, book_id: 4)
Shelvedbook.create!(bookshelf_id: 20, book_id: 5)
Shelvedbook.create!(bookshelf_id: 20, book_id: 6)
Shelvedbook.create!(bookshelf_id: 10, book_id: 9)
Shelvedbook.create!(bookshelf_id: 10, book_id: 8)
Shelvedbook.create!(bookshelf_id: 10, book_id: 18)

Review.create!(user_id: 1, username: "demo", book_id: 1, title: "Cool Book", body: "Yes")
Review.create!(user_id: 2, username: "guest", book_id: 1, title: "Snape is my hero", body: "Best book ever")
Review.create!(user_id: 1, username: "demo", book_id: 2, title: "Must Read!", body: "Lots of feels")
Review.create!(user_id: 3, username: "guest", book_id: 2, title: "Assigned high school reading", body: "Great book")
Review.create!(user_id: 4, username: "demo", book_id: 3, title: "Space", body: "the final frontier")
Review.create!(user_id: 2, username: "guest", book_id: 3, title: "Movie cannot compare to the book", body: "Enders game is great")
Review.create!(user_id: 4, username: "demo", book_id: 6, title: "????", body: "Is Joseph Conrad a racist? ")
Review.create!(user_id: 2, username: "guest", book_id: 6, title: "Highly recommended", body: "It was a breathtaking read. There are few books which make such a powerful impression as 'Heart of darkness' does. Written more than a century ago, the book and its undying theme hold just as much significance even today. Intense and compelling, it looks into the darkest recesses of human nature. Conrad takes the reader through a horrific tale in a very gripping voice.")
Review.create!(user_id: 4, username: "demo", book_id: 4, title: "Cool", body: "A perfect book. People will still be reading this in a thousand years time, when communism is just a footnote.")
Review.create!(user_id: 2, username: "guest", book_id: 4, title: "All animals are equal, but some animals are more equal than others. Those damn PIGS.")
Review.create!(user_id: 4, username: "demo", book_id: 5, title: "George and Lenny", body: "Trouble with mice is you always kill 'em.Breathtaking prose, touching characters and a heart breaking ending. Who said only lengthy novel can make an impact?")
Review.create!(user_id: 2, username: "guest", book_id: 5, title: "Best book!", body: "It's the way Steinbeck describes things that gets me.")
Review.create!(user_id: 4, username: "demo", book_id: 7, title: "Boo", body: "Memoirs of a Geisha is an American novel, and as such the attempt at West does East, especially on the complex and delicate subject of the geisha, is compelling, interesting, but also heavy-handed and ultimately ineffective (even more so in the case of the film).")
Review.create!(user_id: 2, username: "guest", book_id: 7, title: "Average", body: "Like eating fancy dessert at a gourmet restaurant, Memoirs of a Geisha is beautiful, melts lightly off the tongue and will be forgotten shortly after it's done. The language is strikingly lovely, and Golden paints a remarkable picture of a time and place. ")
Review.create!(user_id: 4, username: "demo", book_id: 8, title: "Must Read", body: "Jay Gatsby, who dreamed a dream with the passion and courage few possess - and the tragedy was that it was a wrong dream colliding with reality that was even more wrong - and deadly. ")
Review.create!(user_id: 2, username: "guest", book_id: 8, title: "Terrible!", body: "This is my least-favorite classic of all time. Probably even my least favorite book, ever. ")
Review.create!(user_id: 4, username: "demo", book_id: 9, title: "Boo", body: "")
Review.create!(user_id: 2, username: "guest", book_id: 9, title: "Boo", body: "")
