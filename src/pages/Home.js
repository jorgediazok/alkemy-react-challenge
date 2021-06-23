import React, { useState } from 'react';
import axios from 'axios';
import Loading from '../images/loading.gif';

//PROTECTION OF ROUTES
import Auth from './Auth';

//COMPONENTS
import Search from '../components/Search';
import '../styles/Home.scss';
import HeroCard from '../components/HeroCard';

//DATA
import data from '../herosNames.json';

const Home = () => {
  //STATES
  const [term, setTerm] = useState('');
  const [heros, setHeros] = useState([]);

  //CALLING TO THE API

  const searchSuperHeros = async () => {
    const hero = await axios.get(`http://localhost:5000/${term}`);
    if (hero) {
      const newHeros = [...heros, hero];
      console.log(newHeros);
      setHeros(newHeros);
    }
  };

  console.log(heros);

  //LOADING
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
          heros.map((hero, index) => (
            <HeroCard hero={hero} key={index} index={index} />
          ))}
      </div>
    </Auth>
  );
};

export default Home;
