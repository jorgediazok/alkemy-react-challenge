import React, { useState } from 'react';
import axios from 'axios';
import Loading from '../images/loading.gif';

//PROTECTION OF ROUTES
import Auth from './Auth';

//COMPONENTS
import Navbar from '../components/Navbar';
import Search from '../components/Search';
// import HeroSearchCards from '../components/HeroSearchCards';
import HeroHomeCards from '../components/HeroHomeCards';
import '../styles/Home.scss';

//DATA
import data from '../herosNames.json';

const Home = () => {
  //STATES
  const [term, setTerm] = useState('');
  const [heros, setHeros] = useState([]);

  //CALLING TO THE API

  const searchSuperHeros = async () => {
    const response = await axios.get(`http://localhost:5000/${term}`);
    console.log(response);
    if (response && response.data && response.data.results) {
      const newHeros = [...heros, ...response.data.results].reverse();
      setHeros(newHeros);
    }
  };

  //DELETE HERO

  const handleDelete = (e) => {
    let newListOfHeros = heros.filter(
      (hero) => hero.id !== e.target.dataset.id
    );
    setHeros(newListOfHeros);
  };

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
      <Navbar />
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
          heros.map((hero) => (
            <HeroHomeCards
              key={hero.id}
              data={data}
              hero={hero}
              onDelete={handleDelete}
              data-id={hero.id}
            />
          ))}
      </div>
    </Auth>
  );
};

export default Home;
