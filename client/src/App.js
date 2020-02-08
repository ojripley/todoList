import React, { useState } from 'react';

import Nav from './components/Nav';
import Category from './components/Category';
import Todo from './components/Todo';
import EditableText from './components/EditableText';

import './styles/App.scss';

function App() {

  const placeHolderToDos = [
    {
      id: 1,
      title: 'NorthOne assessment',
      description: 'Write a ToDo list webapp!',
      due: 'placeholder',
      status: 'in progress',
      tags: ['programming']
    },
    {
      id: 2,
      title: 'Clean Kitchen',
      description: 'Don\'t for get to do the dishes',
      due: 'placeholder',
      status: 'pending',
      tags: ['household']
    }
  ];

  const [categories, setCategories] = useState([{title: 'cleaning'}, {title: 'work'}]);

  const [toDos, setToDos] = useState(placeHolderToDos);

  const toDoComponents = toDos.map(todo => {
    return <Todo title={todo.title} description={todo.description}></Todo>;
  });

  return (
    <>
      <Nav setToDos={setToDos} toDos={toDos}></Nav>
      <div id={'app'}>
        {toDoComponents}
      </div>
    </>
  );
}

export default App;
