export const fetchCards = (listId) => {
  return $.ajax({
    url: `/api/lists/${listId}/cards`,
    method: 'GET'
  });
};

export const createCard = (listId, card) => {
  return $.ajax({
    url: `/api/lists/${listId}/cards`,
    method: 'POST',
    data: { card }
  });
};

export const fetchCard = (cardId) => {
  return $.ajax({
    url: `/api/cards/${cardId}`,
    method: 'GET'
  });
}

export const updateCard = (card) => {
  return $.ajax({
    url: `/api/cards/${card.id}`,
    method: 'PATCH',
    data: { card }
  });
};

export const deleteCard = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/cards/${id}`
  });
};