import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Auth = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('user');
    console.log(token);
    if (!token) {
      history.push('/login');
    }
  }, [history]);

  return <div>{children}</div>;
};

export default Auth;
