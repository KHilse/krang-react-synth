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
        CH: "/hh_closed.wav",
        E1: "/US_Rhodes_E1.wav",
        G1: "/US_Rhodes_G1.wav",
        C3: "/US_Rhodes_C3.wav",
        C1: "/US_Rhodes_C1.wav"
      },
      () => {
        console.log("buffers loaded");
        setPlayer(player);
      }
    )
    channel.volume.value = -5;
    player.chain(channel, Tone.Master);
  }, []);
  return children({ player });
};

export default PlayerProvider;
