import React from "react";
import { fetchToDos } from "../api/fetchToDos";
import { useHistory } from "react-router-dom";
import useAsync from "../hooks/useAsync";

function ToDoList() {
  const history = useHistory();
  function handleClick() {
    history.push("/add");
  }
  const {data: toDos, loading, error} = useAsync(fetchToDos);
  return (
    <main>
      {error && <div>Error!</div>}
      {loading && <div>Page is loading...</div>}
      {toDos?.map((todo) => (
        <div>
          {todo.title} {todo.details}
          
        </div>
      ))}
      <button onClick={handleClick}>Add ToDo</button>
    </main>
  );
}

export default ToDoList;
