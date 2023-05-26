import React, { useState,useEffect } from "react";
import { NoteStyle, Icons, DeleteIcon } from "./NoteStyle";
import { MdOutlineNoteAdd, MdDeleteForever } from "react-icons/md";


function NewNote({ note, onClick, text, cardBg }) {
  const [newCardBg, setNewCardBg] = useState();

  useEffect (() => {
    !newCardBg && setNewCardBg(cardBg) 
  },[newCardBg])
  return (
    <NoteStyle className={`card ${newCardBg}`}>
      <div className="card-header text-right">
        <Icons>
          <MdOutlineNoteAdd />
          <DeleteIcon>
            <MdDeleteForever onClick={() => onClick(note.id)} />
          </DeleteIcon>
        </Icons>
      </div>
      <div className="card-body">
        <textarea style={{ border: "none", outline: "none" }}>{text}</textarea>
      </div>
    </NoteStyle>
  );
}

export default NewNote;
