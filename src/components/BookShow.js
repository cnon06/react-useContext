import React, { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEnableCreate, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(!showEdit);
    onEnableCreate(showEdit);
  };

  return (
    <div className="book-show">
      <h3>
        {book.title}-{book.id}
        <img
          className="books"
          src={`https://picsum.photos/seed/${book.id}/300/200`}
          alt=""
        />
      </h3>
      {showEdit ? (
        <BookEdit book={book} handleEdit={handleEdit} onEdit={onEdit} />
      ) : (
        ""
      )}
      <div className="actions">
        <button className="delete" onClick={() => onDelete(book.id)}>
          Delete
        </button>
        <button className="edit" onClick={handleEdit}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
