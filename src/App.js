import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const [enableCreate, setEnableCreate] = useState(true);
  const [showEdit, setShowEdit] = useState(false);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const handleEnableCreate = (isEnable) => {
    setEnableCreate(isEnable);
  };

  const handleEdit = async (id, newTitle) => {
    await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

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
    setBooks([{ id: Math.round(Math.random() * 9999), title }, ...books]);

    const response = await axios.post("http://localhost:3001/books", { title });
    console.log(response);
  };
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

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
