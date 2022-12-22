import React from "react";
import ArchivedNoteList from "./ArchivedNoteList";
import UnarchivedNoteList from "./UnarchivedNoteList";
// import SearchBar from "./SearchBar";

function NoteList({ notes, onArchive, onDelete }) {  
  return (
    <>
      <UnarchivedNoteList notes={notes} onDelete={onDelete} onArchive={onArchive}/>
      <br />
      <br />    
      <ArchivedNoteList notes={notes} onDelete={onDelete} onArchive={onArchive}/>
    </>
  );
}

export default NoteList;
