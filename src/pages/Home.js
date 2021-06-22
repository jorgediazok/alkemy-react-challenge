import React, { useState } from 'react';
import axios from 'axios';
import Auth from './Auth';
import Search from '../components/Search';
import data from '../herosNames.json';
import '../styles/Home.scss';
import HeroCard from '../components/HeroCard';

const Home = () => {
  //STATES
  const [heros, setHeros] = useState([]);
  const [term, setTerm] = useState('');

  //CALLING TO THE API

  const searchSuperHeros = async () => {
    const hero = await axios.get(`http://localhost:5000/${term}`);
    console.log(hero);
    if (hero) {
      const newHeros = [...heros, hero];
      setHeros(newHeros);
      setTerm('');
    }
  };

  return (
    <Auth>
      <div className="search-container">
        <h1 className="search-title">Create your Hero's team</h1>
        <Search
          data={data}
          searchSuperHeros={searchSuperHeros}
          term={term}
          setTerm={setTerm}
          heros={heros}
        />
      </div>
      <div className="container-cards">
        {heros.length > 0 &&
          heros.map((hero, i) => <HeroCard hero={hero} key={i} />)}
      </div>
    </Auth>
  );
};

export default Home;
