// import logo from './logo.svg';
import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import { getData } from "../utils/data";

let filtered = getData()

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      notes: getData(),
      searchInput: "",
    };

    // binding this context to event handlet
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
    this.filteringData();
  }

  onArchiveHandler(id) {
    const { notes } = this.state;
    const found = notes.find((note) => note.id === id);
    const selectedNote = notes[notes.indexOf(found)];

    if (selectedNote.isArchived) {
      selectedNote.isArchived = false;
      this.setState({ selectedNote });
    } else if (!selectedNote.isArchived) {
      selectedNote.isArchived = true;
      this.setState({ selectedNote });
    }
  }

  onSearchHandler(event) {
    this.setState(() => {
      return {
        searchInput: event.target.value,
      };
    });
  }

  // function to always render newdata
  filteringData() {
    const { notes, searchInput } = this.state;
    if (searchInput.length > 0) {
      filtered = notes.filter((note) => { return note.title.toLowerCase().match(searchInput.toLowerCase()) || note.content.toLowerCase().match(searchInput.toLowerCase()) })
    } else {
      filtered = notes
    }
  }

  onAddNoteHandler({ title, content }) {
    this.setState((existingNotes) => {
      return {
        notes: [
          ...existingNotes.notes,
          {
            id: +new Date(),
            title: title,
            content: content,
            isArchived: false,
            createdAt: new Date().toLocaleString(),
          },
        ],
      };
    });
    this.filteringData();
  }

  // rendering App
  render() {
    const { searchInput } = this.state;
    this.filteringData()
    return (
      <>
        <h1 className="app-title">Personal Notes</h1>

        <br />
        <NoteInput addNote={this.onAddNoteHandler} />
        <br />

        <input
          className="search-bar"
          placeholder="Search.."
          type="text"
          value={searchInput}
          onChange={this.onSearchHandler}
        />

        <br />
        <br />
        <br />
        <NoteList
          notes={filtered}
          onArchive={this.onArchiveHandler}
          onDelete={this.onDeleteHandler}
        />
      </>
    );
  }
}

export default App;
