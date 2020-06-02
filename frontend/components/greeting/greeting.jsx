import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logoutUser }) => {
  const sessionLinks = () => (
    <nav>
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
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
