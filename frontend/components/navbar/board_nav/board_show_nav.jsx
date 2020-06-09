import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-regular-svg-icons';

import { fetchBoards } from '../../../actions/board_actions'
import { openModal, closeModal } from '../../../actions/modal_actions'

const mstp = () => ({

})

const mdtp = dispatch => ({

})


class BoardShowNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.board.title,
      id: props.board.id,
    }
    this.deleteBoard = this.deleteBoard.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    this.props.fetchBoards();
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
          id: this.props.board.id,
        }
      )}
    ;}


  render() {
    return (
      <section className="boardshow-container">
        
        <div className="float-left">
          <form id={'board-title'} onSubmit={this.handleSubmit}>
            <input
              id={'board-title-input'}
              type="text"
              onChange={this.update("title")}
              onBlur={this.handleSubmit}
              value={this.state.title} />
          </form>
          <button id={'board-favorited'}><FontAwesomeIcon icon={faStar} /></button>
          <button id={'member-icon'}>{this.props.currentUser.username[0]}</button>
          <button id={'board-invite-btn'}>Invite</button>
        </div>

        <div className="float-right">
          <button className="show-menu-right" onClick={this.props.openModal('show-menu')}>
              Show Menu
          </button>
        </div>

      </section>
    )
  }
}

export default connect(mstp,mdtp)(BoardShowNav)