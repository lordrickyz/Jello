import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/session_actions'

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
      <li>Profile and Visibility</li>
      <li>Activity</li>
      <li>Cards</li>
      <li>Settings</li>
      <hr />
      <li>Help</li>
      <li>Shortcuts</li>
      <li>Change Language...</li>
      <hr />
      <li id={"logout-btn"} onClick={props.logoutUser}>Logout</li>
    </ul>
  )
}

export default connect(msp, mdp)(UserMenu)