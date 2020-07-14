import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import { fetchBoards } from '../../../actions/board_actions';
import { closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state) => {
  // debugger;
  return {
    boards: state.entities.boards
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBoards: () => dispatch(fetchBoards()),
    closeModal: () => dispatch(closeModal()),
  };
};

class BoardMenu extends React.Component {
  componentDidMount() {
    this.props.fetchBoards();
  }

  render() {
    const boardItems = Object.values(this.props.boards).map((board) => {
      return (
        <div className="board-li" key={`personal-${board.id}`}>
          <Link
            to={`/boards/${board.id}`}
            onClick={this.props.closeModal}
            className="board-li-link"
          >
            <div className="board-li-contents">
              <div className="board-li-color-block"></div>
              <div className="board-li-title">{board.title}</div>
            </div>
          </Link>
        </div>
      );
    });

    return (
      <div className="board-menu-container">
        <div className="board-menu-lists">
          <div className="board-menu-section" id="personal-boards">
            <div className="board-menu-section-header">
              <span>
                <span className="board-menu-section-icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span className="board-menu-section-title">
                  Personal Boards
                </span>
              </span>
            </div>

            <div className="board-menu-section-list">{boardItems}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardMenu);