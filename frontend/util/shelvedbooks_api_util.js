
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
    url: `api/shelvedbook/${shelvedbook.id}`
  })
)
