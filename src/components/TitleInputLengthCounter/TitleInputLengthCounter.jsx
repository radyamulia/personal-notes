import React from "react";
import PropTypes from "prop-types";

function TitleInputLengthCounter({ titleLengthLimit, titleLengthCounter }) {
  return titleLengthCounter < titleLengthLimit - 1 ? (
    <p className="remaining-char">
      Remaining Characters: {titleLengthCounter}/{titleLengthLimit}
    </p>
  ) : (
    <p className="remaining-char">
      Remaining Character: {titleLengthCounter}/{titleLengthLimit}
    </p>
  );
}

TitleInputLengthCounter.propTypes = {
  titleLengthLimit: PropTypes.number.isRequired,
  titleLengthCounter: PropTypes.number.isRequired,
};

export default TitleInputLengthCounter;
