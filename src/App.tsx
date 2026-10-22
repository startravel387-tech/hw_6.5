import React from 'react';
import { Generics } from './components/Generics';
import { UtilityTypes } from './components/UtilityTypes';
import { TypeGuards } from './components/TypeGuards';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Домашнее задание по TypeScript</h2>
      
      <Generics />
      <UtilityTypes />
      <TypeGuards />
    </div>
  );
}

export default App;