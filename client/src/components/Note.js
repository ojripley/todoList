import React, { useState } from 'react';
import EditableText from './EditableText';

export default function Note(props) {

  const [noteText] = useState(props.note || '');

  const changeNote = function(noteText) {
    const tempNotes = props.notes;

    tempNotes[props.noteId] = noteText;

    props.setNotes({ ...tempNotes });
  };

  return (
    <div className={'note'}>
      <EditableText text={noteText} setValue={changeNote} width={'25em'} defaultText={'Add a note...'}></EditableText>
    </div>
  );
};