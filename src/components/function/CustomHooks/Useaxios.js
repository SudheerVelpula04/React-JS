import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Product_Api } from '../endPoint'





export function Useaxios() {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get(Product_Api).then(response=>setData(response.data))
    },[]) 



  return[data]
}

//  https://fakestoreapi.com/products