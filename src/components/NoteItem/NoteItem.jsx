import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import DeleteButton from "../DeleteButton";
import ArchiveButton from "../ArchiveButton";
import NoteItemBody from "../NoteItemBody/NoteItemBody";

import './NoteItem.css'

function NoteItem({ id, title, body, archived, onArchive, onDelete }) {
  return (
    <div className="note-card">
      <Link to={`/note/${id}`} className="linked-div note-body-card">
        <NoteItemBody title={title} body={body} />
      </Link>
      <div className="c-button">
        <ArchiveButton id={id} archived={archived} onArchive={onArchive} />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default NoteItem;
