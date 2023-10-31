import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../ExternalStyle/bootstarplist.css"

class BasicExample extends Component {
  state={
    StudentData:[
          {
            name:"Ramu",
            image:"https://img.freepik.com/free-photo/horizontal-shot-handsome-sporty-afro-american-boy-stylish-black-t-shirt-posing-isolated-with-fore-fingers-raised-pointing-fore-fingers-upwards-showing-copy-space-your-information_343059-2246.jpg",
            class:"LKG",
           ageinyears:4
          },
          {
            name:"Pinky",
            class:"playschool",
            image:"https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_640.jpg",
           ageinyears:3
          },
          {
            name:"Sonu",
            image:"https://media.istockphoto.com/id/146746272/photo/happy-child.jpg?s=612x612&w=0&k=20&c=Gs9N1pyFHvbMqa9wWoRqxoBO_P_ie4vUYCxSi0bSKxs=",
            class:"UKG",
           ageinyears:5
          }]
  }
  
  render(){
    return(
    <div className='hello'>
      {this.state.StudentData.map((list)=>{
        return(
          <div>
             <div>
       
       <h1>STUDENT LIST</h1>    
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={list.image} />
            <Card.Body>
              <Card.Title>{list.name}</Card.Title>
              <Card.Title>Age Of Student:{list.ageinyears}</Card.Title>
              <Card.Text>class :
                {list.class}             
              </Card.Text>
              <Button variant="primary">Submit</Button>
            </Card.Body>
            </Card>
            </div>
          </div>
        )
      })}
    </div>
    
   )
  }
}

export default BasicExample;