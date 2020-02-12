import React from 'react';

import '../styles/Nav.scss';
import EditableText from './EditableText';

export default function Nav(props) {

  const handleNewToDo = () => {
    const id = props.toDoCount + 1;
    props.setToDoCount(props.toDoCount + 1);

    const newToDo = {
      id: id,
      title: '',
      description: '',
      status: 'pending',
      due: '',
      tags: [],
      notes: {}
    };

    const tempToDos = props.toDos;
    tempToDos[id] = newToDo;
    props.setToDos({...tempToDos});
  }

  return(
    <div id={'nav'}>
      <p id={'nav-title'}>toDoToDay</p>
      <div id={'nav-line-break'}></div>
      <div id={'nav-controls'}>
        <div id={'search'}>
          <p id={'search-text'}>Search:</p>
          <div id={'search-box-container'}>
            <EditableText id={'search-box'} width={'19em'} multiline={false} setValue={props.setSearchTerm} defaultText={'Search for...'}></EditableText>
          </div>
        </div>
        <div id={'filter-toggle'}>
          <p id={'filter-toggle-text'}>Showing:</p>
          <div id={'filter-toggle-options'}>
            <p className={props.filter === 'all' ? 'filter-button-selected' : 'filter-button-not-selected'} onClick={() => props.setFilter('all')}>All</p>
            <p className={props.filter === 'pending' ? 'filter-button-selected' : 'filter-button-not-selected'} onClick={() => props.setFilter('pending')}>Pending</p>
            <p className={props.filter === 'in progress' ? 'filter-button-selected' : 'filter-button-not-selected'} onClick={() => props.setFilter('in progress')}>In Progress</p>
            <p className={props.filter === 'complete' ? 'filter-button-selected' : 'filter-button-not-selected'} onClick={() => props.setFilter('complete')}>Complete</p>
          </div>
        </div>
        <p id={'new-todo-button'} onClick={handleNewToDo}>+ New Task</p>
      </div>
    </div>
  );
};