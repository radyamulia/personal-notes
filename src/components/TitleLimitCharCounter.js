import React from "react";

const TitleLimitCharCounter = ({ titleLengthLimit, titleLengthCounter }) => {
  return titleLengthCounter < titleLengthLimit - 1 ? (
    <p className="remaining-char">Remaining Characters: {titleLengthCounter}/{titleLengthLimit}</p>
  ) : (
    <p className="remaining-char">Remaining Character: {titleLengthCounter}/{titleLengthLimit}</p>
  );
};

export default TitleLimitCharCounter;
