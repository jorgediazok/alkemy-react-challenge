import React, { useState } from 'react';

//STYLES
import '../styles/HeroCard.scss';

const HeroCard = ({ data }) => {
  //const [cardFlipped, setCardFlipped] = useState(false);

  //FLIP CARD

  const flipCard = () => {
    console.log('card was flipped');
    // setCardFlipped(true);
  };

  return (
    <div className="cards-container">
      <div className="card" onClick={flipCard}>
        <div className="card-buttons">
          <button className="btn btn-dark card-button-add">+</button>
          <button className="btn btn-danger card-button-remove">-</button>
        </div>
        <img src={data.image.url} alt="" />
        <div className="details">
          <h2 className="name">{data.name}</h2>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '100%' }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100">
              25%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
