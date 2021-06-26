import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar = () => {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline">
        <button
          className="btn btn-danger btn-nav my-2 my-sm-0"
          type="submit"
          onClick={logout}>
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
  );
};

export default Navbar;
