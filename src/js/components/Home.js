import '../../css/Home.css';

import banner from "../../images/splash-banner-2.jpg"
import aboutUs from "../../images/about-us.jpg"

import { Link } from "react-router-dom";

import { intro } from "../../data/schpiel.js";

function Home() {
  return (
    <div className="Home">
      <section className="landing-splash">
        <h1
          className="slogan"
        >
          Time for an electrifying ride.
        </h1>
        <img
          className="banner"
          src={banner}
          alt="A bike alongside a mountain vista." />
        <div className="shop-now">
          <Link to="/products">
            Shop Now
          </Link>
        </div>
      </section>
      <section className="our-mission">
        <div className="gradient"></div>
        <img className="image" src={aboutUs} alt="The old Mako garages."></img>
        <div className="text">
          <h1 className="mission-header">Our Mission</h1>
          <div>
            {intro.split("\n").map((segment, index) => {
              if (segment.length === 0) {
                return;
              }
              return (
                <p className="mission-text" key={index}>
                  {segment}
                </p>
              )
            })}
          </div>
        </div>
      </section>
      <section className="mailing-list">
        <h1 className="mailing-list-prompt">Join the Mako Club.</h1>
        <p className="mailing-list-dialog">As a part of our club's mailing list, you'll receive exclusive news and offers.</p>
        <input className="email-signup" type="email" placeholder="john.doe@gmail.com"></input>
        <button className="signup">Sign Up</button>
      </section>
    </div>
  );
}

export default Home;
