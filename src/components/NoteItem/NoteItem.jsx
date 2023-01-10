import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import DeleteButton from "../DeleteButton";
import ArchiveButton from "../ArchiveButton";
import NoteItemBody from "../NoteItemBody/NoteItemBody";

import './NoteItem.css'

function NoteItem({ id, title, content, isArchived, onArchive, onDelete }) {
  return (
    <div className="note-card">
      <Link to={`/note/${id}`} className="linked-div note-body-card">
        <NoteItemBody title={title} content={content} />
      </Link>
      <div className="c-button">
        <ArchiveButton id={id} isArchived={isArchived} onArchive={onArchive} />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  isArchived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default NoteItem;
