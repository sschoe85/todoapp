import React, {useEffect} from 'react';
import './App.css';
import { fetchToDos } from './api/fetchToDos';
import List from './components/List';
import ListItem from './components/ListItem';
import { postToDo } from './api/postToDo';
import { deleteToDo } from './api/deleteToDo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddToDo from './pages/AddToDo';
import ToDoList from './pages/ToDoList';



function App() {

  
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
          <ToDoList/>
         </Route></Switch>
    </div>
        </Router>
  );
}

export default App;


