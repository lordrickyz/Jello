import React from 'react';
import { Link } from 'react-router-dom';
import jello from 'images/pudding.svg';

const Navbar = ({ currentUser, logoutUser }) => {
  const display = currentUser ? (
    <div className="navbar-welcome">
      <span>Welcome {currentUser.username}!</span>
      &nbsp;
      <button onClick={logoutUser}>Logout</button>
    </div>
  ) : (
      <div className="navbar-links">
        <Link to="/login" className="navbar-btn">Log In</Link>
        &nbsp;
        <Link to="/signup" className="navbar-btn">Sign Up</Link>
        &nbsp;
        <Link to="/" className="navbar-btn">Demo</Link>
      </div>
    );
  return (
    <header className="navbar-container">
      <nav className="navbar-nav">
        <Link to='/' className="navbar-logo">
          <img src={jello} alt="logo jello" />
          <text>Jello</text>
        </Link>
        {display}
      </nav>
    </header>
  )
}

export default Navbar;
