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
      <main>
        <Controls />
        <Rhythm toneContext={toneContext} />
        <Theremin toneContext={toneContext} />
      </main>
    </div>
  );
}

export default App;
