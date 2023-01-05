// import logo from './logo.svg';
import './App.css';
import {Head} from './Mycomponent/Header';
import Todos from './Mycomponent/todos';
// import TodoItems from './Mycomponent/todoItem';
import Footer from './Mycomponent/Footer'
import { useState,useEffect } from 'react';
import Addtodo from './Mycomponent/Addtodo';
import About from './Mycomponent/about' 
// import Delete from './Mycomponent/delete';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  var inittodo;
  if(localStorage.getItem("todo")==null)
  {
    inittodo=[];
  }
  else{
  inittodo=JSON.parse(localStorage.getItem("todo"))
}
  const [todo,setTodo] = useState(inittodo)
  useEffect(()=>{localStorage.setItem("todo",JSON.stringify(todo))},[todo])
  function abcd(){console.log(todo)}
  abcd();
  
 const addtodo=(n,d)=>{
//  this.preventDefault();
  if(!n || !d)
  {
    alert("write all info");
  }
  else{
  let s = todo.length+1;
  const temp = {sno:s,name:n,Description:d}
  setTodo([...todo,temp]);
  
  }
 
 }
  const ondelete=(to)=>
  {
    console.log("I am on delete",to);
    setTodo(todo.filter((e)=>{ return e!==to;}))
    // localStorage.getItem("todo")
  }
  
  // function practise()
  // {
  //   const t={name:"Shubham",Age:25}
  //   setthis([...p,t]);
  //   console.log(p.map((e)=>{return e}))
  // }
    

  // const [a,seta]=useState(0);
  // const [b,setb]=useState(0);
   
  // function updatea(q)
  // {
  //   set
  // }
  // seta(10);
  // function abc()
  // {
  //   seta(10);
  // }
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={[<Head/>,<Addtodo add={addtodo}/>,<Todos abc= {todo} ondelete = {ondelete} />]} />
    <Route path="/about" element={[<Head/>,<About />]} />
    </Routes>
    <Footer/>
     </BrowserRouter>
     
     
    //  {/* <TodoItems></TodoItems> */}
    //  {/* <div>{p.map((e)=>{return e.name})}</div>
    //  <div>{p.map((e)=>{return e.Age})}</div> */}
     
    //  {/* <button onClick={practise} >Click this</button> */}
     



  );
}

export default App;
