import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

function ItemView() {
    const dataFromUrl = useParams()
     const [item,setItem]=useState({})
    useEffect(()=>{
            axios.get(`https://fakestoreapi.com/products/${dataFromUrl.id}`).then(res=>setItem(res.data))

    },[dataFromUrl.id])

  
    
    return (
          
        
        <Card style={{ width:"100%" }} key={`${item.id}`}>
        <Card.Img variant="top" src={item.image} style={{width:"200px"}}/>
            <Card.Body>
                <Card.Text>ID No:
                    {item.id}
                </Card.Text>
                <Card.Title>Title:{item.title}</Card.Title>
                <Card.Text>description:{item.description}</Card.Text>
                
            </Card.Body>
            <ListGroup className="list-group-flush">
           
            </ListGroup>
            <Card.Body>
            
        </Card.Body>
    </Card>


  

           )
}

export default ItemView