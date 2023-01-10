import React from "react";
import NoteDetail from "../components/NoteDetail";
import { getSelectedNote } from "../utils/data";
import { useParams } from "react-router-dom";
import Error404Page from "./Error404Page";

function DetailPage() {
  const { id } = useParams();
  const note = getSelectedNote(Number(id));

  if (note === null) {
    return <Error404Page />;
  }

  return <NoteDetail {...note} />;
}

export default DetailPage;
