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
      status: 'complete',
      tags: ['programming', 'job hunt'],
      notes: {}
    },
    2: {
      id: 2,
      title: 'NorthOne assessment demo',
      description: 'Present your NorthOne assessment to Kristen',
      due: new Date(),
      status: 'pending',
      tags: ['job hunt'],
      notes: {
        1: 'Call is at 1pm, this Wednesday'
      }
    },
    3: {
      id: 3,
      title: 'Clean kitchen',
      description: 'Don\'t forget to do the dishes!',
      due: new Date(),
      status: 'pending',
      tags: ['household'],
      notes: {}
    },
    4: {
      id: 4,
      title: 'Get groceries',
      description: 'Sobeys has a sale today',
      due: new Date(),
      status: 'pending',
      tags: ['household'],
      notes: {
        1: 'bread',
        2: 'bananas',
        3: 'eggs'
      }
    }
  };

  const [toDos, setToDos] = useState(placeHolderToDos);
  const [toDoCount, setToDoCount] = useState(Object.keys(toDos).length);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const matchesSearchTerm = function(todo) {
    if(todo.title.toLowerCase().includes(searchTerm.toLowerCase()) || todo.description.toLowerCase.includes(searchTerm.toLowerCase())) {
      return true;
    };
    return false;
  };

  const toDoComponents = Object.keys(toDos).map(key => {
    if (filter === 'all') {
      if(matchesSearchTerm(toDos[key])) {
        return <Todo
          key={toDos[key].id}
          id={toDos[key].id}
          title={toDos[key].title}
          description={toDos[key].description}
          status={toDos[key].status}
          tags={toDos[key].tags}
          toDos={toDos}
          setToDos={setToDos}
          notes={toDos[key].notes}
        ></Todo>;
      }
    } else if (toDos[key].status === filter) {
      if(matchesSearchTerm(toDos[key])) {
        return <Todo
          key={toDos[key].id}
          id={toDos[key].id}
          title={toDos[key].title}
          description={toDos[key].description}
          status={toDos[key].status}
          tags={toDos[key].tags}
          toDos={toDos}
          setToDos={setToDos}
          notes={toDos[key].notes}
        ></Todo>;
      }
    }

    return null;
  });

  return (
    <>
      <Nav setToDos={setToDos} toDos={toDos} toDoCount={toDoCount} setToDoCount={setToDoCount} filter={filter} setFilter={setFilter} searchTerm={searchTerm} setSearchTerm={setSearchTerm}></Nav>
      <div id={'app'}>
        <div id={'todo-container'}>
          {toDoComponents.length === 0? <p className={'unmatched-filter-notice'}>You have no tasks that meet this filter!</p> : toDoComponents}
        </div>
      </div>
    </>
  );
}

export default App;
