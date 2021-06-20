import React, { useState, useEffect } from 'react';
import Auth from './Auth';
import axios from 'axios';
import Loading from '../images/loading.gif';
import '../styles/Home.scss';

//Components
//import Navbar from '../components/Navbar';

const Home = () => {
  const [hero, setHero] = useState('');

  useEffect(() => {
    const fetchSuperhero = async (id) => {
      const res = await axios.get(`http://localhost:5000/${id}`);
      const data = await res.data;
      setHero(data);
    };

    fetchSuperhero(211);
  }, []);

  console.log(hero);

  if (!hero) {
    return (
      <div className="loading-container">
        <img src={Loading} alt="" className="loading"></img>
      </div>
    );
  }

  return (
    <Auth>
      <div>
        <img src={hero.image.url} alt="" />
        <input type="text" />
      </div>
    </Auth>
  );
};

export default Home;
