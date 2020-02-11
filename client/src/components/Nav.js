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
            <EditableText id={'search-box'} width={'20em'} multiline={false} setValue={props.setSearchTerm} defaultText={'Search for...'}></EditableText>
          </div>
        </div>
        <div id={'filter-toggle'}>
          <p id={'filter-toggle-text'}>Showing:</p>
          <div id={'filter-toggle-options'}>
             <text className={'filter-button'} id={props.filter === 'all' ? 'selected' : 'not-selected'} onClick={() => props.setFilter('all')}>All</text>
             <text className={'filter-button'} id={props.filter === 'pending' ? 'selected' : 'not-selected'} onClick={() => props.setFilter('pending')}>Pending</text>
             <text className={'filter-button'} id={props.filter === 'in progress' ? 'selected' : 'not-selected'} onClick={() => props.setFilter('in progress')}>In Progress</text>
             <text className={'filter-button'} id={props.filter === 'complete' ? 'selected' : 'not-selected'} onClick={() => props.setFilter('complete')}>Complete</text>
          </div>
        </div>
        <text id={'new-todo-button'} onClick={handleNewToDo}>+ New Task</text>
      </div>
    </div>
  );
};