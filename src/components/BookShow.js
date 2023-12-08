import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
  const { showEdit, handleEditCreate, deleteBookById, ID } = useBooksContext();

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

      {showEdit ? ID === book.id ? <BookEdit book={book} /> : "" : ""}
      <div className="actions">
        <button className="delete" onClick={() => deleteBookById(book.id)}>
          Delete
        </button>
        <button className="edit" onClick={() => handleEditCreate(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
