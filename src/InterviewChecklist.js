import React, { useState } from "react";
import "./App.js";
import "./App.css";

function InterviewChecklist({ checklist, toggleTask, addTask }) {
  const [newTask, setNewTask] = useState("");

  // Handle input change
  const handleTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  // Handle new task submission
  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask(""); // Reset the input field after adding task
    }
  };

  return (
    <div className="checklist">
      <h3>Interview Preparation Checklist</h3>
      <ul>
        {checklist.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              id={`task-${index}`}
              onChange={() => toggleTask(index)}
              checked={task.completed}
            />
            <label htmlFor={`task-${index}`}>{task.text}</label>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Add a custom task"
          value={newTask}
          onChange={handleTaskChange}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default InterviewChecklist;
