import React from 'react';
import '../Animal/Animal.css';

export default function Animal(props, top, left) {
  return (
    <div className='animal' style={{ top, left }}>
      <img src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`} />
      <span>{props.name}</span>
      <span>{props.type}</span>
      <span>{props.says}</span>
    </div>
  );
}

