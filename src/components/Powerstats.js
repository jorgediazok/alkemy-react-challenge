import React from 'react';

//STYLES
import '../styles/PowerStats.scss';

const Powerstats = ({ data }) => {
  return (
    <div className="powerstats-container">
      <div className="progress" style={{ height: '15px', width: '180px' }}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: data.powerstats.combat + '%' }}
          aria-valuenow={data.powerstats.combat}
          aria-valuemin="0"
          aria-valuemax="100">
          Combat
        </div>
      </div>

      <div className="progress" style={{ height: '15px', width: '180px' }}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: data.powerstats.durability + '%' }}
          aria-valuenow={data.powerstats.durability}
          aria-valuemin="0"
          aria-valuemax="100">
          Durability
        </div>
      </div>

      <div className="progress" style={{ height: '15px', width: '180px' }}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: data.powerstats.intelligence + '%' }}
          aria-valuenow={data.powerstats.intelligence}
          aria-valuemin="0"
          aria-valuemax="100">
          Intelligence
        </div>
      </div>

      <div className="progress" style={{ height: '15px', width: '180px' }}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: data.powerstats.power + '%' }}
          aria-valuenow={data.powerstats.power}
          aria-valuemin="0"
          aria-valuemax="100">
          Power
        </div>
      </div>

      <div className="progress" style={{ height: '15px', width: '180px' }}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: data.powerstats.speed + '%' }}
          aria-valuenow={data.powerstats.speed}
          aria-valuemin="0"
          aria-valuemax="100">
          Speed
        </div>
      </div>

      <div className="progress" style={{ height: '15px', width: '180px' }}>
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: data.powerstats.strength + '%' }}
          aria-valuenow={data.powerstats.strength}
          aria-valuemin="0"
          aria-valuemax="100">
          Strength
        </div>
      </div>
    </div>
  );
};

export default Powerstats;
