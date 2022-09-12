import React from 'react';
import animals from '../../data.js';
import Animal from '../Animal/Animal.js';
import './Main.css';
import backgroundImg from '../../background.png';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {animals.map((animal) => (
        <Animal 
          key={animal.name}
          name={animal.name}
          type={animal.type}
          says={animal.says}
          top={animal.top}
          left={animal.left}
        />
      ))}
    </main>
  );
}
