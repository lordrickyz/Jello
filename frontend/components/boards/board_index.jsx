import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import BoardNavContainer from '../navbar/board_nav/board_nav_container'


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
          <li className="board-list-item" key="create-board-li" id="create-board-li" /*onClick={this.props.createboard*/ >
            <div><span>Create new board</span></div>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="boards-list">
          <li className="board-list-item" key="create-board-li" id="create-board-li" /*onClick={this.props.createboard}*/ >
            <div><span>Create new board</span></div>
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
              <h3> Personal Boards</h3>
            </div>
            {this.renderBoards()}
          </div>
        </div>
      </div>
      </>
    );
  }
}