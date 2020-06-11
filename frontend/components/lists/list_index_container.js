import { connect } from 'react-redux';
import BoardIndex from './board_index'
import { fetchLists } from '../../actions/lists_actions'
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.id,
    boardId: parseInt(ownProps.match.params.boardId),
    lists: Object.keys(state.entities.lists).map((id) => state.entities.lists[id])
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchLists: () => dispatch(fetchLists()),
  updateList: (list) => dispatch(updateList(list)),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);