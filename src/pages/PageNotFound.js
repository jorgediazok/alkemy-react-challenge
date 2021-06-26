import React from 'react';
import Navbar from '../components/Navbar';
import Image from '../images/spider.jpg';
import { useHistory } from 'react-router-dom';
import '../styles/PageNotFound.scss';

const PageNotFound = () => {
  const history = useHistory();

  const goHome = () => {
    history.push('/');
  };

  return (
    <>
      <Navbar />
      <div className="notFound_container">
        <div className="notFound_objects">
          <h1>HEY YOU! 4-0-4</h1>
          <img src={Image} alt="" className="notFound_image" />
          <h1>PAGE NOT FOUND</h1>
          <button className="btn btn-dark goHome" onClick={goHome}>
            HOME
          </button>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
