import React from "react";
import PropTypes from 'prop-types';
import NoteItem from "../NoteItem/NoteItem";

import './UnarchivedNoteList.css'

function UnarchivedNoteList({ notes, onDelete, onArchive }) {
  const unArchived = notes.filter((note) => {
    return note.isArchived === false;
  });

  if (unArchived.length === 0) {
    return (
      <div className="note-list">
        <h2 className="list-title list-title__unarchived">Note List</h2>
        <p>List empty.</p>
      </div>
    );
  }

  return (
    <div className="note-list">
      <h2 className="list-title list-title__unarchived">Note List</h2>

      {unArchived.map((note) => (
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
};

UnarchivedNoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
}

export default UnarchivedNoteList;
