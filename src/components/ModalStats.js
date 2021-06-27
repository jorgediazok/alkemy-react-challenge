import React from 'react';

//ICON
import { GrClose } from 'react-icons/gr';

//IMAGE
import Image from '../images/batman.jpg';

//STYLES
import '../styles/ModalStats.scss';

const ModalStats = ({ closeModalStats, team }) => {
  //REDUCE FUNCTIONS

  const combatStats =
    team.length > 0
      ? team
          .map((hero) => {
            return parseInt(hero.powerstats.combat);
          })
          .reduce((a, b) => a + b)
      : '';

  const durabilityStats =
    team.length > 0
      ? team
          .map((hero) => {
            return parseInt(hero.powerstats.durability);
          })
          .reduce((a, b) => a + b)
      : '';

  const intelligenceStats =
    team.length > 0
      ? team
          .map((hero) => {
            return parseInt(hero.powerstats.intelligence);
          })
          .reduce((a, b) => a + b)
      : '';

  const powerStats =
    team.length > 0
      ? team
          .map((hero) => {
            return parseInt(hero.powerstats.power);
          })
          .reduce((a, b) => a + b)
      : '';

  const speedStats =
    team.length > 0
      ? team
          .map((hero) => {
            return parseInt(hero.powerstats.speed);
          })
          .reduce((a, b) => a + b)
      : '';

  const strengthStats =
    team.length > 0
      ? team
          .map((hero) => {
            return parseInt(hero.powerstats.strength);
          })
          .reduce((a, b) => a + b)
      : '';

  const heightStats =
    team.length > 0
      ? team
          .map((hero) => {
            return parseInt(hero.appearance.height[1]) / team.length;
          })
          .reduce((a, b) => a + b)
      : '';

  const weightStats =
    team.length > 0
      ? team
          .map((hero) => {
            return parseInt(hero.appearance.weight[1]) / team.length;
          })
          .reduce((a, b) => a + b)
      : '';

  // let arrayOfStats = [
  //   combatStats,
  //   durabilityStats,
  //   intelligenceStats,
  //   powerStats,
  //   speedStats,
  //   strengthStats,
  // ];

  // console.log(arrayOfStats.sort((a, b) => a + b));

  console.log(team);

  return (
    <>
      {team.length === 0 ? (
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
            <div className="body-nostats">
              <img src={Image} alt="" className="batmi" />
              <p className="nostats-message">
                No Stats so far. Plese add a Hero.
              </p>
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
      ) : (
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
              <h1 className="height">Height Average</h1>
              <p>{heightStats.toFixed(2)} Centimeters</p>
              <h1 className="weight">Weight Average</h1>
              <p>{weightStats.toFixed(2)} Kilograms</p>
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
      )}
    </>
  );
};

export default ModalStats;
