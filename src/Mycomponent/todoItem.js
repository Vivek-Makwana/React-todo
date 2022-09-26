import React from 'react'

const todoItem = (props) => {
  return (
    <div >
      <p>{props.todolist.sno}</p>
        <p>{props.todolist.name}</p>
     <p>{props.todolist.Description}</p>
     <button onClick={()=>{props.ondelete(props.todolist)}} >Delete</button>
    </div>
  )
}

export default todoItem
