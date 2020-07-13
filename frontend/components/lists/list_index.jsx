import React from 'react';
// import { withRouter } from 'react-router-dom';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';
import ListItemContainer from './list_item_container';
// import ListFormContainer from './list_form_container';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardId: props.boardId,
      lists: props.lists,
      currentUser: props.currentUser,
    };
  }

  componentDidMount() {
    this.props.fetchLists(this.props.boardId)
  }

  renderLists() {
    if (!this.props.lists) return null;

    const lists = Object.values(this.props.lists).map(list => {
      return <ListItemContainer key={list.id} list={list} />
    })

    return lists
  }


  render() {
//onDragEnd = { this.onDragEnd.bind(this) }
    return (
      <DragDropContext> 
        <div className="drag-drop-context">
          {this.renderLists()}
        </div>
      </DragDropContext>
    )
  }
}

export default (ListIndex)