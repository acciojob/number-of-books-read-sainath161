const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // Use the filter function to get an array of books that have been read
  const readBooks = library.filter(book => book.readingStatus);

  // Return the length of the filtered array (number of read books)
  return readBooks.length;
};

// Do not change the code below
alert(numberOfBooksRead());
