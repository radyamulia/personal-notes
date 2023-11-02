import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "components/SearchBar";
import NoteList from "components/NoteList";
import {
  getArchivedNotes,
  deleteNote,
  unarchiveNote,
} from "utils/api";

function ArchivedPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
    });

    // Cleanup function
    return () => setNotes([]);
  }, []);

  const onKeywordChange = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  /**
   * @description - Sets note's isArchived to true
   * @param {number} id
   */
  async function onUnarchiveHandler(id) {
    await unarchiveNote(id);
    // updates the notes state
    const { data } = await getArchivedNotes();
    setNotes(data);
  }

  /**
   * @description - Filters data array to delete selected note after clicking button
   * @param {number} id
   */
  async function onDeleteHandler(id) {
    await deleteNote(id);
    // updates the notes state
    const { data } = await getArchivedNotes();
    setNotes(data);
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <>
      <SearchBar keyword={keyword} keywordChange={onKeywordChange} />
      <br />
      <br />
      <br />
      <NoteList
        notes={filteredNotes}
        onDelete={onDeleteHandler}
        onArchive={onUnarchiveHandler}
      />
    </>
  );
}

export default ArchivedPage;
