import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import NoteItem from "../NoteItem/NoteItem";
import { LocaleContext } from "../../contexts";

import "./NoteList.css";

function NoteList({ notes, onDelete, onArchive }) {
  const { locale } = useContext(LocaleContext);
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  if (notes.length === 0) {
    return (
      <div className="note-list">
        <h2 className="list-title list-title__unarchived">
          {locale === "id" ? "List Catatan" : "Note List"}
        </h2>
        <p>{isLoading ? "Loading..." : "List empty."}</p>
      </div>
    );
  }

  return (
    <div className="note-list">
      <h2 className="list-title list-title__unarchived">
        {locale === "id" ? "List Catatan" : "Note List"}
      </h2>

      {notes.map((note) => (
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

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteList;
