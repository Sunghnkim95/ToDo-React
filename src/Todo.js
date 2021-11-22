import React from 'react'

export default function Todo({ todo, toggleTodo }) {

    function handleTodoClick(){
        toggleTodo(todo.id)
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete}
                    onChange={handleTodoClick}
                />
                {todo.name}
            </label>
        </div>
    )
}

//everytime we click, we call the handleTodoClick func, which calls our 
//ToggleTodo func with the id of the todo from TodoList.js which resets our todoList vaiables to our new list of checked todos