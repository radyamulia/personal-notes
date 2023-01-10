import React from "react";
import PropTypes from "prop-types";

import './ArchiveButton.css'

function ArchiveButton({ id, isArchived, onArchive }) {
  if (isArchived)
    return (
      <button
        className="btn-item btn-item__archive"
        onClick={() => onArchive(id)}
      >
        Unarchive
      </button>
    );
  else if (!isArchived)
    return (
      <button
        className="btn-item btn-item__archive"
        onClick={() => onArchive(id)}
      >
        Archive
      </button>
    );
}

ArchiveButton.propTypes = {
  id: PropTypes.number.isRequired,
  isArchived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
