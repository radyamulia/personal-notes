import React from "react";
import PropTypes from "prop-types"

function NoteItemBody({ title, body }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

NoteItemBody.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
}

export default NoteItemBody