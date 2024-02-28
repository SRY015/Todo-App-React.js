import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";

import style from './todo.module.css';


function Todo(props) {

    // Destructuring -->
    const {title, desc} = props.todo;
    const { id } = props;

    const handleClick=(id)=>{
        props.onRemoveTodo(id);
    }

  return (
    <article className={style.todo}>
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <button className={style.btn} onClick={()=>handleClick(id)}><FaRegTrashAlt /></button>
        </div>
    </article>
  )
}

export default Todo
