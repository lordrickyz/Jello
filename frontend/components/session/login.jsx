import React from 'react';
import { Link } from 'react-router-dom';
import jello from 'images/pudding.svg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
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
    this.props.login(this.state)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="session-form-login">
        <div className='session-logo-login'>
          <Link to='/' className="login-logo">
            <img src={jello} alt="logo jello" />
            <text>Jello</text>
          </Link>
        </div>
        <form>
          <h2>Log in to Jello</h2>
          <label className="session-form-label">-Username-</label>
          <input
            className="signup-input"
            type='text'
            value={this.state.username}
            height="30px"
            placeholder="Your Username"
            onChange={this.handleInput('username')}
          />
          <label className="session-form-label">-Password-</label>
          <input
            type='password'
            value={this.state.password}
            placeholder="••••••••••••"
            onChange={this.handleInput('password')}
          />
          <button onClick={this.handleSubmit}>Log In</button>
        </form>
      </div>
    );
  }

};

export default Login;