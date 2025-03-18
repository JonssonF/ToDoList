import React from "react";
import confetti from "canvas-confetti";

const priorityColors = {
  High: "red",
  Medium: "orange",
  Low: "green",
};

function ToDoItem({ todo, todoDone, todoRemove }) {
  const handleComplete = (id) => {
    todoDone(id);

    if (!todo.completed) {
      //Bazookan
      confetti({
        particleCount: 250,
        spread: 70,
        angle: 135,
        startVelocity: 55,
        origin: { x: 0.32, y: 0.73 },
        colors: ["#ff0000", "#ff6600"],
      });
      //Pickadollen
      setTimeout(() => {
        confetti({
          particleCount: 250,
          spread: 5,
          angle: 45,
          startVelocity: 65,
          origin: { x: 0.62, y: 0.71 },
          colors: ["#ff0000", "#ff6600"],
        });
      }, 800);
    }
  };
  return (
    <li
      className={`todo__item ${todo.completed ? "completed" : ""}`}
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        borderLeft: `20px solid ${priorityColors[todo.priority]}`,
        paddingLeft: "10px",
      }}
    >
      <span>{todo.text}</span>
      <div>
        <button
          onClick={() => handleComplete(todo.id)}
          className="button__Check"
        >
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
