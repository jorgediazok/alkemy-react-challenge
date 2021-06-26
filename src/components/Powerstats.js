import React from 'react';

//STYLES
import '../styles/PowerStats.scss';

const Powerstats = ({ hero }) => {
  return (
    <div className="powerstats-container">
      <div className="progress" style={{ height: '15px', width: '170px' }}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: hero.powerstats.combat + '%' }}
          aria-valuenow={hero.powerstats.combat}
          aria-valuemin="0"
          aria-valuemax="100">
          Combat: {hero.powerstats.combat + '%'}
        </div>
      </div>

      <div className="progress" style={{ height: '15px', width: '170px' }}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: hero.powerstats.durability + '%' }}
          aria-valuenow={hero.powerstats.durability}
          aria-valuemin="0"
          aria-valuemax="100">
          Durability: {hero.powerstats.durability + '%'}
        </div>
      </div>

      <div className="progress" style={{ height: '15px', width: '170px' }}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: hero.powerstats.intelligence + '%' }}
          aria-valuenow={hero.powerstats.intelligence}
          aria-valuemin="0"
          aria-valuemax="100">
          Intelligence: {hero.powerstats.intelligence + '%'}
        </div>
      </div>

      <div className="progress" style={{ height: '15px', width: '170px' }}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: hero.powerstats.power + '%' }}
          aria-valuenow={hero.powerstats.power}
          aria-valuemin="0"
          aria-valuemax="100">
          Power: {hero.powerstats.power + '%'}
        </div>
      </div>

      <div className="progress" style={{ height: '15px', width: '170px' }}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: hero.powerstats.speed + '%' }}
          aria-valuenow={hero.powerstats.speed}
          aria-valuemin="0"
          aria-valuemax="100">
          Speed: {hero.powerstats.speed + '%'}
        </div>
      </div>

      <div className="progress" style={{ height: '15px', width: '170px' }}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: hero.powerstats.strength + '%' }}
          aria-valuenow={hero.powerstats.strength}
          aria-valuemin="0"
          aria-valuemax="100">
          Strength: {hero.powerstats.strength + '%'}
        </div>
      </div>
    </div>
  );
};

export default Powerstats;
