import React, { useState } from 'react';

import EditableText from './EditableText';

export default function Notes(props) {

  const [displayNewNote, setDisplayNewNote] = useState(false);

  const handleNewNote = () => {
    setDisplayNewNote(true);
  }

  // const noteComponents = props.notes.map(note => {
  //   return(
  //     <p>lol</p>
  //   );
  // });

  return(
    <div className={'todo-notes'}>
      <p className={'new-note-button'} onClick={handleNewNote}>Add a new note + </p>
      {displayNewNote && <EditableText></EditableText>}
    </div>
  );
};