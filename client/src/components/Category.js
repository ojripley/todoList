import React, { useState } from 'react';

import Todo from './Todo';
import EditableText from './EditableText';

export default function Category(props) {

  const [toDos, setToDos] = useState(props.toDos);

  return(
    <div className={'category'}>
      <EditableText className={'category-title'} text={props.title} defaultText={'Category Title'}></EditableText>

    </div>
  );
};