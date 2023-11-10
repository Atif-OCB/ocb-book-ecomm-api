import books from "../mocks/books.js";

// 1. Get all books
export function getAllBooks(req, res) {
  const bookAmount = books.length;
  res.send({ quantity: bookAmount, books });
}

// 2. Get book by id
export function getBookById(req, res) {
  const book = books.find((book) => book.id === req.params.id);
  res.send(book);
}

// 3. Add a book
// 4. Update a book
export const updateBookById = (req, res) => {
  const book = books.find((book) => book.id === req.params.id);
  const bookIndex = books.findIndex((book) => book.id === req.params.id);
  const bookBody = req.body;
  //cara baru
  const updatedBook = {
    ...book,
    ...bookBody,
  };
  // SQL query
  books[bookIndex] = updatedBook;
  res.send(books);
};
// 5. Delete a book
