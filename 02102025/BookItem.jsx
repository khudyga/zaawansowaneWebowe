const BookItem = (
  { book, onUpdatePages, onToggleRead, onDelete }

) => {
    const { id, title, pages, read } = book
    return(
      <div>
        <input
          type="checkbox"
          checked={book.read}
          onChange={() => onToggleRead(book.id)}
        />
        <span
          style={{
            textDecoration: book.read ? "line-through" : "none",
            color: book.read ? "pink" : "white",
          }}
        >
          Tytuł : {book.title} 
        </span>
        
        <span> Liczba stron: {book.pages}</span> 

        <button onClick={()=>onUpdatePages(book.id, book.pages + 50)}>
          Dodaj 50 stron
        </button>
        <button onClick={()=>onUpdatePages(book.id, book.pages - 50)}>
          Odejmij 50 stron
        </button>
        <button onClick={()=>onDelete(book.id)}>Usuń</button>
      </div>
    );
};

export default BookItem;