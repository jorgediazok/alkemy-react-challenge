import React from 'react';
//ICON
import { GrClose } from 'react-icons/gr';
//IMAGE
import Image from '../images/spidy.jpg';
//STYLES
import '../styles/ModalWarning.scss';

//WARNING WHICH TELLS THE USER THAT CANT ADD MORE THAN 6 HEROS

const ModalWarning = ({ closeModalWarning }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModalWarning(false)}>
            <GrClose />
          </button>
        </div>
        <div className="body">
          <img src={Image} alt="" className="spidy" />
          <p className="message">You can add only 6 heros.</p>
        </div>
        <div className="footer">
          <button
            className="btn btn-dark"
            onClick={() => closeModalWarning(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWarning;
