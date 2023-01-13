import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes, deleteNote, archiveNote } from "../utils/api";
import "../styles/index.css";

function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });

    // Cleanup func
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
  async function onArchiveHandler(id) {
    await archiveNote(id);
    // updates the notes state
    const { data } = await getActiveNotes();
    setNotes(data);
  }

  /**
   * @description - Filters data array to delete selected note after clicking button
   * @param {number} id
   */
  async function onDeleteHandler(id) {
    await deleteNote(id);
    // updates the notes state
    const { data } = await getActiveNotes();
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
        onArchive={onArchiveHandler}
      />
    </>
  );
}

export default MainPage;
