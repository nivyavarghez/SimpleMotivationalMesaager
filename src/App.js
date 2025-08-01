import React from 'react';
import Message from './message';
import Counter from './counter';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Day 2 🚀</h1>

      <Message name="Nivya" />
      <Message name="Learning React" />

      <Counter />

   
    </div>
  );
}

export default App;
