import React from 'react';

//ICON
import { GrClose } from 'react-icons/gr';

//STYLES
import '../styles/ModalInfo.scss';

//MODAL TO GET THE INFO OF THE HERO

const ModalInfo = ({ closeModal, hero }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}>
            <GrClose />
          </button>
        </div>
        <div className="title">
          <h1>{hero.name}</h1>
        </div>
        <div className="body">
          <p>
            Full Name: <span>{hero.biography['full-name']}</span>
          </p>
          <p>
            Aliases: <span>{hero.biography.aliases.join('/')}</span>
          </p>
          <p>
            Weight: <span>{hero.appearance.weight[1]}</span>
          </p>
          <p>
            Height: <span>{hero.appearance.height[1]}</span>
          </p>
          <p>
            Eye Color: <span>{hero.appearance['eye-color']}</span>
          </p>
          <p>
            Hair Color: <span>{hero.appearance['hair-color']}</span>
          </p>
          <p>
            Work Place: <span>{hero.work.base}</span>
          </p>
        </div>
        <div className="footer">
          <button className="btn btn-dark" onClick={() => closeModal(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
