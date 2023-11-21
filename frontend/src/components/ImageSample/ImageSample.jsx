import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function ImageSample({ pictures, setPictures }) {
  useEffect(() => {
    fetch("https://api.pexels.com/v1/curated?page=1&per_page=25", {
      headers: {
        Authorization:
          "pkrz3obauvMROPUqPm23X1qo6pFVQkjeK34WzNMbavyTToosZhorSTpJ",
      },
    })
      .then((response) => response.json())
      .then((data) => setPictures(data.photos))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="grid-container">
      {pictures.map((pics) => (
        <NavLink to={`/postcard/${pics.id}`} key={pics.id}>
          <img
            key={pics.id}
            src={pics.src.medium}
            alt={pics.alt}
            className="image-results"
          />{" "}
        </NavLink>
      ))}
    </div>
  );
}

ImageSample.propTypes = {
  pictures: PropTypes.string.isRequired,
  setPictures: PropTypes.func.isRequired,
};

export default ImageSample;
