import axios from "axios"
import { useEffect, useState } from "react"
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';




const ApiList=()=>{
    const [data,setData]=useState([])
    const [user,userData]=useState("")
     
       
     const userNUm=(event)=>{
        event.preventDefault()
        const num=event.target.value
        if(Number(num)>5000 || Number(num)<1){
                alert("Enter number is not in data")
        }
        userData(num)
     }
     const handleOnSubmit=(event)=>{
        event.preventDefault()
        axios.get(`https://jsonplaceholder.typicode.com/photos/${user}`).then((res)=>{setData([res.data])})
        userData("")
    }
     
     

    return(
                <>  <form onSubmit={handleOnSubmit}>
                    <label>Enter The Number:</label>
                    <input type={"text"} value={user} onChange={(event)=>userNUm(event)} />
                    <button>Submit</button>
                    </form>
                    {
                        data.length> 0  &&
                        data.map((ListData)=>{
                                return(
                                    <>
                                     <Col xs>
                                            <div className="CardApi">
                                            <Card style={{ width: '18rem' }} key={`${ListData.id}`}>
                                            <Card.Img variant="top" src={ListData.url} />
                                                <Card.Body>
                                                    <Card.Text>ID No:
                                                        {ListData.id}
                                                    </Card.Text>
                                                    <Card.Title>{ListData.title}</Card.Title>
                                                
                                                </Card.Body>
                                                <ListGroup className="list-group-flush">
                                               
                                                </ListGroup>
                                                <Card.Body>
                                                
                                            </Card.Body>
                                        </Card>
                                        </div>
                                        </Col>
                                    
                                    
                                    </>

                                )
                        })
                    }
                   

                </>
    )
}
export default ApiList