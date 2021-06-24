import React, { useState } from 'react';

//COMPONENTS
import Powerstats from './Powerstats';

//STYLES
import '../styles/HeroCard.scss';

const HeroCard = ({ data }) => {
  //const [cardFlipped, setCardFlipped] = useState(false);

  //FLIP CARD

  const flipCard = () => {
    console.log('card was flipped');
    // setCardFlipped(true);
  };

  console.log(data);

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
          <Powerstats data={data} />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
