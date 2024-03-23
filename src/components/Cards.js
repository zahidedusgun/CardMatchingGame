import React from "react";
import bg from "../cards/bg.png";
import "../components/Cards.css";

function Cards({ card, handleSelected, disabled, rotated }) {
  const handleCardClick = (card) => {
    if (!disabled) {
      handleSelected(card);
    }
  };

  return (
    <div>
      <div className="card">
        <div className={rotated ? "rotated" : ""}>
          <img className="cardFront" src={card.path} alt="" />
          <img className="cardBack" src={bg} onClick={handleCardClick} alt="" />
        </div>{" "}
      </div>
    </div>
  );
}

export default Cards;
