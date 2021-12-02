import React, { useState } from 'react';
/* import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckIcon from '@mui/icons-material/Check';
import styled from "styled-components";
import Stack from '@mui/material/Stack'; */
import Button from '@mui/material/Button';
import './styles/List.css'
import { Task } from '@mui/icons-material';
import { browserHistory } from 'react-router';

const TodoList = ({todoList, database, updateDatabase, newTodo, setNewTodo, refresh, setRefresh}) => {

    function CompleteHandler(todo){
        updateDatabase(todo, true);
        setRefresh(!refresh) //refresh default as false, setRefresh updates refresh to notfresh(true), if refresh is false, wer setting refresh to be true. lacking behind one update
        //localStorage.setItem('isComplete', refresh)
    }
    function InCompleteHandler(todo){
        updateDatabase(todo, false);
        setRefresh(!refresh)
        //localStorage.setItem('isComplete', refresh) 
    }
    const todoItems = todoList.map((todo) =>
    
        <div key={todo.name}>
        {database.get(todo)?
        <div>
        <li className="eachTodoTxtStriked">{todo} </li> 
        <Button variant="outlined" className="inCompleteBttn" onClick={()=>
            InCompleteHandler(todo) 
         }>Incomplete</Button> 
        </div>
         :
         <div>
        <li className="eachTodoTxt">{todo} </li>
        <Button variant="outlined" className="completeBttn" onClick={()=>
            CompleteHandler(todo) 
         }>Complete</Button> 
        </div>
        }


        <Button variant="outlined" className="deleteBttn">Delete</Button> 
        </div>
    );
    console.log(todoList);
    if(todoItems.length > 0){
        return <>
            <div className="everythingForToDoList" />
                <h3 className="toDoListTitle">To Do List</h3>  
                <div className="individualToDo">{todoItems}</div> 
            <div/>
            <button>Clear All Completed</button>
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




