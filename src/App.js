import { useState } from "react";
import "./myStyle.scss";

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([
   
  ])
  function handleChange(e){
    e.preventDefault();
    setNewTodo(e.target.value);

  }

  function confirmTodo(e){
    e.preventDefault();
    if( newTodo === '') return
    setTodos([...todos, {id: Date.now(), text: newTodo }])
    e.target.reset();
  }
 function removeMyTodo(id){
 setTodos(todos.filter((todo)=> todo.id !==id))
 }
  return (
    <div className="myhead">
      <h1>My Todo App</h1>
      <form onSubmit={confirmTodo}>
        <input placeholder="The task" onChange={handleChange}/>
          <ul className="mytodolist">
            {todos.map((todo) => (
              <li key={todo.id} className="todo">
                {todo.text}
              <a href="#" onClick={()=> removeMyTodo(todo.id)}>X</a>
              </li>
              
            ))}
          </ul>
      </form>
    </div>
  );
}

export default App
