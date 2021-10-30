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
          className="banner"
          src={banner}
      </section>
      <section className="our-mission">
        <div className="gradient"></div>
        <img className="image" src={aboutUs} alt="The old Mako garages."></img>
        <div className="text">
          <h1 className="mission-header">Our Mission</h1>
          <div>
            {intro.split("\n").map(segment => {
              if (segment.length === 0) {
                return;
              }
              return (
                <p className="mission-text">
                  {segment}
                </p>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
