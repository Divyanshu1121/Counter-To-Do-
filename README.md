# React To-Do and Counter App

## Overview
This project is a simple React-based application that consists of two main components:
1. **To-Do App** – A task management system where users can add, mark as complete, and delete tasks.
2. **Counter App** – A counter with increment, decrement, and reset functionality.

Both components are integrated into the main `App.jsx` file and styled using `App.css`.

---

## Features
### To-Do App
- **Add Tasks**: Users can input and add tasks to the list.
- **Mark as Completed**: Clicking on a task toggles its completion status (strikes through completed tasks).
- **Delete Task**: Users can remove a task from the list.
- **Dynamic State Management**: Uses React's `useState` to manage task additions, deletions, and updates.

### Counter App
- **Increment Counter**: Increases the counter value when the `+` button is clicked.
- **Decrement Counter**: Decreases the counter value when the `-` button is clicked, preventing negative values.
- **Reset Counter**: Resets the counter to `0`.
- **State Management**: Utilizes React's `useState` to track the counter value dynamically.

---

## Folder Structure
```
/src
  /components
    - ToDoApp.jsx
    - Counter.jsx
  - App.jsx
  - App.css
  - index.js
```

---

## File Breakdown

### `ToDoApp.jsx`
This component implements a simple to-do list with basic CRUD (Create, Read, Update, Delete) functionalities.
#### **Logic Used:**
- **useState Hook**: Manages an array of tasks and individual task input.
- **Event Handling**:
  - `addTask()`: Adds a new task to the state array.
  - `toggleTask(index)`: Toggles the completion state of a task.
  - `deleteTask(index)`: Removes a task from the array.
- **Rendering**:
  - A list of tasks dynamically updates based on user input.
  - Completed tasks have a strikethrough effect.

### `Counter.jsx`
This component provides a simple counter with increment, decrement, and reset functions.
#### **Logic Used:**
- **useState Hook**: Manages the counter value.
- **Event Handling**:
  - Clicking `+` increases the counter.
  - Clicking `-` decreases the counter but prevents it from going negative.
  - Clicking `Reset` sets the counter back to `0`.
- **Conditional Rendering**: Prevents the decrement action when the counter is at `0`.

### `App.jsx`
The main application file that integrates `ToDoApp` and `Counter` components.
#### **Logic Used:**
- Imports and renders both components.
- Uses an `<hr />` tag to visually separate them.

### `App.css`
Defines the styling for both components, including:
- **Background Image**
- **Input Field and Buttons Styling**
- **Task List Layout and Hover Effects**
- **Counter Button Colors**

---

## Installation and Setup
### **1. Clone the Repository**
```sh
git clone https://github.com/React Pr-1.git
cd React Pr-1
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Start the Development Server**
```sh
npm start
```
The app will run on `http://localhost:5173/`.

---

## Future Improvements
- **Persistent Storage**: Save tasks using local storage or a backend database.
- **Animations**: Add smooth transitions for task addition/deletion.
- **Dark Mode Toggle**: Allow users to switch themes.

---

## Author
Developed by Divyanshu Patel. Feel free to contribute and suggest improvements!

