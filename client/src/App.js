import React, { useState } from 'react';

import Nav from './components/Nav';
import Todo from './components/Todo';

import './styles/App.scss';

function App() {

  const placeHolderToDos = {
    1: {
      id: 1,
      title: 'NorthOne assessment',
      description: 'Write a ToDo list webapp!',
      due: new Date(),
      status: 'In Progress',
      tags: ['programming', 'job hunt']
    },
    2: {
      id: 2,
      title: 'Clean Kitchen',
      description: 'Don\'t forget to do the dishes!',
      due: new Date(),
      status: 'Pending',
      tags: ['household']
    }
  };

  const [toDos, setToDos] = useState(placeHolderToDos);
  const [toDoCount, setToDoCount] = useState(Object.keys(toDos).length);
  const [filter, setFilter] = useState('All');

  const toDoComponents = Object.keys(toDos).map(key => {
    if (filter === 'All') {
      return <Todo
        key={toDos[key].id}
        id={toDos[key].id}
        title={toDos[key].title}
        description={toDos[key].description}
        status={toDos[key].status}
        tags={toDos[key].tags}
        toDos={toDos}
        setToDos={setToDos}
        ></Todo>;
    } else if (toDos[key].status === filter) {
      return <Todo
        key={toDos[key].id}
        id={toDos[key].id}
        title={toDos[key].title}
        description={toDos[key].description}
        status={toDos[key].status}
        tags={toDos[key].tags}
        toDos={toDos}
        setToDos={setToDos}
      ></Todo>;
    } else {
      return null;
    }
  });

  return (
    <>
      <Nav setToDos={setToDos} toDos={toDos} toDoCount={toDoCount} setToDoCount={setToDoCount} filter={filter} setFilter={setFilter}></Nav>
      <div id={'app'}>
        {toDoComponents}
      </div>
    </>
  );
}

export default App;
