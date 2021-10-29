import '../../css/Home.css';

import banner from "../../images/splash-banner.jpg"

import {intro} from "../../data/schpiel.js";

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
          alt="A bike alongside a mountain vista."/>
      </section>
      <section className="our-mission">
        <h1 className="mission-header">Our Mission</h1>
        <div>
        {intro.split("\n").map(segment => {
          return (
            <p className="mission-text">
              {segment}
            </p>
          )
        })}
        </div>
      </section>
    </div>
  );
}

export default Home;
