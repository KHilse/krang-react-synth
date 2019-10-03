import React, { useState } from 'react';
import Tone from 'tone';

const Theremin = props => {
    const MAX_FREQ = 1000;
    const MIN_FREQ = 100;

    const [waveform, setWave] = useState('sine');
    const [volFreq, setVolFreq] = useState({
        'volume': 0,
        'frequency': 400
    });
    const [oscillator] = useState(new Tone.Oscillator(440,'sine'));
    const [oscStarted, setOscStarted] = useState(false);
    const [channel] = useState(new Tone.Channel());

    function setVF(e) {
        let bRect = e.target.getBoundingClientRect();
        let x = e.pageX - bRect.left;
        let freq = ((MAX_FREQ - MIN_FREQ) / bRect.width)*x + MIN_FREQ;
        setVolFreq({
            'volume': Math.floor(bRect.bottom - e.pageY),
            'frequency': Math.floor(freq)
        });
        console.log(oscillator)
        oscillator.mute = false;
        oscillator.volume.value = -volFreq.volume / 200;
        oscillator.frequency.value = freq;
    }

    function mute() {
        oscillator.mute = true;
    }

    function setWaveform(w) {
        oscillator.type = w;
        setWave(w);
    }

    function initTheremin(e) {
        e.stopPropagation();
        oscillator.chain(channel, Tone.Master);
        
        if (oscillator.state == 'stopped') {
            oscillator.start();
            setOscStarted(true);
        }
    }

    return (
        <div className="theremin-container">
            <button className="theremin-waveform-button" name="sine" id="theremin-sine-button" onClick={() => setWaveform('sine')}>SINE</button><br />
            <button className="theremin-waveform-button" name="tri" id="theremin-triangle-button" onClick={() => setWaveform('triangle')}>TRI</button><br />
            <button className="theremin-waveform-button" name="saw" id="theremin-sawtooth-button" onClick={() => setWaveform('sawtooth')}>SAW</button><br />
            <button className="theremin-waveform-button" name="squ" id="theremin-square-button" onClick={() => setWaveform('square')}>SQU</button>
            <div className="theremin-surface" onPointerMove={setVF} onMouseOut={mute} onLoad={initTheremin} onClick={initTheremin}>
                <p>{waveform}</p>
                <p>{volFreq.volume}</p>
                <p>{volFreq.frequency}</p>
            </div>
        </div>
    )
}

export default Theremin;