import React, { useState, useEffect } from 'react';

import Note from './Note';

export default function Notes(props) {

  const [noteCount, setNoteCount] = useState(Object.keys(props.notes).length);

  useEffect(() => {
    const tempNotes = props.notes;

    console.log(tempNotes);

  }, [props.notes]);

  const handleNewNote = () => {
    const tempNotes = props.notes;
    
    tempNotes[noteCount + 1] = '';
    setNoteCount(noteCount + 1);

    props.setNotes({...tempNotes});
  }

  const noteComponents = Object.keys(props.notes).map(noteId => {
    return(
      <div className={'note'}>
        <p className={'note-bullet'}> - </p>
        <Note note={props.notes[noteId]} noteId={noteId} setNotes={props.setNotes} notes={props.notes}></Note>
      </div>
    );
  });

  return(
    <div className={'todo-notes'}>
      <div className={'notes-header'}>
        <p className={'notes-title'}>Notes:</p>
        <p className={'new-note-button'} onClick={handleNewNote}>+ New Note</p>
      </div>
      <div className={'notes-container'}>
        {noteComponents}
      </div>
    </div>
  );
};