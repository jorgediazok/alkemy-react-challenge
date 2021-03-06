import React, { useState } from 'react';
import axios from 'axios';
import Loading from '../images/loading.gif';

//PROTECTION OF ROUTES
import Auth from '../auth/Auth';

//COMPONENTS
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import HeroHomeCards from '../components/HeroHomeCards';
import ModalWarning from '../components/ModalWarning';
import '../styles/Home.scss';

//DATA
import data from '../data/herosNames.json';

//TOAST
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//TOAST CONFIGURATION
toast.configure();

const Home = () => {
  //STATES
  const [term, setTerm] = useState('');
  const [heros, setHeros] = useState([]);
  const [teamCurrentMembers, setTeamCurrentMembers] = useState([]);
  const [openWarning, setOpenWarning] = useState(false);

  //TOAST FUNCTION
  const notify = () => {
    toast('Hero Added to Team', {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 2000,
    });
  };

  //CALLING TO THE API
  const searchSuperHeros = async () => {
    const response = await axios.get(`http://localhost:5000/${term}`);
    if (response && response.data && response.data.results) {
      const newHeros = [...heros, ...response.data.results].reverse();
      setHeros(newHeros);
    }
  };

  //ADD TO TEAM
  const addToTeam = (e) => {
    if (teamCurrentMembers.length < 6) {
      const newMember = heros.find((hero) => hero.id === e.target.dataset.id);
      setTeamCurrentMembers((teamCurrentMembers) => [
        ...teamCurrentMembers,
        newMember,
      ]);
      notify();
    } else {
      setOpenWarning(true);
    }
  };

  //DELETE FROM TEAM
  const handleDelete = (e) => {
    let newListOfHeros = heros.filter(
      (hero) => hero.id !== e.target.dataset.id
    );
    setHeros(newListOfHeros);
    setTeamCurrentMembers(newListOfHeros);
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
      <Navbar heros={heros} team={teamCurrentMembers} />
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
      {openWarning && <ModalWarning closeModalWarning={setOpenWarning} />}
      <div className="container-cards">
        {heros.length > 0 &&
          heros.map((hero) => (
            <HeroHomeCards
              key={hero.id}
              data={data}
              hero={hero}
              onDelete={handleDelete}
              addToTeam={addToTeam}
              data-id={hero.id}
            />
          ))}
      </div>
    </Auth>
  );
};

export default Home;
