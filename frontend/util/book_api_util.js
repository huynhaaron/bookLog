export const fetchBooks = () => {
  return $.ajax({
    type: "GET",
    url: "api/users"
  });
};

export const fetchBook = (id) => {
  return $.ajax({
    type: "GET",
    url: `api/books/${id}`,
  });
};
