export const fetchBookshelves = () => (
  $.ajax({
    method: 'GET',
    url: 'api/bookshelves'
  })
);

export const createBookshelf = (bookshelf) => (
  $.ajax({
    method: 'POST',
    url: 'api/bookshelves',
    data: { bookshelf }
  })
);

export const updateBookshelf = (bookshelf) => (
  $.ajax({
    method: 'PATCH',
    url: `api/bookshelves/${bookshelf.id}`,
    data: { bookshelf }
  })
);

export const deleteBookshelf = (bookshelf) => (
  $.ajax({
    method: 'DELETE',
    url: `api/bookshelves/${ bookshelf.id }`
  })
);
