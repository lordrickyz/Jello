import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faSearch, faPlus, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

class BoardNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchbar: "",
    }
    this.clearSearch = this.clearSearch.bind(this)
    this.update = this.update.bind(this)
  }

  componentDidMount() {
    this.props.closeModal();
  }

  componentWillUnmount() {
    this.props.closeModal();
  }


  showForm(field) {
    if (this.props.modal === field) {
      return () => {
        this.props.closeModal();
      }
    }
    return () => this.props.openModal(field)
  }

  clearSearch() {
    this.setState(
      { searchbar: "" }
    )
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState(
        { [field]: e.target.value }
      )
    }
  }

  render() {
    return (
      <section className="board-navbar">
        <div className="float-left">
          <Link to="/" className="home-btn"><FontAwesomeIcon icon={faHome}/></Link>
          <button onClick={this.showForm("board-menu")} className="boards-btn"><FontAwesomeIcon icon={faList}/> Boards</button>
          <input
            value={this.state.searchbar}
            onBlur={this.clearSearch}
            onChange={this.update("searchbar")}
            onFocus={this.props.closeModal}
            className="searchbar"
            type="text"
          />
        </div>
        <div className="float-middle">
          <Link to='/' className="board-nav-logo">
          <img src={window.boardnav} alt="logo jello" />
            Jello
          </Link>
        </div>
        <div className="float-right">
          <button onClick={this.showForm("create-board")} className="create-board-btn"><FontAwesomeIcon icon={faPlus}/></button>
          <button onClick={this.showForm("information")} className="information-btn"><FontAwesomeIcon icon={faInfoCircle}/></button>
          <button onClick={this.showForm("notifications")} className="notification-btn"><FontAwesomeIcon icon={faBell}/></button>
          <button onClick={this.showForm("user-options")} id="user-options-btn">{this.props.currentUser.username[0]}</button>
        </div>
      </section>
    )
  }
}


export default BoardNav