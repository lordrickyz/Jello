import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/session_actions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
}

const mdp = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  }
}

const UserMenu = (props) => {
  let username;
  let email;
  if (props.currentUser) {
    username = props.currentUser.username;
    email = props.currentUser.email;
  }
  return (
    <ul className="user-options">
      <li id={"user-options-title"}>{username} ({email})</li>
      <hr />
        <li>
          <a href="https://github.com/lordrickyz"><FontAwesomeIcon icon={faGithub} id={"user-link-svg"}/>GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rickyzhengs/"><FontAwesomeIcon icon={faLinkedin} id={"user-link-svg"}/>LinkedIn</a>
        </li>
        <li>
          <a href="https://lordrickyz.github.io/"><FontAwesomeIcon icon={faUser} id={"user-link-svg"}/>Portfolio</a>
        </li>
      <hr />
      <li id={"logout-btn"} onClick={props.logoutUser}>Logout</li>
    </ul>
  )
}

export default connect(msp, mdp)(UserMenu)