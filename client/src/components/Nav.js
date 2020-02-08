import React from 'react';

import '../styles/Nav.scss';

export default function Nav(props) {

  const handleNewToDo = () => {
    const newToDo = {
      id: 0,
      title: '',
      description: '',
      due: '',
      tags: []
    };

    props.setToDos(prev => [...prev, newToDo]);
  }

  return(
    <div id={'nav'}>
      <text id={'nav-title'}>toDoToDay</text>
      <div id={'nav-buttons'}>
        <text id={'new-todo-button'} onClick={handleNewToDo}>+ New Todo</text>
      </div>
    </div>
  );
};