import React from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

function ToDoCard({ toDos, addToDo, todoDone, todoRemove }) {
  console.log(".:TEST:. ToDoCard 1/1: Amount of cards->", toDos.length);
  return (
    <div className="todo__card">
      <h1 className="todo__Title">What To Do?</h1>
      <ToDoInput addToDo={addToDo} />
      <ToDoList toDos={toDos} todoDone={todoDone} todoRemove={todoRemove} />
    </div>
  );
}

export default ToDoCard;
