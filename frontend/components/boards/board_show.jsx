import React from 'react';
import BoardShowNav from '../navbar/board_nav/board_show_nav';
import BoardNavContainer from '../navbar/board_nav/board_nav_container'
import ListIndex from '../lists/list_index_container';


class BoardShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.boardId)
  }


  render() {
    return (
      <>
      <section className={'board-show-container'}>
        <BoardNavContainer />
        <BoardShowNav
          boardId={this.props.boardId}
          board={this.props.board}
          deleteBoard={this.props.deleteBoard}
          updateBoard={this.props.updateBoard}
          history={this.props.history}
          currentUser={this.props.currentUser}
        />

      </section>
        <ListIndex 
         boardId={this.props.boardId}
        />
      </>
    )
  }
}



export default BoardShow;