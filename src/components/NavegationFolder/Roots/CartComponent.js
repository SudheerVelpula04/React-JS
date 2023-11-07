import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

function CartComponent() {
    const dataFromUrl = useParams()
    const [item,setItem]=useState({})
   useEffect(()=>{
           axios.get(`https://fakestoreapi.com/products/${dataFromUrl.id}`).then(res=>setItem(res.data))

   },[dataFromUrl.id])
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>Card Title:{item.title}</Card.Title>
        <Card.Text>
        description:{item.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
    </div>
  )
}

export default CartComponent