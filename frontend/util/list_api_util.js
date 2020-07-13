export const fetchLists = (boardId) =>
  $.ajax({
    url: `/api/boards/${boardId}/lists`,
    method: "GET",
  });
  
export const createList = (boardId, list) => {
  return $.ajax({
    url: `/api/boards/${boardId}/lists`,
    method: "POST",
    data: { list },
  });
};

export const updateList = (boardId, list) => {
  return $.ajax({
    url: `/api/boards/${boardId}/lists/${list.id}`,
    method: "PATCH",
    data: { list },
  });
};

export const deleteList = (boardId, id) => {
  return $.ajax({
    url: `/api/boards/${boardId}/lists/${id}`,
    method: "DELETE",
  });
};