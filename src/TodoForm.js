import React, { useState } from 'react';



const TodoForm = ({addTodo}) => {
    //const addTodo = props.addTodo;
    const [newTodo, setNewTodo] = useState("")

    function onSubmit (event){
        event.preventDefault();
        addTodo(newTodo);
        setNewTodo('')
    }
    return <>
        <form className="everythingForToDoForm" />
        <h3>Input To Do Here</h3>
        <input 
            type="text"
            value={ newTodo }
            placeholder={'What Do You Need To Do?'}
            onChange={(event) => {
            setNewTodo(event.target.value)
        }} />
        <button onClick={onSubmit} className="submitButton">Submit</button>
        <button>Delete</button>
    </>
}

export default TodoForm;