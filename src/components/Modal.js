import React from 'react';
import '../styles/Modal.scss';

const Modal = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="title">
          <h1>HERO DETAILS</h1>
        </div>
        <div className="body">
          <p>here go the hero details</p>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
