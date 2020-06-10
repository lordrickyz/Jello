import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard } from '../../actions/board_actions'
// import { } from '../../actions/modal_actions'
import { withRouter } from 'react-router-dom';


const mapStatetoProps = (state, ownProps) => {
  const defaultBoard = {
    title: "Title",
  }
  return{
    boardId: parseInt(ownProps.match.params.id),
    board: state.entities.boards[ownProps.match.params.id] || defaultBoard,
    history: ownProps.history,
    currentUser: state.entities.users[state.session.id],
  }
}

const mapDispatchtoProps = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id)),
  updateBoard: board => dispatch(updateBoard(board)),
  deleteBoard: id => dispatch(deleteBoard(id))
})

export default (connect(mapStatetoProps,mapDispatchtoProps)(BoardShow));