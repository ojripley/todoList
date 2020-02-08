import React from 'react';

export default function Category(props) {

  return(
    <div className={'category'}>
      <text className={'category-title'}>{props.title}</text>
    </div>
  );
};