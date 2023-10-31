
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../NavegationFolder/NavigationRoot";



const AppData = ({data}) => {
  const data1 = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the first card."
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card."
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card."
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is the fourth card."
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card."
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card."
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is the fourth card."
    },
    {
        id: 4,
        title: "Card 4",
        description: "This is the fourth card."
      },
    // Add more cards here if needed.
  ];
  const cartConsumer=useContext(cartContext)

  // Define the number of cards to display in each row.
  const cardsPerRow = 4;

  // Create an array of rows, each containing a subset of card data.
  const rows = [];
  for (let i = 0; i < data.length; i += cardsPerRow) {
    const row = data.slice(i, i + cardsPerRow);
    rows.push(row);
  }

  return (
    <div className="container" style={{justifyContent:"center"}}>
      {rows.map((row, rowIndex) => (
        <div className="row" key={rowIndex} style={{marginTop:30}} >
          {row.map((card) => (
            
            <div className="col" key={card.id}>
              
              <div className="card" style={{height:"350px"}}>
              <img src={card.image} alt="text" width={100} style={{alignContent:"center"}}/>
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">Rating:{card.rating.rate}</p>
                  
                  <button >
                  <Link to={`/product/${card.id}`} style={{textDecoration:"none"}}>
                    View Item
                    </Link>
                    </button>
                    <button onClick={()=>cartConsumer.addItemToCart(card)}>add To Card</button>
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AppData;
