export const fetchShelvedbooks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/shelvedbooks'
  })
);

export const createShelvedbook = (book_id, bookshelf_id) => (
  $.ajax({
    method: 'POST',
    url: 'api/shelvedbooks',
    data: { book_id: book_id, bookshelf_id: bookshelf_id }
  })
)


export const deleteShelvedbook = (shelvedbook) => (
  $.ajax({
    method: 'DELETE',
    url: `api/shelvedbooks/${shelvedbook.id}`,
  })
)

// store.dispatch(createShelvedbook({book_id: 1, bookshelf_id: 1}));
