import { React, useRef } from "react";
import * as htmlToImage from "html-to-image";
import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import {
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import "./cardGeneration.css";

function CardGeneration({ savedColor, savedFontColor, savedFont, savedSize }) {
  const selectedPicture = useLoaderData();

  const elementRef = useRef(null);
  const handleDownload = () => {
    htmlToImage
      .toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "e-card";
        link.href = dataUrl;
        link.click();
      });
  };

  return (
    selectedPicture && (
      <>
        <div className="gen-card" ref={elementRef}>
          <div>
            <textarea
              style={{
                background: savedColor,
                color: savedFontColor,
                fontFamily: savedFont,
                fontSize: savedSize,
              }}
              className="text-card"
            />
          </div>
          <div>
            {selectedPicture.src && (
              <img
                src={selectedPicture.src.medium}
                alt={selectedPicture.alt}
                className="picture-card"
              />
            )}
          </div>
        </div>
        <div className="share-buttons">
          <div className="share">
            <EmailShareButton url={selectedPicture.src.medium}>
              <EmailIcon round />
            </EmailShareButton>
          </div>
          <div className="share">
            <FacebookShareButton url={selectedPicture.src.medium}>
              <FacebookIcon round />
            </FacebookShareButton>
          </div>
          <div className="share">
            <TwitterShareButton url={selectedPicture.src.medium}>
              <TwitterIcon round />
            </TwitterShareButton>
          </div>
          <button type="button" className="share" onClick={handleDownload}>
            Download
          </button>
        </div>
      </>
    )
  );
}

CardGeneration.propTypes = {
  savedColor: PropTypes.string.isRequired,
  savedSize: PropTypes.string.isRequired,
  savedFontColor: PropTypes.string.isRequired,
  savedFont: PropTypes.string.isRequired,
};

export default CardGeneration;
