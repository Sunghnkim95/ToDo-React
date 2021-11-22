import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import uuidv4 from 'uuid/dist/v4'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
    const [todos, setTodos] = useState([])
    
    const todoNameRef = useRef()

    useEffect(()=>{ //only want to call this function once
      const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if (storedTodos) 
        setTodos(storedTodos)
    }, [])  //empty array allows to be called once (arr never changes so will never recall this Effect)

    useEffect(()=> {  //useEffect it called to updates changes 
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))  //everytime todos is changes, call this func to save them to local storage
    }, [todos]) //array of properties (dependencies) to let us know when to call this function

    function toggleTodo(id){  //allows us to toggle the incomplete to complete and vice versa
      const newTodos = [...todos] //[...todos] is a copy of our current todos list so we do not change our current todos
      const todo = newTodos.find(todo => todo.id === id)
      todo.complete = !todo.complete //todo.complete will be equal to the opp of todo.complete(thus the !)
      setTodos(newTodos)
    }

    function handleAddTodo(e) {
      const name = todoNameRef.current.value
      if (name === '')return
      setTodos( prevTodos => {
        return [...prevTodos, {id: uuidv4(), name: name, complete: false}]  //assigns default characters to todo
      })
      todoNameRef.current.value = null
    }

    function handleClearTodos(e){ //set new list to the ones that are incomplete
      const newTodos = todos.filter(
        todos = !todos.complete
      )
      setTodos(newTodos)

    }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}> Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed Todos</button>
      <div>{todos.filter(todos=>!todos.complete).length} left to do</div>
    </>
  )
}

export default App;
