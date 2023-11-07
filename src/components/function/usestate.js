import { useState } from "react"


const UseState=()=>{
    const [data,setData]=useState(0)
    const handleInc=()=>{
      setData(data+1)
       
    }
    const handleDec=()=>{
        setData(data-1)
    }
    const handleReset=()=>{
        setData(0)
    }

    return(
        <>
        <h1>{data}</h1>
        <button onClick={handleInc}>increment</button>
        <button onClick={handleDec}>decrement</button>
        <button onClick={handleReset}>Reset</button>
   

        </>
    )
}
export default UseState