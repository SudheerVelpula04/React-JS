import axios from "axios"
import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./ApiByUSingUseEffect.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





const ApiUseEffect =()=>{
    const[data,setData]=useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos").then(res=>setData(res.data))

    },[])

    return(
        <>
        
        {/* <h1>hello</h1> */}
        <Container>
             <Row>


                                {
                                    data.length>0 && data.map((item)=>{
                                        return(
                                            
                                             <Col xs>
                                            <div className="CardApi">
                                            <Card style={{ width: '18rem' }} key={item.id}>
                                            <Card.Img variant="top" src={item.url} />
                                                <Card.Body>
                                                    <Card.Text>
                                                        {item.id}
                                                    </Card.Text>
                                                    <Card.Title>{item.title}</Card.Title>
                                                
                                                </Card.Body>
                                                <ListGroup className="list-group-flush">
                                                    {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                                                </ListGroup>
                                                <Card.Body>
                                                <Card.Link href="#">Card Link</Card.Link>
                                                <Card.Link href="#">Another Link</Card.Link>
                                            </Card.Body>
                                        </Card>
                                        </div>
                                        </Col>

                                        )   
                                        
                                    })

                                }
             </Row>
            </Container>
        </>
        
    )
}
export default ApiUseEffect