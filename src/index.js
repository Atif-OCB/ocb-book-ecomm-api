const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// Setting up routers
const homeRouter = require("./routes/homeRouter");
const booksRouter = require("./routes/booksRouter");

app.use("/books", booksRouter);
app.use("/", homeRouter);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
