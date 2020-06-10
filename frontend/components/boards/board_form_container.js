import { connect } from 'react-redux';
import BoardForm from './board_form';
import { createBoard } from '../../actions/board_actions'
import { closeModal } from '../../actions/modal_actions'


const mapStateToProps = (state) => {
 return {
  board: { title: "" }
  }
};


const mapDispatchToProps = dispatch => ({
  createBoard: board => dispatch(createBoard(board)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);