// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { closeModal } from '../../actions/modal_actions';
// import { createList } from '../../actions/lists_actions';
// import ListForm from './list_form';


// const msp = (state, ownProps) => {
//   const boardId = ownProps.history.location.pathname.split("/")[2]
//   return {
//     boardId: boardId,
//     lists: { title: "" }
//   }
// }

// const mdp = (dispatch) => ({
//   createList: (list) => dispatch(createList(list)),
//   closeModal: () => dispatch(closeModal()),
// })

// export default withRouter(connect(msp, mdp)(ListForm));