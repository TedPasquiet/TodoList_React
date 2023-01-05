import "./App.css";
import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";

function App() {
  const [todos, setToDos] = useState([]);
  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    const newToDo = {
      text: text,
      id: id,
      key: id,
      complete: false,
    };
    setToDos(() => [newToDo, ...todos]);
  };
  const handleDelete = (id) => {
    const newToDos = todos.filter((el) => el.id != id);
    setToDos(newToDos, ...todos);
  };
  const handleComplete = (id) => {
    const updatedTodos = todos.map((el) => {
      if (el.id === id) {
        el.complete = !el.complete;
      }
      return el;
    });
    setToDos(updatedTodos);
  };
  const elements = todos.map((el) => {
    return (
      <ToDoItem
        text={el.text}
        id={el.id}
        key={el.key}
        todo={el}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
        complete={el.complete}
      />
    );
  });
  console.log(todos);
  return (
    <div className="App">
      <div className="form">
        <h1 className="title">Todo List</h1>
        <ToDoForm addTodo={addTodo} />
        {elements}
      </div>
    </div>
  );
}

export default App;
