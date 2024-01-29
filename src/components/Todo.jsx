import React from 'react'
import TodoItem from './TodoItem';

export default function Todo({list}) {
  return (
    <div>    
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
