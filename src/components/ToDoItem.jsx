import React from "react";
import confetti from "canvas-confetti";
import explosionSoundFile from "../sfx/boom.mp3";
import gunSoundFile from "../sfx/rifleshot.mp3";

const explosionSound = new Audio(explosionSoundFile);
const gunSound = new Audio(gunSoundFile);

const priorityColors = {
  High: "red",
  Medium: "orange",
  Low: "green",
};

console.log(explosionSound, gunSound); // Test ifall ljudet laddas.

function ToDoItem({ todo, todoDone, todoRemove }) {
  const handleComplete = (id) => {
    todoDone(id);

    if (!todo.completed) {
      //Bazookan
      explosionSound.play();
      confetti({
        particleCount: 250,
        spread: 70,
        angle: 135,
        startVelocity: 55,
        zIndex: -1,
        origin: {
          x: (window.innerWidth * 0.4) / window.innerWidth,
          y: (window.innerHeight * 0.73) / window.innerHeight,
        },
        colors: ["#ff0000", "#ff6600"],
      });
      //Pickadollen
      setTimeout(() => {
        gunSound.play();
        confetti({
          particleCount: 250,
          spread: 5,
          angle: 45,
          startVelocity: 65,
          rotate: 90,
          zIndex: -1,
          origin: {
            x: (window.innerWidth * 0.56) / window.innerWidth,
            y: (window.innerHeight * 0.71) / window.innerHeight,
          },
          colors: ["#ff0000", "#ff6600"],
        });
        todoRemove(id); /* Function to remove after checked completed.*/
      }, 800);
    }
  };

  const handleDragStart = (e, id) => {
    console.log(`.:TEST:. handleDragStart 1/1 ID =${id}`);
    e.dataTransfer.setData("todoId", id);
  };

  return (
    <li
      className={`todo__item ${todo.completed ? "completed" : ""}`}
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        borderLeft: `20px solid ${priorityColors[todo.priority]}`,
        paddingLeft: "10px",
      }}
      draggable
      onDragStart={(e) => handleDragStart(e, todo.id)}
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
