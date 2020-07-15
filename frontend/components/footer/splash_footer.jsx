import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faUserCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faAngellist, faLinkedin, faTrello, } from '@fortawesome/free-brands-svg-icons';


class SplashFoot extends React.Component {
  render() {
    return (
      <footer className="footer-container-splash">
        <ul>
          <li className="footer-li-1"><a href="https://github.com/lordrickyz" target="_blank"><FontAwesomeIcon icon={faGithub} />GitHub</a></li>
          <li className="footer-li-2"><a href="https://www.linkedin.com/in/rickyzhengs/" target="_blank"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</a></li>
          <li className="footer-li-3"><a href="https://angel.co/u/zheng-ricky" target="_blank"><FontAwesomeIcon icon={faAngellist} />AngelList</a></li>
          <li className="footer-li-4"><a href="https://lordrickyz.github.io/" target="_blank"><FontAwesomeIcon icon={faUserCircle} />Portfolio</a></li>
          <li className="footer-li-5"><a href="mailto:rickyzheng@ymail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} />Email</a></li>
        </ul>

        <div className="footer-div">
          <h1><FontAwesomeIcon icon={faAt} />Ricky Zheng</h1>
          <a href="https://trello.com" target="_blank">Inspired by <FontAwesomeIcon icon={faTrello} />Trello</a>
        </div>
      </footer>
    );
  }
}

export default SplashFoot;