import React, { useState } from "react";
import NewNote from "./NewNote";
import Button from "../components/Button";
import { v4 as uuidV4 } from "uuid";

function NoteDesignApp() {
  const [notes, setNote] = useState([]);

  const addNewNote = (newNote) => {
    const newNotes = [...notes, newNote];
    newNotes.filter((note) => !note.id && (note.id = uuidV4()));
    setNote(newNotes);
  };

  const deleteNote = (id) => {
    setNote(notes.filter((note) => note.id !== id));
  };

  const card = [
    "card-info",
    "card-danger",
    "card-primary",
    "card-success",
    "card-warning",
  ];
 
  const randomizeBg = () => {
    const random = Math.floor(Math.random() * card.length);
    return card[random]
  }

  return (
    <div>
      <Button
        btnClass={"btn-success"}
        text={"+New Note"}
        onClick={addNewNote}
      />
      <div
        className="container container-sm d-flex"
        style={{ gap: 25, flexWrap: "wrap" }}
      >
        {notes.map((note) => (
          <NewNote key={note.id} note={note} onClick={deleteNote} cardBg={randomizeBg} />
        ))}
      </div>
    </div>
  );
}

export default NoteDesignApp;
