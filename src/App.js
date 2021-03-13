import "./App.css";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";




import { db } from "./firebase_config";
import firebase from "firebase";

import TodoListItem from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []); // blank to run only on first launch\


  
  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  function addTodo(e) {
    e.preventDefault();
    if (todoInput.trim() !== "") {
      db.collection("todos").add({
        inprogress: true,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        todo: todoInput,
      });
    }
    setTodoInput("");
  }
  return (
    <div className="App">
      <div className="layout">
        <h1>MyTask Manager - 📝</h1>
        <form>
          <TextField
            id="standard-basic"
            label="Plans for the day?"
            value={todoInput}
            style={{ width: "90vw", maxWidth: "500px" }}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            onClick={addTodo}
            style={{ display: "" }}

          >
            Add
          </Button>
        </form>
        <div className="listitems">
          {todos.map((todo) => (
            <TodoListItem
              todo={todo.todo}
              inprogress={todo.inprogress}
              id={todo.id}
            />
          ))}
        </div>

       
      <div className="site-footer">
          Developed by: Aditya, Iftikhar, Olivia
         
        </div>
  
 






        
      </div>
    </div>
  );
}




export default App;
