import React, { useState } from 'react';


const TodoList = ({todoList}) => {
    //const todoList = props.todoList;
    //const todoListArr = [todoList]
    const todoItems = todoList.map((todo) =>
        <li key={todo.name}>
            {todo}
        </li>
    );
    //const todoItemsArr = []
    console.log(todoList);
    if(todoItems.length > 0){
        return <>
            <div className="everythingForToDoList" />
                <h3 className="toDoListTitle">To Do List</h3>  
                <ul className="individualToDo">{todoItems}</ul> 
            <div/>
        </>  
    } else {
        return <>
        <div className="everythingForToDoList" />
            <h3 className="toDoListTitle">To Do List</h3>  
            <p className="nothingToDo">Nothing To Do</p> 
        <div/>
        </>
    }

}

export default TodoList;
