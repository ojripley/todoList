import React, { useState, useEffect } from 'react';

import EditableText from './EditableText';

import '../styles/App.scss';

export default function ToDo(props) {
  const [id, setId] = useState(props.id);
  const [title, setTitle] = useState(props.title || '');
  const [description, setDescription] = useState(props.description || '');
  const [status, setStatus] = useState(props.status);


  useEffect(() => {
    console.log(status);
  }, [status]);

  useEffect(() => {
    console.log(title);
    console.log(description);
  }, [title, description]);

  const handleDelete = () => {
    console.log('deleting');
    const tempToDos = props.toDos;

    delete tempToDos[id];

    props.setToDos({...tempToDos});
  };

  return(
    <div className={'todo'} id={props.id}>
      <span className={'todo-title'}>
        <text className={'todo-field-label'}>Title:</text>
        <EditableText className={'todo-title-text'} text={title} setValue={setTitle} defaultText={'Add a title'}></EditableText>
      </span>
      <span className={'todo-description'}>
        <text className={'todo-field-label'}>Description:</text>
        <EditableText className={'todo-description-text'} text={description} setValue={setDescription} defaultText={'Add a description'}></EditableText>
      </span>
      <span className={'todo-status'}>
        <text className={'todo-status-button'} id={status === 'Pending' ? 'selected' : 'not-selected'} onClick={() => setStatus('Pending')}>Pending</text>
        <text className={'todo-status-button'} id={status === 'In Progress' ? 'selected' : 'not-selected'} onClick={() => setStatus('In Progress')}>In Progress</text>
        <text className={'todo-status-button'} id={status === 'Complete' ? 'selected' : 'not-selected'} onClick={() => setStatus('Complete')}>Complete</text>
      </span>
      <span className={'todo-options'}>
        <text>time placeholder</text>
        <text className={'todo-delete'} onClick={handleDelete}>Delete</text>
      </span>
    </div>
  );
};