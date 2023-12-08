import React, { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book }) {
  const [title, setTitle] = useState(book.title);
  const { handleEdit } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    handleEdit(book.id, title);
    // handleEdit();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <title>Title:</title>
        <input
          type="text"
          value={title}
          onChange={handleChange}
          className="input"
        />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
