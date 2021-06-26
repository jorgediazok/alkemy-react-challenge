import React, { useState } from 'react';

//COMPONENTS
import Powerstats from './Powerstats';
import Modal from '../components/Modal';

//STYLES
import '../styles/HeroHomeCards.scss';

const HeroHomeCards = ({ onDelete, hero }) => {
  const [openModal, setOpenModal] = useState(false);

  console.log(hero);

  return (
    <div>
      {openModal && <Modal closeModal={setOpenModal} hero={hero} />}
      <div className="card-home">
        <div className="card-front">
          <div className="card-buttons">
            <button
              className="btn btn-dark card-button-add"
              onClick={() => setOpenModal(true)}>
              <i className="fas fa-info-circle"></i>
            </button>
            <button
              data-id={hero.id}
              className="btn btn-danger card-button-add"
              onClick={onDelete}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
          <img src={hero.image.url} alt="" />
          <div className="details">
            <h2 className="name">{hero.name}</h2>
            <Powerstats data={hero} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHomeCards;
