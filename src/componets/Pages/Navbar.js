import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

import logo from '../images/logo.png';
import cart from '../images/images-removebg-preview.png';
import '../Allstyles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  const goTocartpage = () => {
    navigate('/cart'); // Redirect to the cart page
  };

  return (
    <div className="navbar-container">
      <img src={logo} alt="logo" width={120} className="logo-img" />

      <div className="search-container">
        <input className="form-control" placeholder="Search Products" />
        <button className="btn btn-primary">Search</button>
      </div>

      <div className="login-container">Login</div>
      <div onClick={goTocartpage} className="cart-logo-container">
        <img src={cart} alt="logo" width={30} height={30} />
      </div>
    </div>
  );
};

export default Navbar;
