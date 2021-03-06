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

    tempToDos[id] = {
      id: id,
      title: title,
      description: description,
      dueDate: selectedDate,
      status: status,
      tags: tags,
      notes: notes
    };

    props.setToDos({ ...tempToDos });
  }, [title, description, status, tags, id, selectedDate, notes, notes.length]);

  const handleDateChange = date => {
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
        <p>Task:</p>
        <EditableText className={'todo-title-text'} text={title} setValue={setTitle} defaultText={'Add a title'} width={'33em'}></EditableText>
      </span>
      <span className={'todo-description'}>
        <p>Description:</p>
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
          <p className={status === 'pending' ? 'todo-status-button-selected' : 'todo-status-button-not-selected'} onClick={() => setStatus('pending')}>Pending</p>
          <p className={status === 'in progress' ? 'todo-status-button-selected' : 'todo-status-button-not-selected'} onClick={() => setStatus('in progress')}>In Progress</p>
          <p className={status === 'complete' ? 'todo-status-button-selected' : 'todo-status-button-not-selected'} onClick={() => setStatus('complete')}>Complete</p>
        </span>
        <p className={'todo-delete'} onClick={handleDelete}>Delete</p>
      </span>
    </div>
  );
};