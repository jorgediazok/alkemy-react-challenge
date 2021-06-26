import React from 'react';

//ICON
import { GrClose } from 'react-icons/gr';

import '../styles/ModalStats.scss';

const ModalStats = ({ closeModalStats, heros }) => {
  //REDUCE FUNCTIONS
  const combatStats = heros
    .map((hero) => {
      return parseInt(hero.powerstats.combat);
    })
    .reduce((a, b) => a + b);

  const durabilityStats = heros
    .map((hero) => {
      return parseInt(hero.powerstats.durability);
    })
    .reduce((a, b) => a + b);

  const intelligenceStats = heros
    .map((hero) => {
      return parseInt(hero.powerstats.intelligence);
    })
    .reduce((a, b) => a + b);

  const powerStats = heros
    .map((hero) => {
      return parseInt(hero.powerstats.power);
    })
    .reduce((a, b) => a + b);

  const speedStats = heros
    .map((hero) => {
      return parseInt(hero.powerstats.speed);
    })
    .reduce((a, b) => a + b);

  const strengthStats = heros
    .map((hero) => {
      return parseInt(hero.powerstats.strength);
    })
    .reduce((a, b) => a + b);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModalStats(false)}>
            <GrClose />
          </button>
        </div>
        <div className="title">
          <h1>TEAM STATS</h1>
        </div>
        <div className="body">
          <h1>PowerStats</h1>
          <div className="powerstats-container">
            <div
              className="progress"
              style={{ height: '15px', width: '170px' }}>
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: combatStats + '%' }}
                aria-valuenow={combatStats}
                aria-valuemin="0"
                aria-valuemax="100">
                Combat: {combatStats}
              </div>
            </div>
            <div
              className="progress"
              style={{ height: '15px', width: '170px' }}>
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: durabilityStats + '%' }}
                aria-valuenow={durabilityStats}
                aria-valuemin="0"
                aria-valuemax="100">
                Durability: {durabilityStats}
              </div>
            </div>
            <div
              className="progress"
              style={{ height: '15px', width: '170px' }}>
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: intelligenceStats + '%' }}
                aria-valuenow={intelligenceStats}
                aria-valuemin="0"
                aria-valuemax="100">
                Intelligence: {intelligenceStats}
              </div>
            </div>
            <div
              className="progress"
              style={{ height: '15px', width: '170px' }}>
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: powerStats + '%' }}
                aria-valuenow={powerStats}
                aria-valuemin="0"
                aria-valuemax="100">
                Power: {powerStats}
              </div>
            </div>
            <div
              className="progress"
              style={{ height: '15px', width: '170px' }}>
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: speedStats + '%' }}
                aria-valuenow={speedStats}
                aria-valuemin="0"
                aria-valuemax="100">
                Speed: {speedStats}
              </div>
            </div>
            <div
              className="progress"
              style={{ height: '15px', width: '170px' }}>
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: strengthStats + '%' }}
                aria-valuenow={strengthStats}
                aria-valuemin="0"
                aria-valuemax="100">
                Strength: {strengthStats}
              </div>
            </div>
          </div>
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
