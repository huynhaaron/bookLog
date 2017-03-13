## Component Hierarchy

**Home Page**
  - NavContainer
  - NewUserContainer


**NavContainer**
  - Logo
  - Search
  - AuthContainer
  - AuthFormContainer

**AuthContainer**
  - Auth

**AuthFormContainer**
  - AuthForm

**SearchContainer**
  - SearchForm

**App**
  - NavContainer
    + Logo
    + UserMenuContainer
  - SideBar
    + MyShelvesContainer
      - MyBookShelvesContainer
        + MyBookShelves
      - MyBookReadStatusContainer
        + MyReadStatus
  - MyBooksContainer
    + MyBookList
      - BookListItem
  - BookShow
    + BookDetailContainer
    + ReviewsContainer


**UserMenuContainer**
  - UserIndex
  - Logout

**BookDetailContainer**
  - BookDetails

**ReviewsContainer**
  - Reviews
  - ReviewFormContainer

**ReviewFormContainer**
  - ReviewForm


## Routes


|Path   | Component   |
|-------|-------------|
| "/" | "HomePage" |
| "/welcome" | "AuthContainer" |
| "/signup" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/user" | "App" |
| "/user/books" | "MyBooksContainer" |
| "/user/books/:bookId" | "BookShow" |
| "/user/bookshelves/:bookshelfId" | "BookListContainer" |
| "/user/read-status" | "BookListContainer" |
| "/search" | "SearchContainer" |
