import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import UnarchivedNoteList from "../components/UnarchivedNoteList";
import SearchBar from "../components/SearchBar";
import { getNotes, deleteNote, archiveNote, searchNotes } from "../utils/data";
import "../styles/index.css";

function MainPage() {
  const [notes, setNotes] = useState(getNotes());
  const [searchParams, setSearchParams] = useSearchParams("");

  const activeKeyword = searchParams.get("title");
  const [foundNote, setFoundNote] = useState(
    activeKeyword ? searchNotes(activeKeyword) : []
  );

  const onSearchHandler = (keyword) => {
    setSearchParams({ title: keyword });
    setFoundNote(searchNotes(keyword));
  };

  /**
   * @description - Sets note's isArchived to true
   * @param {number} id
   */
  const onArchiveHandler = (id) => {
    archiveNote(id);
    // updates the notes state
    setNotes(getNotes());
  };

  /**
   * @description - Filters data array to delete selected note after clicking button
   * @param {number} id
   */
  const onDeleteHandler = (id) => {
    deleteNote(id);
    // updates the notes state
    setNotes(getNotes());
  };

  return (
    <>
      <SearchBar search={onSearchHandler} defaultKeyword={activeKeyword} />
      <br />
      <br />
      <br />
      {!!activeKeyword ? (
        <UnarchivedNoteList
          notes={foundNote}
          onDelete={onDeleteHandler}
          onArchive={onArchiveHandler}
        />
      ) : (
        <UnarchivedNoteList
          notes={notes}
          onDelete={onDeleteHandler}
          onArchive={onArchiveHandler}
        />
      )}
    </>
  );
}

export default MainPage;
