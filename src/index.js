const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
const homeController = require("./controllers/homeController");
// app.get("/books", (req, res) => {
//   const books = require("./mocks/books");
//   res.send(books.books);
// });
const booksController = require("./controllers/booksController");
app.get("/books", booksController.getAllBooks);

app.get("/", homeController.meow);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
