import React from "react";
import NoteItem from "./NoteItem";

const ArchivedNoteList = ({ notes, onDelete, onArchive }) => {
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
};

export default ArchivedNoteList;
