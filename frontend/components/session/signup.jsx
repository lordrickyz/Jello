import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) { //takes in event
    e.preventDefault();
    this.props.signup(this.state)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className= "session-form-signup">
        <h2>(Place Image Jello Here)</h2>
        <form>
          <h2>Sign up for your account</h2>
          <label className="session-form-label">-Username-</label>
          <input
            className="signup-input"
            type='text'
            value={this.state.username}
            placeholder="Who, Whom, Whomst?"
            onChange={this.handleInput('username')}
          />
          <label className="session-form-label">-Email-</label>
          <input
            className="signup-input"
            type='text'
            value={this.state.email}
            placeholder="email@jello.com"
            onChange={this.handleInput('email')}
          />
          <label className="session-form-label">-Password-</label>
          <input
            className="signup-input"
            type='password'
            value={this.state.password}
            placeholder="At Least 6 Characters"
            onChange={this.handleInput('password')}
          />
          <button onClick={this.handleSubmit}>Create New Account</button>
        </form>
      </div>
    );
  }

};

export default Signup;