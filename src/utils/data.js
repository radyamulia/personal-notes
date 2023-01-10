let notes = [
  {
    id: 5,
    title: "Default Note isArchived: false",
    content: "This is a default note",
    isArchived: false,
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: 3,
    title: "Default Note isArchived: false",
    content: "This is a default note",
    isArchived: false,
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: 4,
    title: "Default Note isArchived: false",
    content: "This is a default note",
    isArchived: false,
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: 1,
    title: "Default Note isArchived: true",
    content: "This is a default note",
    isArchived: true,
    createdAt: "2022-04-14T04:27:34.572Z",
  },
];

function getNotes() {
  return notes;
}

function addNote(newNote) {
  console.log("adding note..");
  notes = [
    ...notes,
    {
      id: +new Date(),
      createdAt: new Date().toString(),
      isArchived: false,
      ...newNote,
    },
  ];
}

function archiveNote(id) {
  const foundNote = notes.find((note) => note.id === id);
  const selectedNote = notes[notes.indexOf(foundNote)];

  // change the note's isArchived after clicking button
  selectedNote.isArchived
    ? (selectedNote.isArchived = false)
    : (selectedNote.isArchived = true);

  console.log(
    selectedNote.isArchived ? "archiving note.." : "unarchiving note.."
  );
  // update notes
  notes = [...notes];
}

function deleteNote(id) {
  console.log("deleting note..");
  notes = notes.filter((note) => note.id !== id);
}

function searchNotes(keyword) {
  return notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );
}

function getSelectedNote(id) {
  if (!id) {
    return null;
  }

  const filteredNote = notes.filter((note) => note.id === id);

  if (!filteredNote.length) {
    return null;
  }
  return filteredNote[0];
}

export {
  getNotes,
  getSelectedNote,
  addNote,
  deleteNote,
  archiveNote,
  searchNotes,
};
