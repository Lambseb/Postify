import { NavLink } from "react-router-dom";
import Mountain from "../../assets/images/Mountain.jpg";
import Restaurent from "../../assets/images/Restaurent.jpg";
import Metro from "../../assets/images/Metro.jpg";
import Moon from "../../assets/images/Moon.jpg";
import "./presentation.css";

function Presentation() {
  return (
    <div className="Presentation">
      <h1 className="text-title">Welcome to POSTIFY</h1>
      <h3 className="text-presentation">
        Send a 100% customizable Postcard with your texts and Pictures!
      </h3>
      <div className="images">
        <img className="start-image" src={Mountain} alt="Mountain" />
        <img className="mid-image" src={Restaurent} alt="Restaurent" />
        <img className="mid-image" src={Metro} alt="Metro" />
        <img className="end-image" src={Moon} alt="Moon" />
      </div>
      <div className="button">
        <NavLink to="/images" className="start">
          Start
        </NavLink>
      </div>
    </div>
  );
}

export default Presentation;
