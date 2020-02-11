import React, { useState, useEffect } from 'react';

import EditableText from './EditableText';
import Notes from './Notes';

import '../styles/App.scss';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DateTimePicker,
} from '@material-ui/pickers';

export default function ToDo(props) {
  const [id, setId] = useState(props.id);
  const [title, setTitle] = useState(props.title || '');
  const [description, setDescription] = useState(props.description || '');
  const [status, setStatus] = useState(props.status);
  const [tags, setTags] = useState(props.tags);
  const [selectedDate, handleDateChange] = useState(props.due || new Date());

  useEffect(() => {
    const tempToDos = props.toDos;

    tempToDos[id] = {
      id: id,
      title: title,
      description: description,
      due: selectedDate,
      status: status,
      tags: tags
    };

    props.setToDos({...tempToDos});
  }, [title, description, status, tags, id, selectedDate]);

  const handleDelete = () => {
    const tempToDos = props.toDos;
    delete tempToDos[id];
    props.setToDos({...tempToDos});
  };

  return(
    <div className={'todo'} id={props.id}>
        <span className={'todo-title'}>
          <text className={'todo-field-label'}>Task:</text>
          <EditableText className={'todo-title-text'} text={title} setValue={setTitle} defaultText={'Add a title'}></EditableText>
        </span>
        <span className={'todo-description'}>
          <text className={'todo-field-label'}>Description:</text>
          <EditableText className={'todo-description-text'} text={description} setValue={setDescription} defaultText={'Add a description'}></EditableText>
        </span>
        <Notes></Notes>
        <span className={'todo-options'}>
          <div className={'time-picker-container'}>
            <MuiPickersUtilsProvider className={'timePicker'} utils={DateFnsUtils}>
              <DateTimePicker value={selectedDate} onChange={handleDateChange} />
            </MuiPickersUtilsProvider>
          </div>
        <span className={'todo-status'}>
          <text className={'todo-status-button'} id={status === 'Pending' ? 'selected' : 'not-selected'} onClick={() => setStatus('Pending')}>Pending</text>
          <text className={'todo-status-button'} id={status === 'In Progress' ? 'selected' : 'not-selected'} onClick={() => setStatus('In Progress')}>In Progress</text>
          <text className={'todo-status-button'} id={status === 'Complete' ? 'selected' : 'not-selected'} onClick={() => setStatus('Complete')}>Complete</text>
        </span>
          <p className={'todo-delete'} onClick={handleDelete}>Delete</p>
        </span>
    </div>
  );
};