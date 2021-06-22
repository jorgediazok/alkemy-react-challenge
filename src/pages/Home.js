import React, { useState } from 'react';
import Auth from './Auth';
import axios from 'axios';
import Loading from '../images/loading.gif';
import debounce from 'lodash.debounce';
import '../styles/Home.scss';
import HeroCard from '../components/HeroCard';

const Home = () => {
  const [term, setTerm] = useState('');
  const [heros, setHeros] = useState([]);

  const searchSuperHeros = async () => {
    const hero = await axios.get(`http://localhost:5000/${term}`);
    console.log(hero);
    if (hero) {
      const newHeros = [...heros, hero];
      setHeros(newHeros);
      setTerm('');
    }
  };

  const handleTerm = debounce((text) => {
    setTerm(text);
  }, 500);

  const handleSubmit = (e, term) => {
    e.preventDefault();
    searchSuperHeros(term);
    setTerm('');
  };

  console.log(heros);

  if (!heros) {
    return (
      <div className="loading-container">
        <img src={Loading} alt="" className="loading"></img>
      </div>
    );
  }

  return (
    <Auth>
      <div className="search-container">
        <h1 className="search-title">Create your Hero's team</h1>
        <div className="search-container-input">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="search-input"
              placeholder="Search Hero ... "
              autoFocus
              onChange={(e) => handleTerm(e.target.value)}
            />
          </form>
          <div
            className="fa fa-search search-icon"
            onClick={() => searchSuperHeros(term)}></div>
        </div>
        <div className="search-result">
          {heros.length > 0 &&
            heros.map((hero, i) => (
              <p className="search-item" key={i}>
                {hero.data.results[0].name}
              </p>
            ))}
        </div>
      </div>
      <div className="container-cards">
        {heros.length > 0 &&
          heros.map((hero, i) => <HeroCard hero={hero} key={i} />)}
      </div>
    </Auth>
  );
};

export default Home;
