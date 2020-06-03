import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logoutUser }) => {
  const sessionLinks = () => (
    <nav className="greeting-navbar">
      <div className="greeting-div">

        <div className="greeting-div-left">
          <a>Jello</a>
        </div>

        <div className="greeting-div-right">
          <button className="invis-button"><Link to="/login">Log In</Link></button>
          &nbsp;
          <button><Link to="/signup">Sign Up</Link></button>
        </div>

      </div>
    </nav>
  );
  const loginGreeting = () => (
    <hgroup>
      <h2>Hi, {currentUser.username}!</h2>
      <button onClick={logoutUser}>Log Out</button>
    </hgroup>
  );

  return currentUser ? loginGreeting() : sessionLinks();
};


export default Greeting;
