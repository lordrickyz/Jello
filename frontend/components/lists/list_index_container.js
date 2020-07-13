import { connect } from 'react-redux';
import ListIndex from './list_index'
import { fetchLists } from '../../actions/lists_actions'
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.id,
    boardId: parseInt(ownProps.boardId),
    lists: ownProps.lists,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchLists: (boardId) => dispatch(fetchLists(boardId)),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListIndex));