import React from 'react'
import TodoItem from './todoItem'
const todos = (props) => {
  const mystyle={
    maxheight : '50vh'
  }
  return (
    <div className='container' style={mystyle}>
      <h3 className='text-center'>This is todos</h3>      
      {props.abc.length==0 ?
      <h1>No Todos to display</h1> :
      
        props.abc.map((poiuy)=>{return(<TodoItem todolist ={poiuy} key = {poiuy.sno} ondelete={props.ondelete}/>)})
  }
    </div>
  )
}

export default todos


