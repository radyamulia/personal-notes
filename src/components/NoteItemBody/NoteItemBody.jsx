import React from "react";
import PropTypes from "prop-types"

function NoteItemBody({ title, content }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

NoteItemBody.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
}

export default NoteItemBody