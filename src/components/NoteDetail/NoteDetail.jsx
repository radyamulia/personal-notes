import React from "react";
import PropTypes from "prop-types";

function NoteDetail({ title, content, createdAt, isArchived }) {
  return (
    <div>
      <h1>{title}</h1>
      <br />
      <p>{content}</p>
      <p className="note-detail__details">Created at: {createdAt.toString()}</p>
      <p className="note-detail__details">{isArchived ? "Note is Archived" : "Note is not Archived"}</p>
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
};

export default NoteDetail;
