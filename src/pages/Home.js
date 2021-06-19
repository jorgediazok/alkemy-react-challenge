import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Home.scss';

const Home = () => {
  const [hero, setHero] = useState('');

  useEffect(() => {
    const fetchSuperhero = async (id) => {
      const res = await axios.get(`http://localhost:5000/${id}`);
      const data = await res.data;
      setHero(data);
    };

    fetchSuperhero(242);
  }, []);

  console.log(hero);

  if (!hero) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <img src={hero.image.url} alt="" />
    </div>
  );
};

export default Home;
