import React from 'react';
import { Link } from 'react-router-dom';
import SessionFoot from '../footer/session_footer';

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

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/boards'));
  }

  componentDidMount() {
    this.props.clearSessionErrors();
  }

  renderErrors() {
    let errorList;
    let errorsClass;
    if (this.props.errors === undefined || this.props.errors.length == 0) {
      errorList = null;
      errorsClass = "no-errors"
    } else {
      errorsClass = "errors"
      errorList = this.props.errors.map((error, i) => {
        return (
          <span key={`session-error-${i}`}>
            {error}
          </span>
        );
      });

      return (
        <div className={errorsClass}>
          {errorList}
        </div>
      );
    }
  }


  render() {
    return (
      <section className="login-back">
      <div className="div-leftportal">
        <img src={window.lpudding} className="leftportal" alt="left portal" />
      </div>

      <div className="div-rightportal">
        <img src={window.rpudding} className="rightportal" alt="right portal" />
      </div>

        <SessionFoot />

      <div className="session-form-login">
        <div className='session-logo-login'>
          <Link to='/' className="login-logo">
            <img src={window.puddingIcon} alt="logo jello" />
            <h2>Jello</h2>
          </Link>
        </div>
        <form className="session-login-form">
          <h2>Log in to Jello</h2>
          {this.renderErrors()}
          <input
            className="signup-input"
            type='text'
            value={this.state.username}
            height="30px"
            placeholder=" Enter Username"
            onChange={this.handleInput('username')}
          />
          &nbsp;
          <input
            type='password'
            value={this.state.password}
            placeholder=" Enter Password"
            onChange={this.handleInput('password')}
          />
          <button onClick={this.handleSubmit}>Log In</button>
          <span>OR</span>
            <Link to='/boards' className="form-demo" onClick={this.props.loginDemo}>Fast Demo Login</Link>
          <div className='border-div'></div>
          <Link to='/signup' className='form-signup'>Sign up for an account</Link>
        </form>
      </div>
      </section>
    );
  }

};

export default Login;