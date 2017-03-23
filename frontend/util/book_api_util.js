export const fetchAllBooks = () => {
  return $.ajax({
    method: "GET",
    url: "api/books",
    error: (err) => console.log(err)
  });
};

export const fetchBook = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/books/${id}`,
    error: (err) => console.log(err)
  });
};
