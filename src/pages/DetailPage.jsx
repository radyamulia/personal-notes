import React, { useState, useEffect } from "react";
import NoteDetail from "../components/NoteDetail";
import { getNote } from "../utils/api";
import { useParams } from "react-router-dom";
import Error404Page from "./Error404Page";

function DetailPage() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
    });

    // cleanup function
    return () => setNote(null);
  }, [id]);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  if (note === null) {
    return isLoading ? <h4>Loading...</h4> : <Error404Page />
  }

  return <NoteDetail {...note} />
}

export default DetailPage;
