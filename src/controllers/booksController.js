// 1. Get all books
function getAllBooks(req, res) {
  const books = require("../mocks/books");
  const bookAmount = books.length;
  res.send({ quantity: bookAmount, books });
}

// 2. Get book by id
function getBookById(req, res) {
  const books = require("../mocks/books");
  const book = books.books.find((book) => book.id === req.params.id);
  res.send(book);
}

// 3. Add a book
// 4. Update a book
// 5. Delete a book

module.exports = {
  getAllBooks,
  getBookById,
};
