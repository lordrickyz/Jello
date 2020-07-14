import { connect } from "react-redux";
import { withRouter } from "react-router";

import { fetchLists, updateList } from "../../actions/lists_actions";
import ListIndex from "./list_index";

const mapStateToProps = (state, ownProps) => {
  const lists = state.entities.lists;
  const boardId = parseInt(ownProps.match.params.id);
  return {
    lists,
    boardId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLists: (boardId) => dispatch(fetchLists(boardId)),
    updateList: (list) => dispatch(updateList(list)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ListIndex)
);
