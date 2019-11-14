import React from "react";
function Plat(props) {
  return (
    <div
      className="plat"
      key={props.meal.id}
      onClick={() => {
        props.meal.price = Number(props.meal.price).toFixed(2);
        let isFound = false;
        const newBasket = [...props.basket];
        for (let i = 0; i < newBasket.length; i++) {
          if (newBasket[i].id === props.meal.id) {
            newBasket[i].quantity = props.meal.quantity + 1;
            isFound = true;
            break;
          }
        }
        if (isFound === false) {
          props.meal.quantity = 1;
          newBasket.push(props.meal);
        }

        // newBasket.push(props.meal);
        props.setBasket(newBasket);
      }}
    >
      <div className="description" key={props.index}>
        <span className="plat-title" key={props.index}>
          {props.meal.title}
        </span>
        <p className="plat-description" key={props.index}>
          {props.meal.description}
        </p>
        <div className="pricing">
          <span className="plat-price" key={props.index}>
            {props.meal.price}$
          </span>
          {props.meal.popular === true ? (
            <p className="plat-state" key={props.index}>
              ⭐️ Populaire
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      {props.meal.picture !== undefined ? (
        <img
          className="plat-image"
          src={props.meal.picture}
          alt="plat"
          key={props.index}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Plat;
