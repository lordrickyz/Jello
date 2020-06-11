import * as ListAPIUtil from "../util/list_api_util";

export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const REMOVE_LIST = "REMOVE_LIST";
export const RECEIVE_LIST_ERRORS = "RECEIVE_LIST_ERRORS";
export const CLEAR_LIST_ERRORS = "CLEAR_LIST_ERRORS";

const receiveLists = (lists) => ({
  type: RECEIVE_LISTS,
  lists
});

const receiveList = ({list}) => ({
  type: RECEIVE_LIST,
  list
});

const removeList = ({list}) => ({
  type: REMOVE_LIST,
  list
});

const receiveListErrors = (errors) => ({
  type: RECEIVE_LIST_ERRORS,
  errors
});

export const fetchLists = () => dispatch => ListAPIUtil.fetchLists()
    .then(lists => dispatch(receiveLists(lists)))
    .fail(errors => dispatch(receiveListErrors(errors.responseJSON)));

export const fetchList = (id) => dispatch => ListAPIUtil.fetchList(id)
    .then(list => dispatch(receiveList(list)))
    .fail(errors => dispatch(receiveListErrors(errors.responseJSON)));

export const createList = (list) => dispatch => ListAPIUtil.createList(list)
    .then(list => dispatch(receiveList(list)), errors => (
      dispatch(receiveListErrors(errors.responseJSON))
  )
);

export const updateList = (list) => dispatch => ListAPIUtil.updateList(list)
    .then(list => dispatch(receiveList(list)))
    .fail(errors => dispatch(receiveListErrors(errors.responseJSON)));

export const deleteList = (id) => dispatch => ListAPIUtil.deleteList(id)
    .then(() => dispatch(removeList(listId)))
    .fail(errors => dispatch(receiveListErrors(errors.responseJSON)));