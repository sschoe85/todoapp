import React, {useEffect} from 'react';
import './App.css';
import { fetchToDos } from './api/fetchToDos';
import List from './components/List';
import ListItem from './components/ListItem';
import { postToDo } from './api/postToDo';
import { deleteToDo } from './api/deleteToDo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddToDo from './pages/AddToDo';



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
      <Router>
    <div className="App">
        <Switch>
          <Route path = "/add">
            <AddToDo/>
          </Route>
        </Switch>
        <Switch>
          <Route path = "/home"> 
          <main>
        {toDos?.map((todo)=>(<div>
            {todo.title}
        </div>))}
        <button onClick = {()=>postToDo({title: "Testen"})}>New ToDo</button>
        </main></Route></Switch>
    </div>
        </Router>
  );
}

export default App;


