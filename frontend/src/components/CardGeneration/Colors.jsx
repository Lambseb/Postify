import PropTypes from "prop-types";
import "./cardGeneration.css";

function Colors({
  savedColor,
  setSavedColor,
  savedFontColor,
  setSavedFontColor,
}) {
  return (
    <div className="input-buttons">
      <div className="color-selector">
        <input
          onChange={(e) => setSavedColor(e.target.value)}
          type="color"
          value={savedColor}
          className="input-color"
        />
        <p className="selection">Background color</p>
      </div>
      <div className="color-selector">
        <input
          onChange={(e) => setSavedFontColor(e.target.value)}
          type="color"
          value={savedFontColor}
          className="input-color"
        />
        <p className="selection">Fonts color</p>
      </div>
    </div>
  );
}

Colors.propTypes = {
  savedColor: PropTypes.string.isRequired,
  setSavedColor: PropTypes.func.isRequired,
  savedFontColor: PropTypes.string.isRequired,
  setSavedFontColor: PropTypes.func.isRequired,
};

export default Colors;
