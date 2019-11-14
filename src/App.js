import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Panier from "./components/Panier";
import Plats from "./components/Plats";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenu] = useState({});
  const [basket, setBasket] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://deliveroo-api.now.sh/menu");
      setMenu(response.data.menu);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addProduct = product => {
    const newBasket = [...basket];
    let isFound = false;

    for (let i = 0; i < newBasket.length; i++) {
      if (newBasket[i].id === product.id) {
        newBasket[i].quantity = newBasket[i].quantity + 1;
        isFound = true;
        break;
      }
    }
    if (isFound === false) {
      product.quantity = 1;
      newBasket.push(product);
    }
    setBasket(newBasket);
  };

  const removeProduct = product => {
    const newBasket = [...basket];
    for (let i = 0; i < newBasket.length; i++) {
      if (newBasket[i].id === product.id) {
        newBasket[i].quantity = newBasket[i].quantity - 1;
        if (newBasket[i].quantity === 0) {
          newBasket.splice(i, 1);
        }
        break;
      }
    }
    setBasket(newBasket);
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="menu">
        {isLoading === true ? (
          <p>Downloading: please wait...</p>
        ) : (
          <div className="carte">
            <Plats menu={menu} setBasket={setBasket} basket={basket} />
          </div>
        )}
        <Panier
          basket={basket}
          addProduct={addProduct}
          removeProduct={removeProduct}
        />
      </div>
    </div>
  );
}

export default App;
