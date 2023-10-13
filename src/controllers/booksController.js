function getAllBooks(req, res) {
  const books = require("../mocks/books");
  res.send(books.books);
}

module.exports = { getAllBooks };
