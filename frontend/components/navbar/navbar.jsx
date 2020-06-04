import React from 'react';
import { Link } from 'react-router-dom';
import jello from 'images/pudding.svg';

const Navbar = ({ currentUser, logoutUser, loginDemo }) => {

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
        <Link to="/" className="navbar-btn" onClick={loginDemo}>Demo</Link>
      </div>
    );

  return (
    <header className="navbar-container">
      <nav className="navbar-nav">
        <Link to='/' className="navbar-logo">
          <img src={window.puddingIcon} alt="logo jello" />
          <h2>Jello</h2>
        </Link>
        {display}
      </nav>
    </header>
  )
}

export default Navbar;
