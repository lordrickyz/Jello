import { connect } from 'react-redux';

import { openModal, closeModal } from '../../../actions/modal_actions';
import BoardNav from './board_nav';

const mapStateToProps = (state) => ({
  modal: state.ui.modal,
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardNav);