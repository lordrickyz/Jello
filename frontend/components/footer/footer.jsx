import { connect } from 'react-redux';
import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-container">
        <ul>
          <li className="footer-li-1">Portfolio</li>
          <li className="footer-li-2">GitHub</li>
          <li className="footer-li-3">LinkedIn</li>
          <li className="footer-li-4">AngelList</li>
          <li className="footer-li-5">Email</li>
        </ul>

        <div className="footer-div">
          <h1>Jello by Ricky Zheng</h1>
          <a href="https://trello.com">Inspired by Trello</a>
        </div>
      </footer>
    );
  }
}

export default Footer;