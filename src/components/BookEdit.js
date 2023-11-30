import React, { useState } from "react";

function BookEdit({ book, handleEdit, onEdit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    onEdit(book.id, title);
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
        <button className="button is-primary" onClick={handleEdit}>
          Save
        </button>
      </form>
    </div>
  );
}

export default BookEdit;
