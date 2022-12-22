import React from "react";
import NoteItem from "./NoteItem";

const UnarchivedNoteList = ({ notes, onDelete, onArchive }) => {
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

export default UnarchivedNoteList;
