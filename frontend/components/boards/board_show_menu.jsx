import React from 'react';
import { connect } from 'react-redux';
import { deleteBoard, receiveBoardErrors } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

const mapStatetoProps = (state, ownProps) => {
  const defaultBoard = {
    title: "Title",
  }
  const boardId = ownProps.history.location.pathname.split("/")[2]
  return {
    boardId: boardId,
    board: state.entities.boards[boardId] || defaultBoard,
    history: ownProps.history,
    currentUser: state.entities.users[state.session.id],
  }
}

const mapDispatchToProps = dispatch => ({
  deleteBoard: id => dispatch(deleteBoard(id)),
  closeModal: () => dispatch(closeModal()),
})

class BoardMenu extends React.Component {
  constructor(props) {
    super(props)
    // debugger
    this.deleteBoard = this.deleteBoard.bind(this)
  }

  deleteBoard() {
    if (this.props.currentUser.id === this.props.board.admin_id) {
      this.props.deleteBoard(this.props.boardId)
        .then(() => this.props.history.push("/boards"))
    } else {
      receiveBoardErrors({ responseJSON: ['Only the board owner and admins may delete this board'] })
    }
  }


  render() {
    return (
      <div className={"board-options-menu"}>
        <div className={"menu-title"}>
          Menu
        <button onClick={() => this.props.closeModal()}>x</button>
        </div>
        <div className={"menu-options"}>
          <button id={"delete-board-button"} onClick={this.deleteBoard}>
            Delete This Board
          </button>
        </div>
      </div>
    )
  }
}





export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(BoardMenu));