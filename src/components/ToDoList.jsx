import React from "react";
import ToDoItem from "./ToDoItem.jsx";
import wasteBinFile from "../sfx/eating.wav";

function ToDoList({ toDos, todoDone, todoRemove }) {
  console.log(".:TEST:. ToDoList 1/1");

  const handleDrop = (e) => {
    e.preventDefault();
    console.log(".:TEST:. handleDrop 1/1");
    const id = e.dataTransfer.getData("todoId");
    const wasteBin = new Audio(wasteBinFile);
    wasteBin.play();
    todoRemove(Number(id));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <ul className="todo__List">
        {toDos.length > 0 &&
          toDos
            .sort((a, b) => {
              const priorityOrder = { High: 1, Medium: 2, Low: 3, None: 4 };
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
      {/* Area for drag and drop wastebin */}
      <div
        className="waste__space"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      ></div>
    </>
  );
}

export default ToDoList;
