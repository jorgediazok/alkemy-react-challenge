import React from 'react';

//ICON
import { GrClose } from 'react-icons/gr';

import '../styles/ModalStats.scss';

const ModalStats = ({ closeModalStats }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModalStats(false)}>
            <GrClose />
          </button>
        </div>
        <div className="title">
          <h1>STATS</h1>
        </div>
        <div className="body">
          <p>HELLO</p>
        </div>
        <div className="footer">
          <button
            className="btn btn-dark"
            onClick={() => closeModalStats(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalStats;
