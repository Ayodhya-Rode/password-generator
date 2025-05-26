import { useState } from "react";

function Counter() {

  const[value, setValue] = useState(5)

  function Add() {
    if(value<20 && value>=0){
      setValue(value+1) 
    }
    else{
      console.log('range is bet 0 to 20'); 
    }
  }

  function Remove() {
    if(value>0 && value<20){
      setValue(value-1) 
    }
    else{
      console.log('range is bet 0 to 20'); 
    }
  }
 
  return (
    <>
     <h1 className="text-red-500 bg-yellow-200 rounded-xl text-2xl p-2">Chai</h1> 
     <h5>Counter is {value} </h5>  
     <button onClick={Add}>add {value}</button>
     <button onClick={Remove}>remove {value}</button>  
     <h5>hi</h5> 
    </>
  )
}

export default Counter
