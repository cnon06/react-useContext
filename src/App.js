import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [enableCreate, setEnableCreate] = useState(true);
  const [showEdit, setShowEdit] = useState(false);

  const handleEnableCreate = (isEnable) => {
    setEnableCreate(isEnable);
  };

  const handleEdit = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (id === book.id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
    setShowEdit(!showEdit);
    handleEnableCreate(showEdit);
  };

  const createBook = async (title) => {
    // const updatedBooks = () => [{ id: 123, title }, ...books];
    setBooks([{ id: Math.round(Math.random() * 9999), title }, ...books]);
    // console.log(books);
  };
  const deleteBookById = async (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookList
        onEdit={handleEdit}
        books={books}
        onDelete={deleteBookById}
        onEnableCreate={handleEnableCreate}
      />
      {enableCreate ? <BookCreate onCreate={createBook} /> : ""}
    </div>
  );
}

export default App;
