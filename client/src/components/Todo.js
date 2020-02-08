import React, { useState, useEffect } from 'react';

import EditableText from './EditableText';

import '../styles/App.scss';

export default function ToDo(props) {
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


  return(
    <div className={'todo'} id={props.id}>
      <span className={'todo-title'}>
        <text className={'todo-field-label'}>Title:</text>
        <EditableText className={'todo-title-text'} text={title} setValue={setTitle} defaultText={'Enter a title'}></EditableText>
      </span>
      <span className={'todo-description'}>
        <text className={'todo-field-label'}>Description:</text>
        <EditableText className={'todo-description-text'} text={description} setValue={setDescription} defaultText={'Enter a description'}></EditableText>
      </span>
      <span className={'todo-status'}>
        <text className={'todo-status-button'} id={status === 'Pending' ? 'selected' : 'not-selected'} onClick={() => setStatus('Pending')}>Pending</text>
        <text className={'todo-status-button'} id={status === 'In Progress' ? 'selected' : 'not-selected'} onClick={() => setStatus('In Progress')}>In Progress</text>
        <text className={'todo-status-button'} id={status === 'Complete' ? 'selected' : 'not-selected'} onClick={() => setStatus('Complete')}>Complete</text>
      </span>
    </div>
  );
};