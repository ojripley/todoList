import React, { useState } from 'react';

import Nav from './components/Nav';
import Category from './components/Category';
import EditableText from './components/EditableText';

import './App.css';

function App() {

  const [categories, setCategories] = useState([{title: 'cleaning'}, {title: 'work'}]);

  const categoryComponents = categories.map(cat => {
    return <Category title={cat.title}></Category>;
  });

  return (
    <>
      <Nav></Nav>
      <div id={'app'}>
        {categoryComponents}
      </div>
      <EditableText defaultText={'entersomestuff'}></EditableText>
    </>
  );
}

export default App;
