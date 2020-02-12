import React, { useState, useEffect } from 'react';
import EditableText from './EditableText';

export default function Note(props) {

  const [noteText, setNoteText] = useState(props.note || '');

  useEffect(() => {
    const tempNotes = props.notes;

    tempNotes[props.noteId] = noteText;

    props.setNotes({...tempNotes});
  }, [noteText]);

  return (
    <div className={'note'}>
      <EditableText text={noteText} setValue={setNoteText} width={'25em'} defaultText={'Add a note...'}></EditableText>
    </div>
  );
};