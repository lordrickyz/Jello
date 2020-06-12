// import { connect } from 'react-redux';
// import ListIndex from './list_index'
// import { fetchLists } from '../../actions/lists_actions'
// import { openModal, closeModal } from '../../actions/modal_actions';
// // import { withRouter } from 'react-router-dom';

// const mapStateToProps = (state, ownProps) => {
//   return {
//     currentUser: state.session.id,
//     boardId: parseInt(ownProps.boardId),
//     lists: Object.keys(state.entities.lists).map((id) => state.entities.lists[id])
//   }
// };

// const mapDispatchToProps = (dispatch) => ({
//   fetchLists: () => dispatch(fetchLists()),
//   openModal: modal => dispatch(openModal(modal)),
//   closeModal: () => dispatch(closeModal()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);