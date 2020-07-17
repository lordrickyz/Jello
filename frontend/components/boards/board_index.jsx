import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import BoardNavContainer from '../navbar/board_nav/board_nav_container'
import { connect } from "react-redux";
import { fetchBoards } from "../../actions/board_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.id,
    boards: Object.keys(state.entities.boards).map(
      (id) => state.entities.boards[id]
    ),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchBoards: () => dispatch(fetchBoards()),
  openModal: (modal) => dispatch(openModal(modal))
});

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);

    this.renderBoards = this.renderBoards.bind(this);
    this.createBoardModal = this.createBoardModal.bind(this)
  }

  componentDidMount() {
    this.props.fetchBoards();
  }

  createBoardModal() {
    this.props.openModal("create-board")
  }

  renderBoards() {
    const boardItems = this.props.boards.map((board) => {
      return (
        <li className="board-list-item" key={`board-index-${board.id}`}>
          <Link to={`/boards/${board.id}`}>{board.title}</Link>
        </li>
      );
    });


    if (boardItems.length > 0) {
      return (
        <ul className="boards-list">
          {boardItems}
          <li className="board-list-item" key="create-board-li" id="create-board-li" onClick={this.createBoardModal}>
            <div><span>Create New Board</span></div>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="boards-list">
          <li className="board-list-item" key="create-board-li" id="create-board-li" onClick={this.createBoardModal} >
            <div><span>Create New Board</span></div>
          </li>
        </ul>
      );
    }
  }

  render() {
    return (
      <>
      <BoardNavContainer/>
      <div className="board-index-view">
        <div className="board-index-container">
          <div className="user-boards-section">
            <div className="user-boards-section-header">
              <div><span><FontAwesomeIcon icon={faChalkboardTeacher} /></span></div>
              <h3>Personal Boards</h3>
            </div>
            {this.renderBoards()}
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);
