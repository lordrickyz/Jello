import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';
import Login from './login';

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(loginUser(formUser)),
});

export default connect(null, mapDispatchToProps)(Login);