import React from 'react';
import { withRouter } from 'react-router-dom';
import { Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';

// Container
const msp = (state, ownProps) => {
  // return {

  // }
};

const mdp = dispatch => ({

});

// Item Class
class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <>

        <div className="list-item">
          <Droppable droppableId={`list_${this.props.list.id}`}>
            {(provided, snapshot) => (
              <div ref={provided.innerRef}  {...provided.droppableProps} >
                {provided.placeholder}
              </div>
              )
            }

          </Droppable>

        </div>
      </>
    )
  }
}

export default withRouter(connect(msp, mdp)(ListItem));