import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  const cardId = ownProps.cardId;
  const card = state.entities.cards[cardId];
  return {
    card,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openCardShowModal: (id) => dispatch(openModal("showCard", id)),
  };
};

class CardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.card.id,
      title: props.card.title,
    };
  }

  render() {
    return (
      <Draggable
        draggableId={`card_${this.props.card.id}`}
        index={this.props.dragIdx}
        type="CARD"
      >
        {(provided, snapshot) => (
          <div
            className="card-item-container"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div onClick={() => this.props.openCardShowModal(this.state.id)}>
              <span id={"card-item-title"}>{this.state.title}</span>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);