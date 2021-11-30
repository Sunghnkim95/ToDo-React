import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList'

//const LOCAL_STORAGE_KEY = 'ToDoList'

const Todo = (props) => {
    const [todoList, setTodoList] = useState(localStorage.getItem('ToDoList') ? JSON.parse(localStorage.getItem('ToDoList')) : [])
//localStorage.getItem('ToDoList') ? localStorage.getItem('ToDoList') :
/*
    useEffect(()=>{ 
        const storedTodos = JSON.parse(localStorage.getItem('ToDoList'))
        if (storedTodos) 
        setTodoList(storedTodos)
      }, [])
*/
    function addTodo(todo) {
        let copy = [...todoList]
        copy.push(todo)
        setTodoList(copy)
        localStorage.setItem('ToDoList', JSON.stringify(Array.from(copy)))
    }

    return <div className="todo">
        <TodoForm addTodo={ addTodo }/>
        <TodoList todoList={ todoList } />
    </div>
}

export default Todo;