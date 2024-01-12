import { useState } from "react";

function TodoList()
{
  var[todo,settodo]=useState([])
  var[newtodo,setnewtodo]=useState("");

  function HandlerBtn()
  {
    settodo([...todo, newtodo]);
    console.log(todo);
    setnewtodo("");
  }
  function HandlerRemove(index)
  {
      var newarr = todo.filter((item,i)=> i!=index);
      settodo(newarr);
  }
  return(
    <>
    <div className="col-md-10">
    <h1>Hello</h1>
      <input type="text" value={newtodo} onChange={(e)=>setnewtodo(e.target.value)}/>
      <button onClick={HandlerBtn}>click</button>
      {
        todo.map((t,index)=>(
          <>
            <h1>{t}</h1>
            <button onClick={()=>HandlerRemove(index)}>remove</button>
          </>
        ))
      }
    </div>
    </>
  )
}
export default TodoList;