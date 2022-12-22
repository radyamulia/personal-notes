import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import NoteItemBody from "./NoteItemBody";

function NoteItem({ id, title, content, isArchived, onArchive, onDelete }) {
    return (
        <div className="note-card">
            <NoteItemBody title={title} content={content}/>
            <div className="c-button">
                <ArchiveButton id={id} isArchived={isArchived} onArchive={onArchive}/>
                <DeleteButton id={id} onDelete={onDelete}/>
            </div>
        </div>
    )
}


export default NoteItem