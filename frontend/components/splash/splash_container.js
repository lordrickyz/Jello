import { connect } from 'react-redux';
import Splash from './splash';
import { loginDemo } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.id),
});

const mapDispatchToProps = (dispatch) => ({
    loginDemo: () => dispatch(loginDemo())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);