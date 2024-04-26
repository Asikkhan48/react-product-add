import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Product from "./Component/Product";

function App() {
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("fake.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handelCard = (p) => {
    const isExist = card.find((item) => item.id == p.id);
    if (!isExist) {
      setCard([...card, p]);
    } else {
      alert("already added");
    }
  };

  const handleDelate =(id)=>{
    const newCard = card.filter(item=> item.id !== id);
    setCard(newCard);
  }

  return (
    <>
      <div className="main-container m-4 p-4 space-y-4 max-w-7xl mx-auto">
        {/* cards container */}
        <div className="cards-container">
          <h1>My Name is Cards</h1>

          {products.map((product, idx) => (
            <Product
              key={idx}
              product={product}
              handelCard={handelCard}
            ></Product>
          ))}
        </div>

        {/* card container */}
        <div className="card-container">
          <h1 className="text-center font-extrabold">My Name is Card</h1>
          <div className="card-title flex justify-between items-center p-5">
            <h4>SL</h4>
            <h4>Name</h4>
            <h4>Price</h4>
          </div>
          <div>
            {card.map((car, index) => (
              <div className="card-info flex justify-around items-center gap-5 space-y-4">
                <h4>{index + 1}</h4>
                <h4>{car.title.slice(0, 10)}</h4>
                <hr />
                <h4>{car.price}</h4>
                <button onClick={()=>handleDelate(car.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
