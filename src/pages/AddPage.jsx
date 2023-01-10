import React from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/data";
import NoteInput from "../components/NoteInput";


function AddPage() {
    const navigate = useNavigate();

    /**
     * @description - Adds new note to ../utils/data
     * @param {string} note.title
     * @param {string} note.content
     */
    const onAddNoteHandler = ({title, content}) => {
        const newNote = {
            title: title,
            content: content,
        }
        addNote(newNote);
        navigate("/");
    }

    return <NoteInput addNote={onAddNoteHandler}/>
}

export default AddPage;