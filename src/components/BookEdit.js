import React, { useState } from "react";

function BookEdit({ book, onEdit, onEdit2 }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // onCreate(title);
    // setTitle("");
    onEdit();
    onEdit2(book.id, title);
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
