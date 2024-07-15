// Define a function to filter books
const filterBooks = (books, genre, available) => {
  console.log(
    "Filtering books with genre:",
    genre,
    "and availability:",
    available
  );
  return books.filter((book) => {
    console.log("Checking book:", book);
    return book.genre === genre && book.available === available;
  });
};
// Create a partial application function
const partial = (fn, ...fixedArgs) => {
  return (...remainingArgs) => {
    return fn(...fixedArgs, ...remainingArgs);
  };
};

// Sample book data
const books = [
  { title: "Book One", genre: "Fiction", available: true },
  { title: "Book Two", genre: "Science Fiction", available: false },
  { title: "Book Three", genre: "Fiction", available: false },
  { title: "Book Four", genre: "Fantasy", available: true },
  { title: "Book Five", genre: "Science Fiction", available: true },
];

// Partially apply the `filterBooks` function
const filterFictionBooks = partial(filterBooks, books, "Fiction");
const filterAvailableSciFiBooks = partial(
  filterBooks,
  books,
  "Science Fiction",
  true
);

// Use the partially applied functions and log results
console.log("\n");
console.log("Filter Fiction Books (Unavailable):", filterFictionBooks(false));
// Expected Output: [{ title: "Book Three", genre: "Fiction", available: false }]

console.log("\n\n");
console.log("Filter Available Sci-Fi Books:", filterAvailableSciFiBooks());
// Expected Output: [{ title: "Book Five", genre: "Science Fiction", available: true }]
console.log("\n");
