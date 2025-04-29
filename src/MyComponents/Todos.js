import React from 'react'
import {TodoItem} from './TodoItem'


export const Todos = (props) => {
  let todosStyle = {
    marginBottom: "150px"
  }


  return (
    <>
     <div className="container mb-[5vw]" style={todosStyle}>
    
      <h3 className="bg-danger text-white text-center">Todos List</h3>
      
      {props.todos.length===0? "No Todos to display": 
      props.todos.map((todo) => {
        return < TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete} />
        
      })
    }

      </div> 
    </>
  )
}
