import React from 'react';
import { Link } from 'react-router-dom';
import jello from 'images/pudding.svg';
import lportal from 'images/right-portal.png';
import rportal from 'images/left-portal.png';

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
      <section className="login-back">
      <div className="div-leftportal">
        <img src={lportal} className="leftportal" alt="left portal" />
      </div>

      <div className="div-rightportal">
        <img src={rportal} className="rightportal" alt="right portal" />
      </div>

      <div className="session-form-login">
        <div className='session-logo-login'>
          <Link to='/' className="login-logo">
            <img src={jello} alt="logo jello" />
            <h2>Jello</h2>
          </Link>
        </div>
        <form className="session-login-form">
          <h2>Log in to Jello</h2>
          {/* <label className="session-form-label">-Username-</label> */}
          <input
            className="signup-input"
            type='text'
            value={this.state.username}
            height="30px"
            placeholder=" Enter Username"
            onChange={this.handleInput('username')}
          />
          &nbsp;
          {/* <label className="session-form-label">-Password-</label> */}
          <input
            type='password'
            value={this.state.password}
            placeholder=" Enter Password"
            onChange={this.handleInput('password')}
          />
          <button onClick={this.handleSubmit}>Log In</button>
          <span>OR</span>
          <Link to='/' className="form-demo">Fast Demo Login</Link>
          <div className='border-div'></div>
          <Link to='/signup' className='form-signup'>Sign up for an account</Link>
        </form>
      </div>
      </section>
    );
  }

};

export default Login;