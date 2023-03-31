import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword, login } from '../../redux/loginSlice';
import Navbar from '../Navbar/Navbar';

const Login = () => {
  const email = useSelector((state) => state.login.email);
  const password = useSelector((state) => state.login.password);
  const isLoading = useSelector((state) => state.login.isLoading);
  const error = useSelector((state) => state.login.error);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };
  return (
    <div className='bg-login'>
      <Navbar/>
      <div className='bg-form'>
      <form className='login-form' onSubmit={handleSubmit}>
      <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" className="btn btn-primary btn-primary-login" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Log in'}
        </button>
        {error && <div className="alert alert-danger">{error.message}</div>}
        {isLoggedIn && <div className="alert alert-success">You are logged in!</div>}
      </form>
      </div>
    </div>
  );  
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
