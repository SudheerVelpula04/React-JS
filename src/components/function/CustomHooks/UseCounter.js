import { useState } from "react"




export function UseCounter(intialCount){
    const[count,setCount]=useState(intialCount)
    const increment =()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0)
    }

    return[count,increment,decrement,reset]
}

