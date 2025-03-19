import React, { useState } from "react";

function ToDoInput({ addToDo }) {
  const [inputValue, setInputValue] = useState("");
  const [priority, setPriority] = useState("None");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addToDo(inputValue, priority);
      setInputValue("");
      setPriority("None");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Add a TooDeeLoo..."
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="None" disabled>
          Select Priority:
        </option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default ToDoInput;
