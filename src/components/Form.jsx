import React,{useState} from 'react'
import Todo from './Todo';
import style from './form.module.css';

export default function Form() {
    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!todo) return;
        setList([...list, todo]);
        setTodo("");
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className={style.form}>
            <input className={style.input} placeholder='Enter todo Items...' type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button className={style.btn} type='submit'>ADD</button>
        </form>

        <Todo list= {list}/>
    </div>

  )
}
