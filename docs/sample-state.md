```javascript
{
  session:
    {
      currentUser:
        {
          id: 1,
          username: "Guest",
          email: "guest123@gmail.com"
        }
      errors: []
    },
  books:
    {
      1:
        {
          id: 1,
          title: "Harry Potter and the sorcerers stone",
          author: "J.K. Rowling",
          description: "description of Harry Potter",
          coverImageURL: "url",
          averageRating: 5,
          pageLength: 309,
          publishedDate: 1998,
          publisher: "Scholastic",
          ISBN: "0-7475-3269-9",
          language: "English",
          URLToBuy: "url "
        }
      }
    },
  bookshelves:
    {
      1:
        {
          id: 1,
          title: "Harry Potter",
          userId: 1
        },
      2:
        {
          id: 2,
          title: "Dan Brown",
          userId: 1
        }
    },
  reviews:
    {
      1:
        {
          id: 1,
          title: "Great book for all ages",
          body: "Harry Potter is the best",
          userId: 1,
          bookId: 1,
          ratings: 5
        },
      2:
        {
          id: 2,
          title: "Can't put this book down!",
          body: "Da Vinci Code is great",
          userId: 1,
          bookId: 2,
          ratings: 4
        }
    },
}
```
