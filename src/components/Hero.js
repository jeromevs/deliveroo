import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-info">
        <h1 className="name-restaurant">Le Pain Quotidien - Montorgueil</h1>
        <span className="restaurant-description">
          Profitez de chaque plaisir de la vie quotidienne. Le Pain Quotidien
          propose des ingrédients simples et sains, du bon pain, des fruits et
          des légumes frais et de saison issus de l’agriculture biologique.
        </span>
      </div>
      <img
        className="restaurant-pic"
        src="https://f.roocdn.com/images/menus/17697/header-image.jpg"
        alt="resto"
      />
    </div>
  );
}

export default Hero;
