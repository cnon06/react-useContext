import React from "react";
import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  const { books } = useBooksContext();
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookShow key={index} book={book} />
      ))}
    </div>
  );
}

export default BookList;
