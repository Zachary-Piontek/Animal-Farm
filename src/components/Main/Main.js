import React from 'react';
import animals from '../../data.js';
import Animal from '../Animal/Animal.js';
import './Main.css';
import backgroundImg from '../../background.png';

export default function Main() {
  <main style={{ backgroundImage: `url(${backgroundImg})` }}>
    {animals.map((animal) => (
      <Animal 
        key={animal.name}
      />
    ))}
  </main>;
}
