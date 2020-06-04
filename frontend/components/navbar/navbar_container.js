import { connect } from 'react-redux';
import Navbar from './navbar';
import { logoutUser, loginDemo } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id],
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
  loginDemo: () => dispatch(loginDemo())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);