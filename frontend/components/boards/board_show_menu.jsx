import React from 'react';
import { connect } from 'react-redux';
import { deleteBoard, receiveBoardErrors } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

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
      <div className="board-menu">
        <div className="menu-title">
          Menu
        <button onClick={() => this.props.closeModal()}>x</button>
        </div>
        <div className="menu-user">
          About This User
          <div className="menu-links">
            <ul>
              <li>
                <a href="https://github.com/lordrickyz" target="_blank"><FontAwesomeIcon icon={faGithub} />GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/rickyzhengs/" target="_blank"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</a>
              </li>
              <li>
                <a href="https://lordrickyz.github.io/" target="_blank"><FontAwesomeIcon icon={faUser} />My Profile</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu-user">
          <div className={"menu-delete"}>
            <button id={"delete-button"} onClick={this.deleteBoard}>
              Delete Board
            </button>
          </div>
        </div>
      </div>
    )
  }
}





export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(BoardMenu));