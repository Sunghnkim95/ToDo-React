import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './styles/main.css'

const Todo = (props) => {
    const [todoList, setTodoList] = useState(localStorage.getItem('ToDoList') ? JSON.parse(localStorage.getItem('ToDoList')) : [])
    const [database, setDatabase] = useState(new Map());
    const [newTodo, setNewTodo] = useState("");
    const [refresh, setRefresh] = useState(false);

    const updateDatabase = (name, isComplete) => {
        setDatabase(database.set(name, isComplete));
    }

    function addTodo(todo) {
        let copy = [...todoList]
        copy.push(todo)
        updateDatabase(todo, false);
        setTodoList(copy)
        localStorage.setItem('ToDoList', JSON.stringify(Array.from(copy)))
    }

    return <div className="todo">
        <TodoForm 
            addTodo={ addTodo } 
            database={database} 
            updateDatabase={updateDatabase} 
            newTodo={newTodo} 
            setNewTodo={setNewTodo}
            refresh={refresh}
            setRefresh={setRefresh}
        />
        <TodoList 
            todoList={ todoList } 
            database={database} 
            updateDatabase={updateDatabase} 
            newTodo={newTodo} 
            setNewTodo={setNewTodo}
            refresh={refresh}
            setRefresh={setRefresh}
        />
    </div>
}

export default Todo;