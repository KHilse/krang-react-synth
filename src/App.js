import React, { useState } from 'react';
import './App.css';
import Controls from './components/controls';
import Theremin from './components/theremin';
import Rhythm from './components/rhythm';
import Tone from "tone";


function App() {

  const [toneContext, setToneContext] = useState(Tone.context);

  return (
    <div className="App">
      <header>
        <h2>Bebop and Rock Steady present...</h2>
        <h1>Krang, a react band in a page</h1>
      </header>
      <main>
        <Controls />
        <Rhythm toneContext={toneContext} />
        <Theremin toneContext={toneContext} />
      </main>
    </div>
  );
}

export default App;
