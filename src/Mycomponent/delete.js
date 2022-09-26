import React from 'react'

export default function Delete(props){
   props.updatea(10)
   props.updateb(11)
  return (<>
    <div>{props.a}</div>
    <div>{props.b}</div>
    </>
  )
}
