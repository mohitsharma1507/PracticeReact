import TodoItem from "./TodoItem";
const TodoItems = ({ todoitems }) => {
  return (
    <div className="item-container">
      {todoitems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
