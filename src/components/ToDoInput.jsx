import React, { useState } from "react";

function ToDoInput({ addToDo }) {
  const [inputValue, setInputValue] = useState("");
  const [priority, setPriority] = useState("None");

  const handleChange = (e) => {
    console.log(".:TEST:. handleChange 1/1");
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(".:TEST:. handleSubmit 1/2");
    e.preventDefault();
    if (inputValue.trim()) {
      console.log(".:TEST:. handleSubmit 2/2");
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
        <option value="High" style={{ color: "red" }}>
          High
        </option>
        <option value="Medium" style={{ color: "orange" }}>
          Medium
        </option>
        <option value="Low" style={{ color: "green" }}>
          Low
        </option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default ToDoInput;
