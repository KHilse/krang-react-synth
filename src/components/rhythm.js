import React from 'react';
import Sequencer from './drum machine/sequencer';
import PlayerProvider from './drum machine/player-provider'



const Rhythm = props => {
    return (
      <div className="rhythm-container">
        <PlayerProvider>
      {({ player }) => {
        if (!player) {
          return <p>loading....</p>;
        }
        return <Sequencer player={player} />;
      }}
    </PlayerProvider>
    </div>
    )
}

export default Rhythm;