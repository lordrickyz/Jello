import { connect } from 'react-redux';
import Splash from './splash';
import { loginDemo } from '../../actions/session_actions';

const mapStateToProps = ( state ) => ({
    loggedIn: Boolean(state.session.id),
})

const mapDispatchToProps = (dispatch) => ({
    loginDemo: () => dispatch(loginDemo())
})

const ConnectedSplash = connect(mapStateToProps, mapDispatchToProps)(Splash);

export default ConnectedSplash;