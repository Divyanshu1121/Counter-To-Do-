import React, { useState } from 'react';
import '../App.css'; 

const ToDoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if (task.trim() !== "") {
            setTasks([...tasks, { task, completed: false }]);
            setTask("");
        }
    };

    const toggleTask = (index) => {
        const updatedTask = tasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t));
        setTasks(updatedTask);
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-container">
            <input
                type="text"
                placeholder="Add a Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="todo-input"
            />
            <button onClick={addTask} className="todo-button">Add</button>

            <ul className="todo-list">
                {tasks.map((t, index) => (
                    <li key={index} className={`todo-item ${t.completed ? "completed" : ""}`}>
                        <span onClick={() => toggleTask(index)}>{t.task}</span>
                        <button onClick={() => deleteTask(index)} className="todo-button">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoApp;
