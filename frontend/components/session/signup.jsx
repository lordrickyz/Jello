import React from 'react';
import { Link } from 'react-router-dom';
import SessionFoot from '../footer/session_footer';

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

  handleSubmit(e) {
    e.preventDefault();
    this.props.createUser(this.state)
      .then(() => this.props.history.push('/'));
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
      <section className="signup-back">
        <div className="div-leftportal">
          <img src={window.lpudding} className="leftportal" alt="left portal" />
        </div>

        <div className="div-rightportal">
          <img src={window.rpudding} className="rightportal" alt="right portal" />
        </div>
        
        <SessionFoot />
        
        <div className= "session-form-signup">
          <div className='session-logo-signup'>
            <Link to='/' className="signup-logo">
              <img src={window.puddingIcon} alt="logo jello" />
              <h2>Jello</h2>
            </Link>
          </div>

          <form className="session-signup-form">
          <h2>Sign up for your account</h2>
          {this.renderErrors()}
          <input
            className="signup-input"
            type='text'
            value={this.state.username}
            placeholder=" Enter a Username"
            onChange={this.handleInput('username')}
          />
          &nbsp;
          <input
            className="signup-input"
            type='text'
            value={this.state.email}
            placeholder=" Enter a Email"
            onChange={this.handleInput('email')}
          />
          &nbsp;
          <input
            className="signup-input"
            type='password'
            value={this.state.password}
            placeholder=" Enter a Password"
            onChange={this.handleInput('password')}
          />
          <p>By signing up, you confirm that you've read and accepted our Terms of Service and Privacy Policy.</p>
          <button onClick={this.handleSubmit}>Create New Account</button>
          <div className='border-div'></div>
          <Link to='/login' className='form-login'>Already have an account? Log In</Link>
        </form>
        </div>
      </section>
    );
  }

};

export default Signup;