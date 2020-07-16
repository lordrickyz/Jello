import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-regular-svg-icons';

import { fetchBoard, updateBoard } from '../../../actions/board_actions'
import { openModal, closeModal } from '../../../actions/modal_actions'

const mapStatetoProps = (state, ownProps) => {
  return {
  boardId: ownProps.boardId,
  modal: state.ui.modal,
  currentUser: state.entities.users[state.session.id],
  board: ownProps.board,
  history: ownProps.history
}}

const mapDispatchtoProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  fetchBoard: (board) => dispatch(fetchBoard(board)),
  updateBoard: board => dispatch(updateBoard(board)),
  closeModal: () => dispatch(closeModal()),
})


class BoardShowNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.board.title,
      id: props.boardId,
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {

    this.props.fetchBoard(this.state.id);
    this.props.closeModal();
  }

  componentWillUnmount() {
    this.props.closeModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    document.getElementById("board-title-input").blur();
    this.props.updateBoard(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  componentDidUpdate(oldProps) {
    if (oldProps !== this.props) {
      this.setState({
          title: this.props.board.title,
          id: this.props.boardId,
        }
      )}
    ;}


  render() {
    return (
      <section className="boardshow-container">

        <div className="menu-left">
          <form id={'board-title'} onSubmit={this.handleSubmit}>
            <input
              id={'board-title-input'}
              type="text"
              onChange={this.update("title")}
              onBlur={this.handleSubmit}
              value={this.state.title} />
          </form>
          <div className="board-show-line"></div>
          <button id={'board-favorited'}><FontAwesomeIcon icon={faStar} /></button>
          <button id={'member-icon'}>{this.props.currentUser.username[0]}</button>
          {/* <button id={'board-invite-btn'}>Invite</button> */}
        </div>

        <div className="menu-right">
          <button id={"menu-rightbtn"} onClick={() => this.props.openModal("menu-board")}>Show Menu</button>
        </div>

      </section>
    )
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(BoardShowNav)