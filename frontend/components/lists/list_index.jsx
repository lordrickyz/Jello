import React from 'react';
import { withRouter } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import ListItemContainer from './list_item_container';
import ListFormContainer from './list_form_container';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardId: props.boardId,
      lists: props.lists,
      currentUser: props.currentUser,
    };
    debugger;
  }

  componentDidMount() {
    this.props.fetchLists(this.state.boardId)
  }

  render() {

    return (
      <div className="list-outer-index" >
        <div className="list-index">
          <DragDropContext>
            {ListFormContainer}
          </DragDropContext>
        </div>
      </div>
    )
  }
}

export default withRouter(ListIndex)