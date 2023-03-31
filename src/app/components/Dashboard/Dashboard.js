import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginPopup from '../Popup/LoginPopup';

const Dashboard = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="row my-5" style={{ backgroundImage: 'url(https://via.placeholder.com/1200x800)', backgroundSize: 'cover' }}>
      <div className="col-md-6 py-5">
        <h1 className="mb-4">Welcome to Sales Forge</h1>
        <p className="lead mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae fringilla dolor.
        </p>
        <ul className="mb-4">
          <li>Access to a range of POS services</li>
          <li>Easy and convenient registration process</li>
          <li>24/7 support</li>
        </ul>
        <button className="btn btn-primary btn-lg" onClick={handleButtonClick}>Sign Up Now</button>
        {showPopup && <LoginPopup onClose={handlePopupClose} />}
      </div>
      <div className="col-md-6"></div>
    </div>
  );
};


Dashboard.propTypes = {};

Dashboard.defaultProps = {};


export default Dashboard;
