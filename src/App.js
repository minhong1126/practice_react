import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if(e === ""){
      return;
    }
    else{
      setTodo(e);
      setTodos(() => [todo, ...todos]);
      setTodo("");
    }
  }
  return (
    <>
    <h1> Todo List </h1>
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={todo} onChange={onChange} />
        <button> submit </button>
      </form>
    </div>
    <hr />
    {todos.map((e, index) => <li key={index}>{index}: {e}</li>)}
    </>
  );
}

export default App;
