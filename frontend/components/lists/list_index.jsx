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
      listOrder: [],
      cardDragResult: {},
    };

    this.orderLists = this.orderLists.bind(this);
    this.renderLists = this.renderLists.bind(this);
    this.updateListToDB = this.updateListToDB.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount() {
    this.props.fetchLists(this.props.boardId)
    this.orderLists();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.lists !== this.props.lists) {
      this.orderLists();
    }
  }

  orderLists() {
    if (Object.keys(this.props.lists).length === 0) return;

    let listsFromProps = Object.values(this.props.lists);
    let orderedLists = [];

    let currentList = listsFromProps.find((list) => list.prev_id === null);
    orderedLists.push(currentList.id);
    while (currentList.next_id !== null) {
      currentList = listsFromProps.find((list) => list.id === currentList.next_id);
      orderedLists.push(currentList.id);
    }
    this.setState({ listOrder: orderedLists });
  }

  renderLists() {
    if (this.state.listOrder.length === 0) return null;

    const listItems = this.state.listOrder.map((listId, index) => {
      return (
        <ListItemContainer
          list={this.props.lists[listId]}
          key={`list-${listId}`}
          dragIdx={index}
          cardDragResult={this.state.cardDragResult}
        />
      )
    });

    return listItems;
  }
  
  updateListToDB(list, newIndex, newListOrder) {
    if (newIndex === 0) {
      list.prev_id = null;
      list.next_id = newListOrder[1];
    }
    else if (newIndex === newListOrder.length - 1) {
      list.prev_id = newListOrder[newListOrder.length - 2];
      list.next_id = null;
    }
    else {
      list.prev_id = newListOrder[newIndex - 1];
      list.next_id = newListOrder[newIndex + 1];
    }
    this.props.updateList(this.state.boardId, list);
  }

  onDragEnd(result) {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'LIST') {
      const newListOrder = Array.from(this.state.listOrder);
      newListOrder.splice(source.index, 1);
      const draggedListId = draggableId.slice(draggableId.search('_') + 1);
      newListOrder.splice(destination.index, 0, draggedListId);
      const newState = {
        ...this.state,
        listOrder: newListOrder,
      };
      this.setState(newState);
      this.updateListToDB(this.props.lists[draggedListId], destination.index, newListOrder);
    }

    if (type === 'CARD') {
      this.setState({ cardDragResult: result });
    }
  }


  render() {
    if (!this.state.listOrder) return null; 

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="board-content">
          <Droppable
            droppableId={`board_${this.props.boardId}`}
            type="LIST"
            direction="horizontal"
          >
            {(provided, snapshot) => (
              <div
                className="list-index-container"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {this.renderLists()}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    )
  }
}

export default (ListIndex)