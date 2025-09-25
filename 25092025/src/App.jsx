import React, { useState } from 'react';
import Todo from "./Todo";
import Itemlist from "./ItemList"

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Nauczyć się Reacta", completed: false },
    { id: 2, text: "Przećwiczyć propsy", completed: true },
    { id: 3, text: "Zbudować aplikację", completed: false },
  ]);

  const hobbies = ["Programowanie", "Czytanie", "Gotowanie"];
  const languages = ["JS", "Python", "Java", "Angielski"];

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h2>Propsy funkcyjne</h2>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          task={todo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      ))}
      <h2>Propsy z tablicami</h2>
      <Itemlist items={hobbies} title='Moje hobby'/>
      <Itemlist items={languages} title='Moje hobby'/>
    </>
  );
}

export default App;
