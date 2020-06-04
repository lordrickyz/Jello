import { connect } from 'react-redux';
import { loginUser, clearSessionErrors, loginDemo } from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
});

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(loginUser(formUser)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  loginDemo: () => dispatch(loginDemo())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);