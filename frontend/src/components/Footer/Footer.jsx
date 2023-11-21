import "./footer.css";
import linkdin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import twitter from "../../assets/images/twitter.png";

function Footer() {
  return (
    <div className="footer">
      <h1 className="footer-title">THANKS PEXELS</h1>
      <div className="social">
        <a href="https://github.com" className="social-link">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com" className="social-link">
          <img src={linkdin} alt="linkdin" />
        </a>
        <a href="https://www.twitter.com" className="social-link">
          <img src={twitter} alt="twitter" />
        </a>
      </div>

      <div className="team">
        <p className="copyright">© Copyright 2023 Wild Code School</p>
        <p className="crew">
          Sébastien Lambranca - Thierry Vicente - Gael Katambaie - Mohamed Amine
          Boumendjel
        </p>
      </div>
    </div>
  );
}

export default Footer;
