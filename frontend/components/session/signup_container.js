import { connect } from 'react-redux';
import { createUser, clearSessionErrors } from '../../actions/session_actions';
import Signup from './signup';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
  }
};

const mapDispatchToProps = dispatch => ({
  createUser: formUser => dispatch(createUser(formUser)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);