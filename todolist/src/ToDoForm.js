import React from "react";
import { useState } from "react";

const ToDoForm = (props) => {
  const [textTodo, setTextToDo] = useState();
  const handleSubmit = (e) =>{
    e.preventDefault()
    props.addTodo(textTodo)
  }
  return (
    <div>
      ToDoForm
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setTextToDo(e.target.value)} />
        <button>Add To Do</button>
      </form>
    </div>
  );
};

export default ToDoForm;
