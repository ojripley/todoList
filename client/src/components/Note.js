import React, { useState, useEffect } from 'react';
import EditableText from './EditableText';

export default function Note(props) {

  const [noteId, setNoteId] = useState(props.noteId);
  const [noteText, setNoteText] = useState(props.note || '');

  useEffect(() => {
    const tempNotes = props.notes;

    tempNotes[props.noteId] = noteText;

    props.setNotes({...tempNotes});
  }, [noteText]);

  return (
    <div className={'note'}>
      <EditableText text={noteText} setValue={setNoteText} width={'32em'}></EditableText>
    </div>
  );
};