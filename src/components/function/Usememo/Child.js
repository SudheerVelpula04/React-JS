import React from 'react'
import Usememo from './Usememo'
import { useMemo } from 'react'

function Child({text}) {




    //With out Use Memo
    // function convectTOUpperCase(){
    //     console.log("chiled memo log")
    //     return text.toUpperCase()
    // }



        // using usememo
        const convectTOUpperCase=useMemo(()=>{
            console.log("use memo")
            return text.toUpperCase()
        },[text])


  return (
    <div>
        <h1>
            hi {convectTOUpperCase}
        </h1>
    </div>
  )
}

export default Child