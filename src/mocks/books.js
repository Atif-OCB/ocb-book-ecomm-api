const books = [
  {
    id: "prideprejudice0000unse_r8e0",
    title: "Pride and Prejudice",
    genre: "fiction",
    publish_year: 1602,
    author: "Jane Austen",
    quantity: 10,
  },
  {
    id: "alicesadventures0000lewi_h0b9",
    title: "Alice's Adventures in Wonderland",
    genre: "fiction",
    publish_year: 1865,
    author: "Lewis Carroll",
    quantity: 9,
  },
  {
    id: "huckleberryfinn0000unse_r2u4",
    title: "Adventures of Huckleberry Finn",
    genre: "fiction",
    publish_year: 1707,
    author: "Mark Twain",
    quantity: 8,
  },
  {
    id: "emmanovelinthree131aust",
    title: "Emma",
    genre: "fiction",
    publish_year: 1815,
    author: "Jane Austen",
    quantity: 0,
  },
  {
    id: "ghostseer01schiuoft",
    title: "Frankenstein; or, The Modern Prometheus",
    genre: "fiction",
    publish_year: 1818,
    author: "Mary Wollstonecraft Shelley",
    quantity: 0,
  },
  {
    id: "nybc207238",
    title: "The Picture of Dorian Gray",
    genre: "fiction",
    publish_year: 1890,
    author: "Oscar Wilde",
    quantity: 200,
  },
  {
    id: "wutheringheights0000emil_z8q3",
    title: "Wuthering Heights",
    genre: "fiction",
    publish_year: 1847,
    author: "Emily Brontë",
    quantity: 73,
  },
  {
    id: "works0000stev_b2w5",
    title: "Treasure Island",
    genre: "fiction",
    publish_year: 1880,
    author: "Robert Louis Stevenson",
    quantity: 51,
  },
  {
    id: "sensesensibility0000jane_c2k7",
    title: "Sense and Sensibility",
    genre: "fiction",
    publish_year: 1811,
    author: "Jane Austen",
    quantity: 28,
  },
  {
    id: "littlewomenormeg00alcoiala",
    title: "Little Women",
    genre: "fiction",
    publish_year: 1848,
    author: "Louisa May Alcott",
    quantity: 0,
  },
  {
    id: "worksdic23dickuoft",
    title: "A Tale of Two Cities",
    genre: "fiction",
    publish_year: 1800,
    author: "Charles Dickens",
    quantity: 10,
  },
  {
    id: "1843christmascar00dickuoft",
    title: "A Christmas Carol",
    genre: "fiction",
    publish_year: 1843,
    author: "Charles Dickens",
    quantity: 5,
  },
];

export default books;

const item = {
  id: "prideprejudice0000unse_r8e0",
  title: "Pride and Prejudice",
  genre: "fiction",
  publish_year: 1602,
  author: "Jane Austen",
  quantity: 10,
};

// Destructuring
//  line 113 & 114 result is the same.
const { author } = item;
item.author;
