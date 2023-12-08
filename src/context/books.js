import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [enableCreate, setEnableCreate] = useState(true);
  const [showEdit, setShowEdit] = useState(false);

  const [books, setBooks] = useState([]);

  const [ID, setID] = useState();
  const [title, setTitle] = useState("");

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
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
    handleEditCreate();
  };

  const handleEditCreate = (id) => {
    setShowEdit(!showEdit);

    // handleEnableCreate(showEdit);
    setEnableCreate(showEdit);
    console.log(showEdit);
    setID(id);
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

  const valueToShare = {
    setTitle,
    title,
    ID,
    showEdit,
    handleEditCreate,
    setEnableCreate,
    enableCreate,
    books,
    fetchBooks,
    handleEdit,
    createBook,
    deleteBookById,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
