import React from "react";
import TitleMaxChar from "./TitleLimitCharCounter";

class NoteInput extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      content: "",
      isArchived: false,
      createdAt: "",

      titleLengthCounter: 0,
      titleLengthLimit: 50,
    };

    // binding this context to event handler
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onContentChangeHandler = this.onContentChangeHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    const { titleLengthLimit } = this.state;
    console.log(event.target.value.length);
    if (event.target.value.length > titleLengthLimit) return; // prevent the counter fromm overflowing by 1
    this.setState(() => {
      return {
        title: event.target.value.slice(0, titleLengthLimit),
        titleLengthCounter: event.target.value.length,
      };
    });
  }

  onContentChangeHandler(event) {
    this.setState(() => {
      return {
        content: event.target.value,
      };
    });
  }

  onArchivedHandler(event) {
    this.setState(() => {
      return {
        isArchived: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    // menghentikan aksi default dari tombol submit
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    const { title, content, titleLengthCounter, titleLengthLimit } = this.state;

    return (
      <form className="note-input" onSubmit={this.onSubmitHandler}>
        <h2 className="form-title">New Note</h2>
        <label htmlFor="title">Note Title</label>
        <div className="c-title-input">
          <TitleMaxChar
            titleLengthLimit={titleLengthLimit}
            titleLengthCounter={titleLengthCounter}
          />
          <input
            type="text"
            id="title"
            className="input input__title"
            value={title}
            onChange={this.onTitleChangeHandler}
            required
          />
        </div>
        <label htmlFor="content">Note Content</label>
        <textarea
          type="text"
          id="content"
          className="input input__content"
          value={content}
          onChange={this.onContentChangeHandler}
          required
        />
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    );
  }
}

export default NoteInput;
