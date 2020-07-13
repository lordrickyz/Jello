import * as CardAPIUtil from '../util/card_api_util';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const CLEAR_CARDS = 'CLEAR_CARDS';
export const RECEIVE_CARD_ERRORS = 'RECEIVE_CARD_ERRORS';
export const CLEAR_CARD_ERRORS = 'CLEAR_CARD_ERRORS';

const receiveCards = (cards) => ({
    type: RECEIVE_CARDS,
    cards
});

const receiveCard = (card) => ({
  type: RECEIVE_CARD,
  cards
});

const clearCards = () => ({
    type: CLEAR_CARDS
});

const receiveErrors = (errors) => ({
    type: RECEIVE_CARD_ERRORS,
    errors
});

const clearErrors = () => ({
    type: CLEAR_CARD_ERRORS
});

export const fetchCards = (listId) => dispatch => CardAPIUtil.fetchCards(listId)
  .then((cards) => dispatch(receiveCards(cards)))
  .fail((errors) => dispatch(receiveErrors(errors.responseJSON)));


export const fetchCard = (cardId) => dispatch => CardAPIUtil.fetchCard(cardId)
  .then((card) => dispatch(receiveCard(card)))
  .fail((errors) => dispatch(receiveErrors(errors.responseJSON)));

export const createCard = (cardId, card) => dispatch => CardAPIUtil.createCard(cardId, card)
  .then((cards) => dispatch(receiveCards(cards)))
  .fail((errors) => dispatch(receiveErrors(errors.responseJSON)));

export const updateCard = (card) => dispatch => CardAPIUtil.updateCard(card)
  .then((cards) => dispatch(receiveCards(cards)))
  .fail((errors) => dispatch(receiveErrors(errors.responseJSON)));
