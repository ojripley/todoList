import React, { useState, useEffect } from 'react';

import Note from './Note';

export default function Notes(props) {

  const [noteCount, setNoteCount] = useState(Object.keys(props.notes).length);

  const handleRemoveNote = (noteId) => {
    const tempNotes = props.notes

    delete tempNotes[noteId];

    props.setNotes({...tempNotes});
  };

  const handleNewNote = () => {
    const tempNotes = props.notes;
    
    tempNotes[noteCount + 1] = '';
    setNoteCount(noteCount + 1);

    props.setNotes({...tempNotes});
  }

  const noteComponents = Object.keys(props.notes).map(noteId => {
    return(
      <div className={'note'} key={noteId}>
        <p className={'note-bullet'}> - </p>
        <Note note={props.notes[noteId]} noteId={noteId} setNotes={props.setNotes} notes={props.notes}></Note>
        <p className={'remove-note-button'} onClick={() => handleRemoveNote(noteId)}>x</p>
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