import { connect } from 'react-redux';
import Splash from './splash';
import { loginDemo } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
})

const mapDispatchToProps = (dispatch) => ({
    loginDemo: () => dispatch(loginDemo())
})

export default connect(mapStateToProps, mapDispatchToProps)(Splash);