import React, { useState } from 'react';

//COMPONENTS
import Powerstats from './Powerstats';
import Modal from '../components/Modal';

//STYLES
import '../styles/HeroHomeCards.scss';

const HeroHomeCards = ({ onDelete, hero }) => {
  //STATES
  const [openModal, setOpenModal] = useState(false);
  const [isActive, setActive] = useState(false);
  const [teamCurrentMembers, setTeamCurrentMembers] = useState([]);

  console.log(hero);

  //ADD TO TEAM
  const addToTeam = () => {
    setActive(!isActive);
    // if (hero && !isActive) {
    //   const newTeamHero = [...teamCurrentMembers, hero];
    //   setTeamCurrentMembers(newTeamHero);
    //   console.log(teamCurrentMembers);
    //   if (teamCurrentMembers.length === 2) {
    //     alert('STOP');
    //     //SHOWMODAL ACA CUANDO LLEGA AL LENGTH DE 6 CON CANCELAR Y ACEPTAR
    //   }
    // } else {
    //   console.log('NO AGREGUE NADA');
    // }
  };

  return (
    <div>
      {openModal && <Modal closeModal={setOpenModal} hero={hero} />}
      <div className={isActive ? 'borderAdd card-home' : 'card-home'}>
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
        <img src={hero.image.url} alt="" onClick={addToTeam} />
        <div className="details">
          <h2 className="name">{hero.name}</h2>
          <Powerstats hero={hero} />
        </div>
      </div>
    </div>
  );
};

export default HeroHomeCards;
