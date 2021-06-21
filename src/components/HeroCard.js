import React from 'react';
import '../styles/HeroCard.scss';

const HeroCard = ({ hero }) => {
  return (
    <div className="cards-container">
      <div className="card">
        <img src={hero.data.results[0].image.url} alt="" />
        <div className="details">
          <h2 className="name">{hero.data.results[0].name}</h2>
          <div className="name">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
