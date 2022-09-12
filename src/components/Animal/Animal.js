import React from 'react';


export default function Animal(props) {
  return (
    <div>
      <span>{props.name}</span>
      <span>{props.type}</span>
      <span>{props.says}</span>
    </div>
  );
}

