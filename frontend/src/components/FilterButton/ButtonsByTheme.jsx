import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import data from "../../data/data.json";
import "./buttonsbytheme.css";

function ButtonByTheme({ setQuery }) {
  return (
    <div className="btn_block">
      {data &&
        data.map((d) =>
          d.id <= 8 ? (
            <NavLink
              to="/results"
              className="btn_theme"
              type="button"
              key={d.id}
              onClick={() => setQuery(d.description)}
            >
              {d.description.toUpperCase()}
            </NavLink>
          ) : null
        )}
    </div>
  );
}
ButtonByTheme.propTypes = {
  setQuery: PropTypes.func.isRequired,
};
export default ButtonByTheme;
