import React from "react";

function Panier(props) {
  const sousTotalCalc = tip => {
    let sousTotal = 0;
    for (let i = 0; i < props.basket.length; i++) {
      sousTotal = sousTotal + props.basket[i].price * props.basket[i].quantity;
    }

    return tip ? sousTotal + tip : sousTotal;
  };

  if (props.basket.length === 0) {
    return (
      <div className="panier-vide">
        <button className="purchase-validation-vide">Valider mon panier</button>
        <span className="purchase-validation-vide-message">
          Votre panier est vide
        </span>
      </div>
    );
  } else {
    return (
      <div className="panier">
        <button className="purchase-validation">Valider mon panier</button>
        {props.basket.map((meal, index) => {
          // console.log(meal);
          return (
            <div className="purchase" key={index}>
              <div className="counter-block">
                <span
                  className="minus-button"
                  onClick={() => {
                    props.removeProduct(meal);
                  }}
                  style={{
                    height: "auto",
                    width: "1.5rem",
                    fontSize: "1.5rem",
                    marginRight: "5px",
                    cursor: "pointer"
                  }}
                >
                  🤮
                </span>
                <div className="counter" key={index}>
                  {meal.quantity}
                </div>
                <span
                  style={{
                    height: "auto",
                    width: "1.5rem",
                    fontSize: "1.5rem",
                    marginLeft: "5px",
                    cursor: "pointer"
                  }}
                  className="plus-button"
                  onClick={() => {
                    props.addProduct(meal);
                  }}
                >
                  😋
                </span>
              </div>

              <div className="item" style={{ fontSize: "0.9rem" }} key={index}>
                {meal.title}
              </div>
              <div className="item-price" key={index}>
                {meal.price} $
              </div>
            </div>
          );
        })}

        <div className="sub-total">
          <div className="sub-total-title">sous-total</div>
          <div className="sub-total-value-bloc">
            <div className="sub-total-value">
              {sousTotalCalc().toFixed(2)} $
            </div>
            <span className="sub-total-currency"> </span>
          </div>
        </div>

        <div className="delivery-fee">
          <span>frais de livraison </span>
          <span>2.5 $</span>
        </div>
        <div className="total">
          <span>Total</span>
          <div>
            {sousTotalCalc(2.5).toFixed(2)}
            <span> $</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Panier;
