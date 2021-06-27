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
          .reduce((a, b) => a + b) / team.length
      : '';

  const durabilityStats =
    team.length > 0
      ? team
          .map((hero) => {
            return parseInt(hero.powerstats.durability);
          })
          .reduce((a, b) => a + b) / team.length
      : '';

  const intelligenceStats =
    team.length > 0
      ? team
          .map((hero) => {
            return parseInt(hero.powerstats.intelligence);
          })
          .reduce((a, b) => a + b) / team.length
      : '';

  const powerStats =
    team.length > 0
      ? team
          .map((hero) => {
            return parseInt(hero.powerstats.power);
          })
          .reduce((a, b) => a + b) / team.length
      : '';

  const speedStats =
    team.length > 0
      ? team
          .map((hero) => {
            return parseInt(hero.powerstats.speed);
          })
          .reduce((a, b) => a + b) / team.length
      : '';

  const strengthStats =
    team.length > 0
      ? team
          .map((hero) => {
            return parseInt(hero.powerstats.strength);
          })
          .reduce((a, b) => a + b) / team.length
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
              <div className="powerstats-container">
                <span className="span-progress">Combat</span>
                <div
                  className="progress"
                  style={{ height: '14px', width: '170px' }}>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: combatStats + '%' }}
                    aria-valuenow={combatStats}
                    aria-valuemin="0"
                    aria-valuemax="100">
                    {Math.round(combatStats)} %
                  </div>
                </div>
                <span className="span-progress">Durability</span>
                <div
                  className="progress"
                  style={{ height: '14px', width: '170px' }}>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: durabilityStats + '%' }}
                    aria-valuenow={durabilityStats}
                    aria-valuemin="0"
                    aria-valuemax="100">
                    {Math.round(durabilityStats)} %
                  </div>
                </div>
                <span className="span-progress">Intelligence</span>
                <div
                  className="progress"
                  style={{ height: '14px', width: '170px' }}>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: intelligenceStats + '%' }}
                    aria-valuenow={intelligenceStats}
                    aria-valuemin="0"
                    aria-valuemax="100">
                    {Math.round(intelligenceStats)} %
                  </div>
                </div>

                <span className="span-progress">Power</span>
                <div
                  className="progress"
                  style={{ height: '14px', width: '170px' }}>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: powerStats + '%' }}
                    aria-valuenow={powerStats}
                    aria-valuemin="0"
                    aria-valuemax="100">
                    {Math.round(powerStats)} %
                  </div>
                </div>

                <span className="span-progress">Speed</span>
                <div
                  className="progress"
                  style={{ height: '14px', width: '170px' }}>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: speedStats + '%' }}
                    aria-valuenow={speedStats}
                    aria-valuemin="0"
                    aria-valuemax="100">
                    {Math.round(speedStats)} %
                  </div>
                </div>

                <span className="span-progress">Strength</span>
                <div
                  className="progress"
                  style={{ height: '14px', width: '170px' }}>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: strengthStats + '%' }}
                    aria-valuenow={strengthStats}
                    aria-valuemin="0"
                    aria-valuemax="100">
                    {Math.round(strengthStats)} %
                  </div>
                </div>
              </div>
              <div className="container-height-weight">
                <h1 className="height">
                  Height: <span>{heightStats.toFixed(2)} Cms.</span>
                </h1>
                <h1 className="weight">
                  Weight: <span>{weightStats.toFixed(2)} Kgs.</span>
                </h1>
              </div>
            </div>

            <div className="footer">
              <button
                className="btn btn-dark btn-footer"
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
