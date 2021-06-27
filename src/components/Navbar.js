import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

//STYLES
import '../styles/Navbar.scss';

//COMPONENTS
import ModalStats from './ModalStats';

const Navbar = ({ heros, team }) => {
  //STATES AND ROUTING
  const [openModalStats, setOpenModalStats] = useState(false);
  const history = useHistory();

  //FUNCTION TO LOGOUT
  const logout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <>
      {openModalStats && (
        <ModalStats
          closeModalStats={setOpenModalStats}
          heros={heros}
          team={team}
        />
      )}
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <button
            className="btn btn-danger btn-nav my-2 my-sm-0"
            type="button"
            onClick={() => setOpenModalStats(true)}>
            Team Stats
          </button>
          <button
            className="btn btn-dark btn-nav my-2 my-sm-0"
            type="submit"
            onClick={logout}>
            Logout
          </button>
        </form>
      </nav>
    </>
  );
};

export default Navbar;
