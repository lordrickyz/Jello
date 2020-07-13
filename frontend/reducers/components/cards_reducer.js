import { RECEIVE_CARDS, RECEIVE_CARD, CLEAR_CARDS } from '../../actions/cards_actions';
import merge from 'lodash/merge';

const cardsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CARDS:
      return merge({}, state, action.cards);
    case RECEIVE_CARD:
      return merge({}, state, { [action.card.id]: action.card });
    case CLEAR_CARDS:
      return {};
    default:
      return state;
  }
};

export default cardsReducer;