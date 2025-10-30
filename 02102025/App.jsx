import { useState } from 'react'
import './App.css'
import BookItem from './BookItem'

function App() {
   const [books, setBooks] = useState([
     { id: 1, title: "Harry Potter", pages: 350, read: false },
     { id: 2, title: "Władca Pierścieni", pages: 500, read: true },
     { id: 3, title: "Wiedźmin", pages: 300, read: false },
     { id: 4, title: "1984", pages: 250, read: true },
     { id: 5, title: "Hobbit", pages: 400, read: false },
   ]);

   const onToggleRead = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, read: !book.read } : book
      )
    );
  };

   const onDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

    const onUpdatePages = (id, newPages) => {
      setBooks(
        books.map((book) =>
          book.id === id ? { ...book, pages: newPages } : book
        )
      );
    };



  return (
    <div>
      <h2>Książki</h2>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onUpdatePages={onUpdatePages}
          onToggleRead={onToggleRead}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default App
