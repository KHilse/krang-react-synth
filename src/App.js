import React from 'react';
import logo from './logo.svg';
import './App.css';
import Controls from './components/controls';
import Theremin from './components/theremin';
import Rhythm from './components/rhythm';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Bebop and Rock Steady present...</h2>
        <h1>Krang, a react band in a page</h1>
      </header>
      <main>
        <Controls />
        <Theremin />
        <Rhythm />
      </main>
    </div>
  );
}

export default App;
