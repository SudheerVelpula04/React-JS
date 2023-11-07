import axios from "axios";
import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./ExternalStyle/LifeCycle.css"

  class Mounting extends Component{

    constructor(){
        super()
        this.state={
            // one:"hello world",
            // two:"oke google",
            products:[]
        }
    }


    // to accept the props from the parent i can able to initiaze
    static getDerivedStateFromProps(){

        return null

    }

    //it will use the API calls
    componentDidMount(){


        //axios: it is a third party library which macks react so powerfull to make http request 
        axios.get('https://fakestoreapi.com/products')
        .then(response=>this.setState({products:response.data}))
    }


        //render is mandatory to display the UI in class component we use the render method
        render(){
            console.log(this.state.products)


            //Destructor this using hear
            //const {one,two}=this.state
            return(
                <>
                  {
                    this.state.products.map((product)=>{
                        return(
                            
                            <div className="Life">
                             <Card style={{ width: '18rem' }}>
                                <h6>{product.id}</h6>
                                <h4>{product.category}</h4>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Title>price:{product.price}</Card.Title>
                                <Card.Text>Rating:
                                    {product.rating.rate}/5         
                                </Card.Text>
                                <Card.Text>Count:
                                    {product.rating.count}       
                                </Card.Text>
                                <Button variant="primary">Submit</Button>
                                </Card.Body>
                                </Card>

                        </div>
                        )
                    })
                  }


                </>
            )
        }
  }

export default Mounting


