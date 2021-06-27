import React from 'react';

//STYLES
import '../styles/PowerStats.scss';

//POWERSTATS OF THE CARD

const Powerstats = ({ hero }) => {
  return (
    <div className="powerstats-container">
      <span className="span-progress">Combat</span>
      <div className="progress" style={{ height: '13px', width: '130px' }}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: hero.powerstats.combat + '%' }}
          aria-valuenow={hero.powerstats.combat}
          aria-valuemin="0"
          aria-valuemax="100">
          {hero.powerstats.combat + '%'}
        </div>
      </div>

      <span className="span-progress">Durability</span>
      <div className="progress" style={{ height: '13px', width: '130px' }}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: hero.powerstats.durability + '%' }}
          aria-valuenow={hero.powerstats.durability}
          aria-valuemin="0"
          aria-valuemax="100">
          {hero.powerstats.durability + '%'}
        </div>
      </div>

      <span className="span-progress">Intelligence</span>
      <div className="progress" style={{ height: '13px', width: '130px' }}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: hero.powerstats.intelligence + '%' }}
          aria-valuenow={hero.powerstats.intelligence}
          aria-valuemin="0"
          aria-valuemax="100">
          {hero.powerstats.intelligence + '%'}
        </div>
      </div>

      <span className="span-progress">Power</span>
      <div className="progress" style={{ height: '13px', width: '130px' }}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: hero.powerstats.power + '%' }}
          aria-valuenow={hero.powerstats.power}
          aria-valuemin="0"
          aria-valuemax="100">
          {hero.powerstats.power + '%'}
        </div>
      </div>

      <span className="span-progress">Speed</span>
      <div className="progress" style={{ height: '13px', width: '130px' }}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: hero.powerstats.speed + '%' }}
          aria-valuenow={hero.powerstats.speed}
          aria-valuemin="0"
          aria-valuemax="100">
          {hero.powerstats.speed + '%'}
        </div>
      </div>

      <span className="span-progress">Strength</span>
      <div className="progress" style={{ height: '13px', width: '130px' }}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: hero.powerstats.strength + '%' }}
          aria-valuenow={hero.powerstats.strength}
          aria-valuemin="0"
          aria-valuemax="100">
          {hero.powerstats.strength + '%'}
        </div>
      </div>
    </div>
  );
};

export default Powerstats;
