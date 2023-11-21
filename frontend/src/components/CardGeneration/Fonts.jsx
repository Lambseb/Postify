import PropTypes from "prop-types";

function Fonts({ setSavedFont, setSavedSize, savedSize }) {
  const handleFontChange = (e) => {
    setSavedFont(e.target.value);
  };
  return (
    <div className="modify-font">
      <button
        type="button"
        onClick={() => setSavedSize(savedSize + 1)}
        className="font-size"
      >
        Increase
      </button>

      <div className="select-font">
        <select name="selectFont" onChange={handleFontChange}>
          <option value="Arial">Arial</option>
          <option value="Cambria">Cambria</option>
          <option value="Cochin">Cochin</option>
          <option value="Courier New">Courier New</option>
          <option value="Franklin Gothic Medium">Franklin Gothic Medium</option>
          <option value="Georgia">Georgia</option>
          <option value="Gill Sans">Gill Sans</option>
          <option value="Impact">Impact</option>
          <option value="Inter">Inter</option>
          <option value="Verdana">Verdana</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Trebuchet MS">Trebuchet MS</option>
        </select>
      </div>

      <button
        type="button"
        onClick={() => setSavedSize(savedSize - 1)}
        className="font-size"
      >
        Decrease
      </button>
    </div>
  );
}
Fonts.propTypes = {
  savedSize: PropTypes.string.isRequired,
  setSavedFont: PropTypes.func.isRequired,
  setSavedSize: PropTypes.func.isRequired,
};

export default Fonts;
