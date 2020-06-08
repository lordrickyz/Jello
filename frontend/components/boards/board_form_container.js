import { connect } from 'react-redux';
import BoardForm from './board_form';


const mapStateToProps = (state) => ({
  board: { title: "" }
});


const mapDispatchToProps = dispatch => ({
  createBoard: board => dispatch(createBoard(board)),

})

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);