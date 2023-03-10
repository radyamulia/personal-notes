import React, { useState } from "react";
import PropTypes from "prop-types";
import TitleInputLengthCounter from "../TitleInputLengthCounter/TitleInputLengthCounter";

import './NoteInput.css'

function NoteInput(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    isArchived: false,
    createdAt: "",
  });
  const { title, content } = note

  const [titleInputLimit, setInputLimit] = useState({
    titleLengthCounter: 0,
    titleLengthLimit: 20,
  });
  const { titleLengthCounter, titleLengthLimit } = titleInputLimit;


  const onTitleChangeHandler = (evt) => {
    const { titleLengthLimit } = titleInputLimit;
    const { value } = evt.target;

    setNote({ ...note, title: value.slice(0, titleLengthLimit) });
    setInputLimit({ ...titleInputLimit, titleLengthCounter: value.length });
  };


  const onContentChangeHandler = (evt) => {
    const { value } = evt.target;
    setNote({ ...note, content: value });
  };


    const onSubmitHandler = (evt) => {
    // stops default action from submit button
    evt.preventDefault();
    props.addNote(note);
  }  

  return (
    <form className="note-input" onSubmit={onSubmitHandler}>
      <h2 className="form-title">New Note</h2>
      <label htmlFor="title">Note Title</label>
      <div className="c-title-input">
        <TitleInputLengthCounter
          titleLengthLimit={titleLengthLimit}
          titleLengthCounter={titleLengthCounter}
        />
        <input
          type="text"
          id="title"
          className="input input__title"
          value={title}
          onChange={onTitleChangeHandler}
          maxLength={20}
          required
        />
      </div>
      <label htmlFor="content">Note Content</label>
      <textarea
        type="text"
        id="content"
        className="input input__content"
        value={content}
        onChange={onContentChangeHandler}
      />
      <button type="submit" className="btn-submit">
        Submit
      </button>
    </form>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
