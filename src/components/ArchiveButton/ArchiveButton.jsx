import React from "react";
import PropTypes from "prop-types";

import './ArchiveButton.css'

function ArchiveButton({ id, archived, onArchive }) {
  if (archived)
    return (
      <button
        className="btn-item btn-item__archive"
        onClick={() => onArchive(id)}
      >
        Unarchive
      </button>
    );
  else if (!archived)
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
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
