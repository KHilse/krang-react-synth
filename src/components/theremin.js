import React, { useState } from 'react';

const Theremin = props => {
    const MAX_FREQ = 1000;
    const MIN_FREQ = 100;

    const [waveform, setWaveform] = useState('sine');
    const [volFreq, setVolFreq] = useState({
        'volume': 0,
        'frequency': 400
    });

    function setVF(e) {
        let bRect = e.target.getBoundingClientRect();
        console.log(bRect.width);
        let y = bRect.bottom - e.pageY;
        let freq = ((MAX_FREQ - MIN_FREQ) / bRect.height)*y + MIN_FREQ;
        setVolFreq({
            'volume': Math.floor(e.pageX - bRect.left),
            'frequency': Math.floor(freq)
        });

    }

    // const audioContext = window.audioContext || new AudioContext(); // If there isn't one, create one
    // const oscillator = audioContext.createOscillator();
    // oscillator.type = 'sine';
    // oscillator.frequency.value = 300;

    // oscillator.connect(audioContext.destination);



    return (
        <div className="theremin-container">
            <button className="theremin-waveform-button" name="sine" id="theremin-sine-button" onClick={() => setWaveform('sine')}>SINE</button><br />
            <button className="theremin-waveform-button" name="tri" id="theremin-triangle-button" onClick={() => setWaveform('triangle')}>TRI</button><br />
            <button className="theremin-waveform-button" name="saw" id="theremin-sawtooth-button" onClick={() => setWaveform('sawtooth')}>SAW</button><br />
            <button className="theremin-waveform-button" name="squ" id="theremin-square-button" onClick={() => setWaveform('square')}>SQU</button>
            <div className="theremin-surface" onPointerMove={setVF}>
                <p>{waveform}</p>
                <p>{volFreq.volume}</p>
                <p>{volFreq.frequency}</p>
            </div>
        </div>
    )
}

export default Theremin;