import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-regular-svg-icons';

export default class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderBoards = this.renderBoards.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoards();
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
          <li className="board-list-item" key="create-board-li" id="create-board-li" onClick={this.props.openNewBoardModal}>
            <div><span>Create new board</span></div>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="boards-list">
          <li className="board-list-item" key="create-board-li" id="create-board-li" onClick={this.props.openNewBoardModal}>
            <div><span>Create new board</span></div>
          </li>
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="board-index-view">
        <div className="board-index-container">
          <div className="personal-boards-section">
            <div className="personal-boards-section-header">
              <div><span><FontAwesomeIcon icon={faUser} /></span></div>
              <h3>Personal Boards</h3>
            </div>
            {this.renderBoards()}
          </div>
        </div>
      </div>
    );
  }
}