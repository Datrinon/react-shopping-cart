import '../../css/Home.css';

import banner from "../../images/splash-banner.jpg"

import {intro} from "../../data/schpiel.js";

function Home() {
  return (
    <div className="Home">
      <section className="landing-splash">
        <h1>Time for an electrifying ride.</h1>
        <img 
          src={banner}
          alt="A bike alongside a mountain vista."/>
      </section>
      <section className="">
        <h1>Our Mission</h1>
        <p>{intro}</p>
      </section>
    </div>
  );
}

export default Home;
