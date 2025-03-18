import React, { useState, useEffect } from "react";
import ToDoInput from "./ToDoInput.jsx";
import ToDoItem from "./ToDoItem.jsx";

function ToDoList() {
  const [toDos, setTodos] = useState(
    JSON.parse(localStorage.getItem("ToDos")) || []
  );
  //Saves list for further use in localstorage.
  useEffect(() => {
    localStorage.setItem("ToDos", JSON.stringify(toDos));
  }, [toDos]);
  //Adds todos usin the Saved time as ID.
  const addToDo = (todoText, priority) => {
    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false,
      priority: priority || "Medium",
    };
    setTodos([...toDos, newTodo]);
  };
  //
  const todoDone = (id) => {
    setTodos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const todoRemove = (id) => {
    setTodos(toDos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo__card">
      <h1 className="todo__Title">What To Do?</h1>
      <ToDoInput addToDo={addToDo} />
      <ul className="todo__List">
        {toDos
          .sort((a, b) => {
            const priorityOrder = { High: 1, Medium: 2, Low: 3 };
            return priorityOrder[a.priority] - priorityOrder[b.priority];
          })
          .map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              todoDone={todoDone}
              todoRemove={todoRemove}
            />
          ))}
      </ul>
    </div>
  );
}

export default ToDoList;
