import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import SplashFoot from '../footer/splash_footer';

class Splash extends React.Component {
  render() {
    return (
      <>
      {Navbar}

      <section className="splash-1-section">
          <div className="splash-1-container">
          <div>
            <div className="splash-1-content">
              <h1>
              Jello lets you collaboratively work with others and get projects done.
              </h1>
              <p>
                Jello's boards, lists, and cards enable you to organize your projects in a fun, flexible and gelatin way.
              </p>
            </div>

            <div className="splash-1-img">
                <img src={window.splashmain} alt="Main Splash" />
            </div>
          </div>

          <div className="splash-1-links">
            <Link to="/signup" className="splash-1-link">Sign Up - It's Free!</Link>
            <Link to="/" className="splash-1-link" onClick={this.props.loginDemo}>Try our Demo!</Link>
          </div>

        </div>
      </section>



      <section className='splash-2-section'>
        <div className="splash-2-container">
          <div>
            <div className='splash-2-content'> 
              <h2>Work anywhere with any team</h2>
              <p>Whether if your stuck in traffic, in the subway, or even with family. Stay organized and on-track anywhere with Jello.</p>
              <Link className="splash-2-link" to="/signup">Start Now →</Link>
            </div>
            <div className='splash-img-right'>
                <img src={window.splashmain2} alt="Right Splash" />
            </div>
          </div>
        </div>
      </section>

      <section className='splash-2-section'>
        <div className="splash-2-container">
          <div>
            <div className='splash-img-left'>
                <img src={window.splashmain3} alt="Left Splash" />
            </div>
            <div className='splash-2-content'>
              <h2>Enhanced Schema Design</h2>
              <p>Boards are so breathtaking, it will even say you're breathtaking. Dive into the details by adding comments and due dates. Collaborate on projects from beginning to end. </p>
            </div>
          </div>
        </div>
      </section>

    <div className='background-gradient'>
      <section className='splash-partner'>
        <div className="splash-p-container">
          <div>
            <div className="splash-p-header">
              <h2>Work Smarter with Jello</h2>
              <h2>Fictional companies of all shapes and sizes use Jello</h2>
              <p>@FREEPIKCOMPANY</p>
            </div>

            <div className="splash-p-imgs">
              <div>
                <img src={window.filmIcon} alt="logo film" />
                <img src={window.vgIcon} alt="logo video" />
                <img src={window.bballIcon} alt="logo bball" />
              </div>
              <div>
                <img src={window.teaIcon} alt="logo btea" />
                <img src={window.bagIcon} alt="logo shop" />
                <img src={window.bowlIcon} alt="logo bowl" />
              </div> 
              <div>
                <img src={window.bballIcon} alt="logo bowl" />
              </div> 
            </div>

            <div className="splash-p-links">
                  <Link className="splash-p-link" to="/signup">Find out how →</Link>
            </div>

          </div>
        </div>
      </section>
    </div>

    <div className='background-gradient-2'>
      <section className='splash-3-section'>
        <div className="splash-3-container">
          <div>
            <div className="splash-dashboard">
              <h2>Start Planning Today</h2>
              <h3>Sign up and become one of the few around the world to use Jello</h3>
              <Link className="splash-3-link" to="/signup">Get Started - It's Free!</Link>
            </div>
          </div>
        </div>
      </section>
    </div>

    <SplashFoot/>

      </>
    )
  }
}

export default Splash;