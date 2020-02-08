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

    console.log(tempToDos);

    tempToDos[id] = newToDo;

    props.setToDos({...tempToDos});
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