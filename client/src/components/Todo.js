import React, { useState } from 'react';

import EditableText from './EditableText';

import '../styles/App.scss';

export default function ToDo(props) {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description || '');
  const [status, setStatus] = useState('pending');

  return(
    <div className={'todo'}>
      <span className={'todo-title'}>
        <text className={'todo-field-label'}>Title:</text>
        <EditableText className={'todo-title-text'} text={props.title} defaultText={'Enter a title'}></EditableText>
      </span>
      <span className={'todo-description'}>
        <text className={'todo-field-label'}>Description:</text>
      <EditableText className={'todo-description-text'} text={props.description} defaultText={'Enter a description'}></EditableText>
      </span>
    </div>
  );
};