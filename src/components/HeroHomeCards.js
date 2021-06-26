import React, { useState } from 'react';
import '../styles/HeroHomeCards.scss';

//COMPONENTS
import Powerstats from './Powerstats';
import Modal from '../components/Modal';

//STYLES
import '../styles/HeroSearchCards.scss';

const HeroSearchCards = ({ onDelete, hero }) => {
  const [openModal, setOpenModal] = useState(false);

  console.log(hero);

  return (
    <div>
      {openModal && <Modal closeModal={setOpenModal} />}
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
            {/* <Powerstats data={data} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearchCards;
