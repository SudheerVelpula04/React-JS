import React, { useEffect, useState } from 'react'
import AppData from '../../function/forms/CardAngular'
import NavPage from './NavPage'
import axios from 'axios'

function HomePage() {
    const [data,setData]=useState([])

    useEffect(
        ()=>{
                axios.get("https://fakestoreapi.com/products").then(response=>setData(response.data))
        },[]
    )
  return (
    <div>
       
        <NavPage/>
        <h1>HomePage</h1>
        <AppData data={data}/>
    </div>
  )
}

export default HomePage