import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
// import jelloImg1 from '../../../app/assets/images/jello_pudding.png';


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
              <img src="https://www.pinclipart.com/picdir/big/387-3874217_pudding-sticker-pudding-cute-clipart.png" alt="Jello" />
            </div>
          </div>

          <div className="splash-1-links">
            <Link to="/signup" className="splash-1-link">Sign Up - It's Free!</Link>
            <Link to="/" className="splash-1-link">Try our Demo!</Link>
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
          </div>
        </div>
      </section>

      <section className='splash-2-section'>
        <div className="splash-2-container">
          <div>
            <div className='splash-2-content'>
              <h2>Enhanced Schema Design</h2>
              <p>Boards are so breathtaking, it will even say you're breathtaking. Dive into the details by adding comments and due dates. Collaborate on projects from beginning to end. </p>
            </div>
          </div>
        </div>
      </section>

      <section class='splash-partner'>
        <div className="splash-p-container">
          <div>
            <div className="splash-p-header">
              <h2>Work Smart with Jello</h2>
              <h2>Companies of all shapes and sizes use Jello</h2>
            </div>

            <div className="splash-p-img">
              <img src="" alt="Jello" />
            </div>

            <div className="splash-p-links">
              <Link className="splash-p-link" to="/signup">Get Started - It's Free!</Link>
            </div>

          </div>
        </div>
      </section>

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
      </>
    )
  }
}

export default Splash;