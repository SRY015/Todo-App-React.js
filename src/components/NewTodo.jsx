import React, { useState } from 'react';

import style from './newTodo.module.css';

function NewTodo(props) {

    const[todo, setTodo] = useState({title:'', desc:''}); 

    // Destructuring the todo -->
    const {title, desc} = todo;

    const handleSubmit=(event)=>{
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({title:"", desc:""})
    }
    const handleChange=(event)=>{
        const name = event.target.name;
        setTodo((oldTodo)=>{
            return {...oldTodo, [name] : event.target.value}
        })
    }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
            <label htmlFor='title'>Title : </label>
            <input type='text' name='title' id='title' value={title} onChange={handleChange}/>
        </div>
        <div className={style["form-field"]}>
            <label htmlFor='desc'>Description : </label>
            <textarea name='desc' id='desc' value={desc} onChange={handleChange}></textarea>
        </div>
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo;
