import React from "react";
import PropTypes from "prop-types";

function NoteDetail({ title, body, createdAt, archived }) {
  return (
    <div>
      <h1>{title}</h1>
      <br />
      <p>{body}</p>
      <p className="note-detail__details">Created at: {createdAt.toString()}</p>
      <p className="note-detail__details">{archived ? "Note is Archived" : "Note is not Archived"}</p>
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NoteDetail;
