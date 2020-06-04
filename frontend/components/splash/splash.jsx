import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import jelloImg1 from 'images/jello-pudding.png';
import film from 'images/film-strip.svg';
import video from 'images/videogame.svg';
import bball from 'images/basketball.svg';
import btea from 'images/bubble-tea.svg';
import shop from 'images/shopping-bag.svg';
import bowl from 'images/bowling.svg';
import Footer from '../footer/footer';

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
                <img src={jelloImg1} alt="Jello" />
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
                <img src="https://themes.getbootstrap.com/wp-content/uploads/2018/07/thumb-4-1200x900.png" alt="right logo" />
            </div>
          </div>
        </div>
      </section>

      <section className='splash-2-section'>
        <div className="splash-2-container">
          <div>
            <div className='splash-img-left'>
                <img src="https://images.assetsdelivery.com/compings_v2/bsd555/bsd5551908/bsd555190800948.jpg" alt="right logo" />
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
                <img src={film} alt="logo film" />
                <img src={video} alt="logo video" />
                <img src={bball} alt="logo bball" />
              </div>
              <div>
                <img src={btea} alt="logo btea" />
                <img src={shop} alt="logo shop" />
                <img src={bowl} alt="logo bowl" />
              </div> 
              <div>
                <img src={bowl} alt="logo bowl" />
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

      <Footer/>

      </>
    )
  }
}

export default Splash;