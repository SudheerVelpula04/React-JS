import React from 'react'
import NavPage from './NavPage'
import Usememo from '../../function/Usememo/Usememo.js'
import UseCallBack from '../../function/UseCallBackParent/UseCallBack'
import { Useaxios } from '../../function/CustomHooks/Useaxios'
import { UseCounter } from '../../function/CustomHooks/UseCounter'



function AboutPage() {
  //const[data]=Useaxios()
  //console.log(data)
      const[count,increment,decrement,react]=UseCounter(100)
  return (
    <div>
        <NavPage/>
        <h1>AboutPage</h1>
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={react}>react</button>
       {/* <Usememo/> */}
       {/* <UseCallBack/> */}
       
    </div>
  )
}

export default AboutPage