import React from 'react';
import { Link } from 'react-router-dom';
import jello from 'images/pudding.svg';
import lportal from 'images/right-portal.png';
import rportal from 'images/left-portal.png';

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
      <section className="signup-back">
        <div className="div-leftportal">
          <img src={lportal} className="leftportal" alt="left portal" />
        </div>

        <div className="div-rightportal">
          <img src={rportal} className="rightportal" alt="right portal" />
        </div>

      <div className= "session-form-signup">
        <div className='session-logo-signup'>
          <Link to='/' className="signup-logo">
            <img src={jello} alt="logo jello" />
            <h2>Jello</h2>
          </Link>
        </div>

        <form className="session-signup-form">
          <h2>Sign up for your account</h2>
          {/* <label className="session-form-label">-Username-</label> */}
          <input
            className="signup-input"
            type='text'
            value={this.state.username}
            placeholder=" Enter Username"
            onChange={this.handleInput('username')}
          />
          &nbsp;
          {/* <label className="session-form-label">-Email-</label> */}
          <input
            className="signup-input"
            type='text'
            value={this.state.email}
            placeholder=" Enter Email"
            onChange={this.handleInput('email')}
          />
          &nbsp;
          {/* <label className="session-form-label">-Password-</label> */}
          <input
            className="signup-input"
            type='password'
            value={this.state.password}
            placeholder=" Password: At Least 6 Characters"
            onChange={this.handleInput('password')}
          />
          <p>By signing up, you confirm that you've read and accepted our <Link to='/' className='tos'>Terms of Service</Link> and <Link to='/' className='tos'>Privacy Policy</Link>.</p>
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