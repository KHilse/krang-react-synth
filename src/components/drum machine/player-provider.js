import React, { useState, useEffect } from "react";
import Tone from "tone";

const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState(null);
  const [channel] = useState(new Tone.Channel());
  useEffect(() => {
    const player = new Tone.Players(
      {
        BD: "/kick.wav",
        CP: "/clap.wav",
        OH: "/hh_open.wav",
        CH: "/hh_closed.wav"
      },
      () => {
        console.log("buffers loaded");
        setPlayer(player);
      }
    )
    player.chain(channel, Tone.Master);
  }, []);
  return children({ player });
};

export default PlayerProvider;
