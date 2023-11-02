import React from "react";
import { useNavigate } from "react-router-dom";
// import { addNote } from "../utils/data";
import { addNote } from "utils/api";
import NoteInput from "components/NoteInput";


function AddPage() {
    const navigate = useNavigate();

    /**
     * @description - Adds new note to ../utils/data
     * @param {string} note.title
     * @param {string} note.content
     */
    async function onAddNoteHandler(newNote) {
        await addNote(newNote);
        navigate("/");
    }

    return <NoteInput addNote={onAddNoteHandler}/>
}

export default AddPage;