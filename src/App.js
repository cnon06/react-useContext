import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

import useBooksContext from "./hooks/use-books-context";

function App() {
  const { fetchBooks, enableCreate } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <BookList />
      {enableCreate ? <BookCreate /> : ""}
    </div>
  );
}

export default App;
