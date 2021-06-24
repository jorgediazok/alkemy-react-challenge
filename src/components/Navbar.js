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
    <nav className="navbar navbar-light bg-light justify-content-end navbar-collapse">
      <form className="form-inline">
        <button
          className="btn btn-dark btn-nav m-4 my-2 my-sm-0"
          type="submit"
          onClick={logout}>
          Logout
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
