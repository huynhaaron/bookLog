
export const createShelvedbook = (shelvedBook) => (
  $.ajax({
    method: 'POST',
    url: 'api/shelvedbooks',
    data: { shelvedBook }
  })
)

export const deleteShelvedbook = (shelvedBook) => (
  $.ajax({
    method: 'DELETE',
    url: `api/shelvedbooks/${shelvedBook.bookshelf_id}`,
    data: { shelvedBook }
  })
)
