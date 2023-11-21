import "./whyUs.css";
import Free from "../../assets/images/Free.png";
import easy from "../../assets/images/easy.png";
import Beautiful from "../../assets/images/Beautiful.png";

function WhyUs() {
  return (
    <div className="Why-us">
      <h1 className="why-text">Why us?</h1>

      <div className="why-card">
        <img src={Free} alt="Free" className="stickers" />
        <div className="text-wrap">
          <h2>Free</h2>
          <p>
            Postify is totaly free <br /> for your pleasure
          </p>
        </div>
      </div>

      <div className="why-card">
        <img src={easy} alt="easy" className="stickers" />

        <div className="text-wrap">
          <h2>Easy</h2>
          <p>
            Create your own card <br /> has never easiest
          </p>
        </div>
      </div>

      <div className="why-card">
        <img src={Beautiful} alt="Beautiful" className="stickers" />
        <div className="text-wrap">
          <h2>Beautiful</h2>
          <p>
            Perfect card with a most <br /> populary free library <br />
            on the web (pexels.com)
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
