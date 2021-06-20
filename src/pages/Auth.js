import React, { useState } from 'react';
import { useFormik } from 'formik';
import Image from '../images/hero1.jpg';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

//STYLES
import '../styles/Auth.scss';

//FORMIK FUNCTIONS

const initialValues = {
  email: '',
  password: '',
};

const onSubmit = (values) => {
  console.log('Form Data', values);
};

const validate = (values) => {
  //values.email//values.password
  let errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid Email Format';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

const Auth = () => {
  //const [isLogged, setIsLogged] = useState(false);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

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
            <form onSubmit={formik.handleSubmit}>
              <div className="form-row pt-5">
                <div className="offset-1 col-lg-10">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="input-email my-3 px-3"
                  />
                </div>
              </div>
              <div className="form-row pt-3">
                <div className="offset-1 col-lg-10">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="input-password px-3"
                  />
                </div>
              </div>
              <div className="form-row pt-4 pb-3">
                <div className="offset-1 col-lg-10">
                  <button className="btn-login mt-3" type="submit">
                    LOGIN
                  </button>
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
