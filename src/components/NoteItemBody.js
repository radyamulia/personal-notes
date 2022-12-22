import React from "react";

function NoteItemBody({ title, content }) {
    return (
        <div className="note-body-card">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default NoteItemBody