# API Endpoints

## HTML API

### Root

- `GET /`

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Books

- `GET /api/books`
  + get a list of all the books
- `GET /api/books/:id`
  + get details of a specific book

### Bookshelves

- `GET /api/bookshelves`
  + get all the bookshelf for current user
- `POST /api/bookshelves`
  + create a bookshelf
- `DELETE /api/bookshelves/:id`
  + delete a bookshelf by id
