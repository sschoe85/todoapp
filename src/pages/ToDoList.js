import React, { useEffect } from "react";
import { fetchToDos } from "../api/fetchToDos";
import { useHistory } from "react-router-dom";

function ToDoList() {
  const history = useHistory();
  const [toDos, setToDos] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      const allToDos = await fetchToDos();
      setToDos(allToDos);
    }
    fetchData();
  }, []);
  function handleClick() {
    history.push("/add");
  }
  console.log(toDos);
  return (
    <main>
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
