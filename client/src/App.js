import React, { useState, useEffect } from 'react';

import Nav from './components/Nav';
import Category from './components/Category';
import Todo from './components/Todo';
import EditableText from './components/EditableText';

import './styles/App.scss';

function App() {

  const placeHolderToDos = {
    1: {
      id: 1,
      title: 'NorthOne assessment',
      description: 'Write a ToDo list webapp!',
      due: 'placeholder',
      status: 'In Progress',
      tags: ['programming']
    },
    2: {
      id: 2,
      title: 'Clean Kitchen',
      description: 'Don\'t for get to do the dishes',
      due: 'placeholder',
      status: 'Pending',
      tags: ['household']
    }
  };

  const [categories, setCategories] = useState([{title: 'cleaning'}, {title: 'work'}]);

  const [toDos, setToDos] = useState(placeHolderToDos);
  const [toDoCount, setToDoCount] = useState(Object.keys(toDos).length);

  const toDoComponents = Object.keys(toDos).map(key => {
    // console.log(todo.id);
    return <Todo
      title={toDos[key].title}
      description={toDos[key].description}
      status={toDos[key].status}
      ></Todo>;
  });

  useEffect(() => {
    console.log(toDoComponents);
    console.log(toDoCount);
  }, [toDos]);

  return (
    <>
      <Nav setToDos={setToDos} toDos={toDos} toDoCount={toDoCount} setToDoCount={setToDoCount}></Nav>
      <div id={'app'}>
        {toDoComponents}
      </div>
    </>
  );
}

export default App;
