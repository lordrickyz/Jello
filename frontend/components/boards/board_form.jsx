import React from 'react';

class BoardForm extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      title: this.props.board.title
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.props.createBoard(this.state)
      .then(() => this.props.closeModal())
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    return (
      <div className="board-form">
        <form onSubmit={this.handleSubmit}>
          <div className="board-form-title">
            <input
              type="text"
              onChange={this.update('title')}
              value={this.state.title}
              placeholder="Add board title"
            />
          </div>
          <input type="submit" className="create-board-button" value="Create Board"/>
        </form>
      </div>
    )
  }

}

export default BoardForm