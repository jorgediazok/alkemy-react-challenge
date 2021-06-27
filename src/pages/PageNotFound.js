import React from 'react';
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
      <div className="notFound_container">
        <div className="notFound_objects">
          <h1 className="notFound_title">HEY YOU! GET OUT OF HERE!</h1>
          <img src={Image} alt="" className="notFound_image" />
          <button className="btn btn-dark goHome" onClick={goHome}>
            HOME
          </button>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
