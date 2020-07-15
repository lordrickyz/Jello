import React from 'react';
import BoardShowNav from '../navbar/board_nav/board_show_nav';
import BoardNavContainer from '../navbar/board_nav/board_nav_container'
import ListIndexContainer from '../list/list_index';
import { connect } from "react-redux";
import { fetchBoard } from "../../actions/board_actions";

const mapStatetoProps = (state, ownProps) => {
  const defaultBoard = {
    title: "Title",
  };

  const defaultList = {
    title: "Title",
  };

  return {
    boardId: parseInt(ownProps.match.params.id),
    board: state.entities.boards[ownProps.match.params.id] || defaultBoard,
    lists: state.entities.lists || defaultList,
    history: ownProps.history,
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchtoProps = (dispatch) => ({
  fetchBoard: (id) => dispatch(fetchBoard(id)),
  updateBoard: (board) => dispatch(updateBoard(board)),
  deleteBoard: (id) => dispatch(deleteBoard(id)),
});

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.boardId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.boardId !== this.props.boardId) {
      this.props.fetchBoard(this.props.boardId);
    }
  }

  render() {
    return (
      <>
        <div className={"board-show-filler"}></div>
        <div className={"board-show-container"}>
          <BoardNavContainer />
          <BoardShowNav
            boardId={this.props.boardId}
            board={this.props.board}
            deleteBoard={this.props.deleteBoard}
            updateBoard={this.props.updateBoard}
            history={this.props.history}
            currentUser={this.props.currentUser}
          />
          <ListIndexContainer />
        </div>
      </>
    );
  }
}



export default connect(mapStatetoProps, mapDispatchtoProps)(BoardShow);
