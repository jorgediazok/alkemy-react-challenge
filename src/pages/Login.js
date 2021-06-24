import React, { useState } from 'react';

//FOR API CALL
import axios from 'axios';

//ROUTING
import { useHistory } from 'react-router';

//FORMIK
import { useFormik } from 'formik';
import * as yup from 'yup';

//IMAGE OF LOGIN CONTAINER
import Image from '../images/hero1.jpg';

//ICONS
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

//STYLES
import '../styles/Auth.scss';

//TOAST
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//VALIDATIONS
const validationSchema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid Email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

//TOAST CONFIGURATION

toast.configure();

const Login = () => {
  const history = useHistory();
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const notify = () => {
    toast('Login Succesful', { position: toast.POSITION.TOP_RIGHT });
  };

  //MAKE REQUEST TO ALKEMY TO GET ACCESS TOKEN

  const onSubmit = async (values, actions) => {
    const { ...data } = values;

    const response = await axios
      .post('http://challenge-react.alkemy.org/', data)
      .catch((err) => {
        if (err && err.response)
          setError('Invalid Credentials', err.response.data.message);

        setSuccess(null);
      });

    if (response && response.data) {
      const token = response.data;
      setError(null);
      setSuccess(response.data.message);
      localStorage.setItem('user', JSON.stringify(token));
      formik.resetForm();
      history.push('/');
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema,
  });

  return (
    <section className="login py-5">
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
              <div className="form-row pt-4">
                {!error && success ? success : ''}
                {!success && error ? error : ''}
                <div className="offset-1 col-lg-10">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="input-email my-3 px-3"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="form-error">{formik.errors.email}</div>
                  ) : null}
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
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className="input-password px-3"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="form-error">{formik.errors.password}</div>
                  ) : null}
                </div>
              </div>
              <div className="form-row pt-4 pb-3">
                <div className="offset-1 col-lg-10">
                  <button
                    className="btn-login mt-3"
                    type="submit"
                    disabled={!formik.isValid}
                    onClick={notify}>
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

export default Login;
