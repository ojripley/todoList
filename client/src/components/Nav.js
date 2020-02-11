import React from 'react';

import '../styles/Nav.scss';

export default function Nav(props) {

  const handleNewToDo = () => {
    const id = props.toDoCount + 1;
    props.setToDoCount(props.toDoCount + 1);

    const newToDo = {
      id: id,
      title: '',
      description: '',
      status: 'Pending',
      due: '',
      tags: []
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
        <span id={'filter-toggle'}>
        <p id={'filter-toggle-text'}>Showing:</p>
        <div id={'filter-toggle-options'}>
          <text className={'filter-button'} id={props.filter === 'All' ? 'selected' : 'not-selected'} onClick={() => props.setFilter('All')}>All</text>
          <text className={'filter-button'} id={props.filter === 'Pending' ? 'selected' : 'not-selected'} onClick={() => props.setFilter('Pending')}>Pending</text>
          <text className={'filter-button'} id={props.filter === 'In Progress' ? 'selected' : 'not-selected'} onClick={() => props.setFilter('In Progress')}>In Progress</text>
          <text className={'filter-button'} id={props.filter === 'Complete' ? 'selected' : 'not-selected'} onClick={() => props.setFilter('Complete')}>Complete</text>
        </div>
        </span>
        <text id={'new-todo-button'} onClick={handleNewToDo}>+ New Todo</text>
      </div>
    </div>
  );
};