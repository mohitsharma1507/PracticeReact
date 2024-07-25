function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            class="btn btn-danger kg-button"
            onClick={() => onDeleteClick(todoName)}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
