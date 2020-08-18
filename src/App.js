import React, {useEffect} from 'react';
import './App.css';
import { fetchToDos } from './api/fetchToDos';
import List from './components/List';
import ListItem from './components/ListItem';
import { postToDo } from './api/postToDo';



function App() {

  const [toDos, setToDos] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      const allToDos = await fetchToDos();
      setToDos(allToDos);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <main>
        {toDos?.map((todo)=>(<div>
            {todo.title}
        </div>))}
        <button onClick = {postToDo({})}>New ToDo</button>
          
        </main>
    </div>
  );
}

export default App;


