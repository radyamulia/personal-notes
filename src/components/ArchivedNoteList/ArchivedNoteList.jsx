import React from "react";
import NoteItem from "../NoteItem";
import PropTypes from "prop-types";

import './ArchivedNoteList.css'

function ArchivedNoteList({ notes, onDelete, onArchive }) {
  const archived = notes.filter((note) => {
    return note.isArchived === true;
  });

  if (archived.length === 0) {
    return (
      <div className="note-list">
        <h2 className="list-title list-title__archived">Archived Note List</h2>
        <p>List empty.</p>
      </div>
    );
  }

  return (
    <div className="note-list">
      <h2 className="list-title list-title__archived">Archived Note List</h2>

      {archived.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          onArchive={onArchive}
          onDelete={onDelete}
          {...note}
        />
      ))}
    </div>
  );
}

ArchivedNoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchivedNoteList;
