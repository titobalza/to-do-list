import React, { useState } from 'react'
import TodoForm from './TodoForm.jsx'

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [isShown, setIsShown] = useState(false);
    const [cambios, setCambios] = useState({
        id:null,
        value:''
    })

    const submitUpdate = value => {
      updateTodo(cambios.id, value)
      setCambios({
        id:null,
        value:''
      })
    }

    if (cambios.id) {
      return <TodoForm edit={cambios} onSubmit={submitUpdate}/>
    }

  return todos.map((todo, index) => (
  <div 
  className={todo.isComplete ? 'todo-row complete ' : 'todo-row '} 
  key={index}
  onMouseEnter={() => setIsShown(true)}
  onMouseLeave={() => setIsShown(false)}
  >
    <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
    </div>
    
    {isShown && (
        <div className='icons'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"
         onClick={() => removeTodo(todo.id)}
         className='delete-icon d-flex'
         >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
    </div>
      )}
  </div>  
  ))
}


export default Todo