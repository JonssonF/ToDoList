import React from "react";

const priorityColors = {
  High: "red",
  Medium: "orange",
  Low: "green",
};

function ToDoItem({ todo, todoDone, todoRemove }) {
  return (
    <li
      className="todo__item"
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        borderLeft: `20px solid ${priorityColors[todo.priority]}`,
        paddingLeft: "10px",
      }}
    >
      <span>{todo.text}</span>
      <div>
        <button onClick={() => todoDone(todo.id)} className="button__Check">
          {todo.completed ? "✓" : "☐"}
        </button>
        <button onClick={() => todoRemove(todo.id)} className="button__Remove">
          &#x2716;
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
