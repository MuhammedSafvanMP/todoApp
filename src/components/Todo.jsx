import React, { useState } from 'react'
import TodoItem from './TodoItem';

export default function Todo() {
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
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button type='submit'>ADD</button>
        </form>

        
            <ul>
                {
                    list.map((item) => {
                        return(
                            <TodoItem key={item} item = {item} />
                        )
                    })
                }
            </ul>
        
    </div>
  )
}
