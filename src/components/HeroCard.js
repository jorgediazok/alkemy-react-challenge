import React from 'react';
import '../styles/HeroCard.scss';

const HeroCard = ({ data }) => {
  // const [cardFlipped, setCardFlipped] = useState(false); PARA FLIP CARDS

  // const flipCard = () => {
  //   setCardFlipped(true);
  // };

  return (
    <div className="cards-container">
      <div className="card">
        <img src={data.image.url} alt="" />
        <div className="details">
          <h2 className="name">{data.name}</h2>
        </div>
        <div className="card-back middle">
          <div className="card-back-content"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
