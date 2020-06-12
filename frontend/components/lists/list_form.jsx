import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.lists.title
    };
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createList(this.state)
      .then(() => this.props.closeModal());
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    return (
      <div className="list-form-container">
        <form onSubmit={this.handleSubmit} className="list-form">
          <div className="list-form-title">
            <input 
              type="text"
              onChange={this.update('title')}
              value={this.state.title}
              placeholder="Add list title"
            />
          </div>
          <input type="submit" value="Add List" className="list-input-button"/>
        </form>
      </div>
    );
  }
}

export default ListForm;