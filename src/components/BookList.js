import React from "react";
import BookShow from "./BookShow";

function BookList({ books, onDelete, onEnableCreate, onEdit }) {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookShow
          onEdit={onEdit}
          key={index}
          book={book}
          onDelete={onDelete}
          onEnableCreate={onEnableCreate}
        />
      ))}
    </div>
  );
}

export default BookList;
