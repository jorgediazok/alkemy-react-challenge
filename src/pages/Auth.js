import React from 'react';
import Image from '../images/hero1.jpg';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import '../styles/Auth.scss';

const Auth = () => {
  return (
    <section className="login py-5 bg-light">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-5 col-md-5 col-sm-12 col-12">
            <img src={Image} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-7 com-md-7 com-sm-12 col-12 text-center py-5">
            <h1 className="animate__animated animate__zoomInDown animate__delay-0.7s">
              Choose your SuperHeros
            </h1>
            <form>
              <div className="form-row pt-5">
                <div className="offset-1 col-lg-10">
                  <input
                    type="email"
                    placeholder="Email"
                    className="input-email my-3 px-3"
                  />
                </div>
              </div>
              <div className="form-row pt-3">
                <div className="offset-1 col-lg-10">
                  <input
                    type="password"
                    placeholder="Password"
                    className="input-password px-3"
                  />
                </div>
              </div>
              <div className="form-row pt-4 pb-3">
                <div className="offset-1 col-lg-10">
                  <button className="btn-login mt-3">LOGIN</button>
                </div>
              </div>
            </form>
            <p>Or Login With</p>
            <span>
              <FaFacebook className="fa-facebook" />
            </span>
            <span>
              <FcGoogle className="fa-google" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
