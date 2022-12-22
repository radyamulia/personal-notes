import React from "react";

function ArchiveButton({ id, isArchived, onArchive }) {
    if (isArchived)
        return <button className="btn-item btn-item__archive" onClick={() => onArchive(id)}>Unarchive</button>
    else if (!isArchived)
        return <button className="btn-item btn-item__archive" onClick={() => onArchive(id)}>Archive</button>

}

export default ArchiveButton