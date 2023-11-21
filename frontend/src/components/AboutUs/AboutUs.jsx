import Envelope from "../../assets/images/Envelope.png";
import "./aboutUs.css";

function AboutUS() {
  return (
    <div className="About-us">
      <div>
        <h1 className="about-title">POSTIFY TO YOU</h1>
        <p className="about-text">
          Create a card beautiful and exciting moment to give some news or
          announce a good event. This site is made for you, powered by the
          largest image library on the web.
        </p>
      </div>
      <img src={Envelope} alt="Envelope" className="Envelope" />
    </div>
  );
}

export default AboutUS;
