import "./App.css";

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";

function App() {
  const todoitems = [
    {
      name: "Assignment Work",
      dueDate: "03/08/24",
    },
    {
      name: "Office Work",
      dueDate: "08/08/24",
    },
    {
      name: "Villa Work",
      dueDate: "18/08/24",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoitems={todoitems}></TodoItems>
    </center>
  );
}

export default App;
