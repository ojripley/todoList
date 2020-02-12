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
  const [id] = useState(props.id);
  const [title, setTitle] = useState(props.title || '');
  const [description, setDescription] = useState(props.description || '');
  const [status, setStatus] = useState(props.status);
  const [tags] = useState(props.tags);
  const [notes, setNotes] = useState(props.notes || []);
  const [selectedDate, setSelectedDate] = useState(props.dueDate);

  useEffect(() => {
    const tempToDos = props.toDos;

    console.log('something changed');

    tempToDos[id] = {
      id: id,
      title: title,
      description: description,
      dueDate: selectedDate,
      status: status,
      tags: tags,
      notes: notes
    };

    console.log(tempToDos[id].dueDate);

    props.setToDos({ ...tempToDos });
  }, [title, description, status, tags, id, selectedDate, notes, notes.length]);

  const handleDateChange = date => {
    console.log(date);
    setSelectedDate(date);
  };

  const handleDelete = () => {
    const tempToDos = props.toDos;
    delete tempToDos[id];
    props.setToDos({ ...tempToDos });
  };

  return (
    <div className={'todo'} id={props.id}>
      <span className={'todo-title'}>
        <text className={'todo-field-label'}>Task:</text>
        <EditableText className={'todo-title-text'} text={title} setValue={setTitle} defaultText={'Add a title'} width={'33em'}></EditableText>
      </span>
      <span className={'todo-description'}>
        <text className={'todo-field-label'}>Description:</text>
        <EditableText className={'todo-description-text'} text={description} setValue={setDescription} defaultText={'Add a description'} multiline={true} width={'33em'}></EditableText>
      </span>
      <Notes notes={props.notes} setNotes={setNotes}></Notes>
      <span className={'todo-options'}>
        <div className={'time-picker-container'}>
          <MuiPickersUtilsProvider className={'timePicker'} utils={DateFnsUtils}>
            <DateTimePicker value={selectedDate} onChange={handleDateChange} />
          </MuiPickersUtilsProvider>
        </div>
        <span className={'todo-status'}>
          <text className={'todo-status-button'} id={status === 'pending' ? 'selected' : 'not-selected'} onClick={() => setStatus('pending')}>Pending</text>
          <text className={'todo-status-button'} id={status === 'in progress' ? 'selected' : 'not-selected'} onClick={() => setStatus('in progress')}>In Progress</text>
          <text className={'todo-status-button'} id={status === 'complete' ? 'selected' : 'not-selected'} onClick={() => setStatus('complete')}>Complete</text>
        </span>
        <p className={'todo-delete'} onClick={handleDelete}>Delete</p>
      </span>
    </div>
  );
};