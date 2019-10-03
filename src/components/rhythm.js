import React from 'react';
import Sequencer from './drum machine/sequencer';
import PlayerProvider from './drum machine/player-provider'



const Rhythm = props => {
    return (
        <PlayerProvider>
      {({ player }) => {
        if (!player) {
          return <p>loading....</p>;
        }
        return <Sequencer player={player} />;
      }}
    </PlayerProvider>
    )
}

export default Rhythm;