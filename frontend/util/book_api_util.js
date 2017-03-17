export const fetchAllBooks = () => {
  return $.ajax({
    type: "GET",
    url: "api/books",
    error: (err) => console.log(err)
  });
};

export const fetchBook = (id) => {
  return $.ajax({
    type: "GET",
    url: `api/books/${id}`,
    error: (err) => console.log(err)
  });
};
