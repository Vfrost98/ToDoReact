import React, {useState} from "react"; //updating the list portion
import { v4 } from "uuid";
import Header from "./component/header"
import ToDoForm from "./component/ToDoForm"
import ToDoList from "./component/ToDoList"
import './App.css';



function App() { //task have ID, TasName and Is finished attributes
  const [tasks, setTasks] = useState([
   
  ]);



const CheckToDo = (id) =>{
    console.log(id);
    setTasks(tasks.map(tasks => {
      if(tasks.id === id) tasks.isFinished = !tasks.isFinished;
      console.log(tasks.isFinished);
      return tasks;
    }))
}
 

const deleteToDo = (id) =>{
  setTasks(tasks.filter(tasks => tasks.id !== id))
}

//adding todo
const addTask = (text) =>{
  const newTask = {
    id: v4(),
    taskName: text,
    isFinished: "false"
  };
  setTasks([...tasks, newTask])
}


// passing tasks props
  return (
    <div className="App">
    <Header/>
    <ToDoForm addTask={addTask}/>
    <ToDoList tasks={tasks} deleteToDo={deleteToDo} CheckToDo={CheckToDo}/>   
    </div>
  );
}

export default App;
