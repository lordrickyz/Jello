import { connect } from 'react-redux';
import Splash from './splash';
// import SplashFix from './splash_fix';
import { loginDemo } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
    loginDemo: () => dispatch(loginDemo())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);