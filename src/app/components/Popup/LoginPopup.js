import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import './popup.css';
import { createUser, resetUserState } from '../../redux/userSlice';

const LoginPopup = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate ();

  const { isLoading, error, isSuccess } = useSelector((state) => state.user);

  useEffect(() => {
    if (isSuccess) {
      navigate('/login');
      dispatch(resetUserState());
    }
  }, [isSuccess, navigate, dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    } else {
      setPasswordError('');
      dispatch(createUser(email, password));
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Sign Up Now</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <InputGroup.Text>@</InputGroup.Text>
              <FormControl
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <FormControl
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <FormControl
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </Form.Group>
          {passwordError && <p className="popup-error">{passwordError}</p>}
          <button
            id="popup-btn-primary"
            className="btn btn-primary"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
          <button
            id="popup-btn-secondary"
            className="btn btn-secondary"
            onClick={handleCancel}
            disabled={isLoading}
          >
            Cancel
          </button>

          {error && <p className="popup-error">{error}</p>}
        </Form>
      </div>
    </div>
  );
};

LoginPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default LoginPopup;