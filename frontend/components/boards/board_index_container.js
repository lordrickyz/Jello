import { connect } from 'react-redux';
import BoardIndex from './board_index'

const mapStateToProps = (state) => ({
  boards: Object.keys(state.entities.boards).map((id) => state.entities.boards[id])
});

const mapDispatchToProps = (dispatch) => ({
  fetchBoards: () => dispatch(fetchBoards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);