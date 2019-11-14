import React from "react";
import Plat from "./Plat";

function Plats(props) {
  return (
    <div className="plats">
      {Object.keys(props.menu).map((category, index) => {
        return (
          <div className="plats-category" key={index}>
            {category}
            <div className="plats-display">
              {props.menu[category].map((meal, index) => {
                return (
                  <Plat
                    meal={meal}
                    key={index}
                    basket={props.basket}
                    setBasket={props.setBasket}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Plats;
