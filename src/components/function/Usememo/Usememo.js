import React, { useState } from 'react'
import Child from './Child'

function Usememo() {
    const [text,setText]=useState("Good Mornig")
    const [count,setCount]=useState(0)
  return (
    <div>
        <Child text={text}/>
        <button onClick={()=>setCount(count+1)}>count value{count}</button>
        
        <button onClick={()=>setText("Good Evening")}>change Text</button>
    </div>
  )
}

export default Usememo