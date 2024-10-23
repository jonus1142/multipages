import { useState, useEffect } from "react";
import "./Todo.css";

import { fetchTodos } from "../../data/todos";

function Todo() {
  const [todosRaw, setTodosRaw] = useState([]);

  const [onlyWaiting, setOnlyWaiting] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [curPage, setCurPage] = useState(0);

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodosRaw(fetchTodos());
    setItemsPerPage(5);
    setCurPage(0);
  }, []); // load, fetch todos, initial

  useEffect(() => {
    console.log(`nI: ${todosRaw.length}`);
    console.log(`i/p: ${itemsPerPage}`);
    setNumPages(Math.ceil(todosRaw.length / itemsPerPage));
  }, [itemsPerPage]);

  useEffect(() => {
    console.log(`nP: ${numPages}`);
    setCurPage((prev) => (prev > numPages ? numPages - 1 : prev));
  }, [numPages]);

  useEffect(() => {
    if (onlyWaiting) setTodos(todosRaw.filter((todo) => !todo.completed));
    else setTodos(todosRaw);
  }, [todosRaw, onlyWaiting]); // onlyWaiting

  return (
    <div className="todo-container">
      {/* filter controls */}
      <div className="todo-filter-container">
        {/* toggle */}
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            // checked
            onChange={(e) => {
              setOnlyWaiting(e.target.checked);
            }}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            Show only waiting
          </label>
        </div>
        {/* items per page */}
        <select
          className="form-select"
          aria-label="Default select example"
          style={{ width: "180px" }}
          onChange={(e) => {
            setItemsPerPage(e.target.value);
          }}
        >
          <option value={5} selected>
            5 items per page
          </option>
          <option value={10}>10 items per page</option>
          <option value={50}>50 items per page</option>
          <option value={100}>100 items per page</option>
        </select>
      </div>

      {/* todo list */}
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th style={{ textAlign: "right" }}>Completed</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
                        <td>1</td>
                        <td align='left'>do something</td>
                        <td align='right'>done</td>
                    </tr> */}
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>
                <span className="badge bg-secondary">{todo.id}</span>
              </td>
              <td align="left">{todo.title}</td>
              <td align="right">
                <span
                  className={
                    "badge " + (todo.completed ? "bg-success" : "bg-warning")
                  }
                >
                  {todo.completed ? "done" : "waiting"}{" "}
                  <span
                    className={
                      "bi " + (todo.completed ? "bi-check" : "bi-clock")
                    }
                  ></span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* page control */}
      <div>
        <button
          className="btn btn-outline-primary todo-button-spaceing"
          onClick={() => setCurPage(0)}
          disabled={curPage === 0}
        >
          First
        </button>
        <button
          className="btn btn-outline-primary todo-button-spaceing"
          onClick={() => setCurPage(curPage > 0 ? curPage - 1 : curPage)}
          disabled={curPage === 0}
        >
          Previous
        </button>
        {curPage + 1}&nbsp;/&nbsp;{numPages}
        <button
          className="btn btn-outline-primary todo-button-spaceing"
          onClick={() =>
            setCurPage(curPage < numPages - 1 ? curPage + 1 : curPage)
          }
          disabled={curPage === numPages - 1}
        >
          Next
        </button>
        <button
          className="btn btn-outline-primary todo-button-spaceing"
          onClick={() => setCurPage(numPages - 1)}
          disabled={curPage === numPages - 1}
        >
          Last
        </button>
      </div>
    </div>
  );
}

export default Todo;
