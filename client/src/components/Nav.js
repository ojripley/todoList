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
      <div id={'nav-controls'}>
        <p id={'filter-toggle-text'}>Showing:</p>
        <span id={'filter-toggle'}>
          <text className={'filter-button'} id={props.filter === 'All' ? 'selected' : 'not-selected'} onClick={() => props.setFilter('All')}>All</text>
          <text className={'filter-button'} id={props.filter === 'Pending' ? 'selected' : 'not-selected'} onClick={() => props.setFilter('Pending')}>Pending</text>
          <text className={'filter-button'} id={props.filter === 'In Progress' ? 'selected' : 'not-selected'} onClick={() => props.setFilter('In Progress')}>In Progress</text>
          <text className={'filter-button'} id={props.filter === 'Complete' ? 'selected' : 'not-selected'} onClick={() => props.setFilter('Complete')}>Complete</text>
        </span>
        <text id={'new-todo-button'} onClick={handleNewToDo}>+ New Todo</text>
      </div>
    </div>
  );
};