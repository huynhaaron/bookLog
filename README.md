# __bookLog__

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://booklog-fsp.herokuapp.com
[trello]: https://trello.com/b/Pkljgmxa/booklog

## Features and Implementations


#### Shelved books are shown in a grid

![alt text](https://res.cloudinary.com/booklog/image/upload/v1490388805/Screen_Shot_2017-03-24_at_1.16.56_PM_dfs7xn.png "BooksIndex")

Books are stored in a database with all the information. Books have `id`, `author`, `title`, etc columns. Books are added to bookshelves by a table called shelvedbooks, a join table with the fields `booksheld_id` and `book_id`.

### Book Shelves

![alt text](https://res.cloudinary.com/booklog/image/upload/v1490390255/output_xO4iHf_rnufqi.gif "Shelve deletion")

Upon going to the home page, the users bookshelves are loaded onto the left hand column.


#### Ability to add books to shelves
![alt text](https://res.cloudinary.com/booklog/image/upload/v1490388938/Screen_Shot_2017-03-24_at_1.17.16_PM_cqp0w8.png "AddShelf")

Bookshelves which have their own `id` have an association to the shelved book table. When the book details are fetched, the users shelves which contain the books are fetched as well.



## Future Direction for the Project
In addition to the features already implemented, I plan to continue work on this project. The next steps for BookLog are outlined below.

### Add Search
Ability to search the books in the database or query a API for book information.

### Add Popular Books
 I plan to implement public shelves for suggested books that displays the current New York Times Best Sellers or Oprah's Book Club.
