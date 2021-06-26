//STYLES
import '../styles/HeroSearchCards.scss';

const HeroSearchCards = ({ data }) => {
  return (
    <div>
      <div>
        <div className="card-buttons">
          <button className="btn btn-dark card-button-add">+</button>
        </div>
        <img src={data.image.url} alt="" />
        <div className="details">
          <h2 className="name">{data.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSearchCards;
