import { connect } from "react-redux";

import CardShow from "./card_show";
import { updateCard } from "../../actions/cards_actions";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  const cardId = ownProps.cardId;
  const card = state.entities.cards[cardId];
  const listId = card.list_id;
  const listTitle = state.entities.lists[listId].title;
  let description;
  if (card.description === null) {
    description = ""
  } else {
    description = card.description; 
  }

  return {
    card,
    listTitle,
    description,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCard: (card) => dispatch(updateCard(card)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardShow);
