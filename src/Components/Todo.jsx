import { useEffect, useRef, useState } from 'react';
import './CSS/Todo.css'
import { TodoItems } from './TodoItems';

let count = 0;
export const Todo = () => {
  const [todos,setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
      if (inputRef.current.value != "") {
        setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}]);
        inputRef.current.value = "";
        localStorage.setItem("todos_count",count); 
      }
  }

  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem("Todos")))
    count = localStorage.getItem("todos_count");
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      console.log(todos);
      localStorage.setItem("Todos",JSON.stringify(todos));
    },100)
  },[todos])

  return (
    <div className='todo'>
      <div className="todo-header">To-do List </div>
      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder='Add your task' className="todo-input" />
        <div onClick={()=>{add()}} className="todo-add-btn">ADD</div>
      </div>
      <div className="todo-list">
        {todos.map((item,index)=>{
          return <TodoItems key={index} no={item.no} display={item.display} text={item.text} setTodos={setTodos} />
        })}
      </div>
    </div>
  )
}
