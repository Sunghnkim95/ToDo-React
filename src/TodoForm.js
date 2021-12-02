import React, { useState } from 'react';

const TodoForm = ({addTodo, newTodo, setNewTodo, refresh, setRefresh}) => {
    //const addTodo = props.addTodo;

    function onSubmit (event){
        event.preventDefault();
        addTodo(newTodo);
        setNewTodo('')
        //setRefresh(false)
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
    </>
}

export default TodoForm;