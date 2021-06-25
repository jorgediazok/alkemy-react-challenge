import React, { useState } from 'react';

//COMPONENTS
import Modal from '../components/Modal';

//STYLES
import '../styles/HeroSearchCards.scss';

const HeroSearchCards = ({ data }) => {
  const [isActive, setActive] = useState(false);
  const [teamCurrentMembers, setTeamCurrentMembers] = useState([]);

  const addToTeam = () => {
    setActive(!isActive);
    if (data && !isActive) {
      const newTeamHero = [...teamCurrentMembers, data];
      setTeamCurrentMembers(newTeamHero);
      if (teamCurrentMembers.length === 2) {
        alert('STOP');
        //SHOWMODAL ACA CUANDO LLEGA AL LENGTH DE 6 CON CANCELAR Y ACEPTAR
      }
    } else {
      console.log('NO AGREGUE NADA');
    }
  };

  return (
    <div>
      <div className={isActive ? 'borderAdd card' : 'card'}>
        <div className="card-buttons">
          <button className="btn btn-dark card-button-add" onClick={addToTeam}>
            +
          </button>
        </div>
        <img src={data.image.url} alt="" />
        <div className="details">
          <h2 className="name">{data.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSearchCards;
