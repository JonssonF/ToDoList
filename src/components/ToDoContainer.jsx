import { useState, useEffect } from "react";
import ToDoCard from "./ToDoCard";
import wormImage from "../img/worm.png";

//Container for states and local storage.
// Check local storage for saved todos, else get empty array.
function ToDoContainer() {
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
      priority: priority || "None",
    };
    setTodos([...toDos, newTodo]);
  };

  const todoDone = (id) => {
    console.log(".:TEST:. todoDone 1/1");
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      return updatedTodos;
    });
  };

  const todoRemove = (id) => {
    console.log(".:TEST:. todoRemove 1/1");
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);

      localStorage.setItem("ToDos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  return (
    <>
      <ToDoCard
        toDos={toDos}
        addToDo={addToDo}
        todoDone={todoDone}
        todoRemove={todoRemove}
      />
      <img src={wormImage} alt="Picture of Worms game" className="worm" />
    </>
  );
}

export default ToDoContainer;
