import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';


class SessionFoot extends React.Component {
  render() {
    return (
      <div className="footer-container-session">
       
          <div className="footer-div-session">
            <h1><FontAwesomeIcon icon={faAt} />Ricky Zheng</h1>
          </div>

          <ul>
            <li className="footer-li-1"><a href="https://github.com/lordrickyz"><FontAwesomeIcon icon={faGithub} />GitHub</a></li>
            <li className="footer-li-2"><a href="https://www.linkedin.com/in/rickyzhengs/"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</a></li>
            <li className="footer-li-4"><a href=""><FontAwesomeIcon icon={faUserCircle} />Portfolio</a></li>
          </ul>

      </div>
    );
  }
}

export default SessionFoot;