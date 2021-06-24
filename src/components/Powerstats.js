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
          Combat: {data.powerstats.combat + '%'}
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
          Durability: {data.powerstats.durability + '%'}
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
          Intelligence: {data.powerstats.intelligence + '%'}
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
          Power: {data.powerstats.power + '%'}
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
          Speed: {data.powerstats.speed + '%'}
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
          Strength: {data.powerstats.strength + '%'}
        </div>
      </div>
    </div>
  );
};

export default Powerstats;
