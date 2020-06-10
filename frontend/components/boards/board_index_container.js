import { connect } from 'react-redux';
import BoardIndex from './board_index'
import { fetchBoards } from '../../actions/board_actions'
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.id,
    boards: Object.keys(state.entities.boards).map((id) => state.entities.boards[id])
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchBoards: () => dispatch(fetchBoards()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);