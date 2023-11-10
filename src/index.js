import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
// import pg from "pg";
const app = express();
dotenv.config();

// const db = new pg.Client({
//   host: process.env.DB_HOSTNAME || "localhost",
//   port: Number(process.env.DB_PORT) || 5432,
//   database: process.env.DB_DATABASE || "database",
//   user: process.env.DB_USERNAME || "user",
//   password: process.env.DB_PASSWORD || "password",
//   // Important to declare ssl:true for render.com db service
//   ssl: true,
// });

// await db.connect();

// const res = await db.query("SELECT $1::text as message", [
//   "Hello world! DB connection established",
// ]);
// console.log(res.rows[0].message); // Hello world!
// await db.end();

app.use(json());
app.use(urlencoded({ extended: true }));

// app.use(static("public"));

// Setting up routers
import homeRouter from "./routes/homeRouter.js";
import booksRouter from "./routes/booksRouter.js";

app.use("/books", booksRouter);
app.use("/", homeRouter);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
