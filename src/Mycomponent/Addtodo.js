import React, { useState } from 'react'

export default function Addtodo(props) {
   const [nam,setnam]=useState("")
   const [des,setdes]=useState("")
 let as;
  
  return (
    <div className='container'>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">name</label>
    <input type="text" value={nam} onChange={(e)=> {setnam(e.target.value)}}className="form-control" id="name" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" value={des} onChange={(e)=>setdes(e.target.value)} className="form-control" id="desc"/>
  </div>

  <button type="submit" className="btn btn-primary" onClick={(e)=>{ e.preventDefault(); props.add(nam,des); ; setdes(" ");setnam(" ")}} >Add</button>
  
</form>
    </div>
  )
}
