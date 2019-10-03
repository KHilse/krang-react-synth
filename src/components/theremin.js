import React, { useState } from 'react';

const Theremin = props => {
    const MAX_FREQ = 1000;
    const MIN_FREQ = 100;

    const [waveform, setWave] = useState('sine');
    const [volFreq, setVolFreq] = useState({
        'volume': 0,
        'frequency': 400
    });
    const [audioContext] = useState(new AudioContext());
    const [oscillator] = useState(audioContext.createOscillator());
    const [gainNode] = useState(audioContext.createGain());
    const [currentGain, setCurrentGain] = useState(0);
    const [oscStarted, setOscStarted] = useState(false);

    function setVF(e) {
        let bRect = e.target.getBoundingClientRect();
        let x = e.pageX - bRect.left;
        let freq = ((MAX_FREQ - MIN_FREQ) / bRect.width)*x + MIN_FREQ;
        setVolFreq({
            'volume': Math.floor(bRect.bottom - e.pageY),
            'frequency': Math.floor(freq)
        });
        gainNode.gain.setValueAtTime(volFreq.volume / 200, audioContext.currentTime);
        oscillator.frequency.value = freq;
    }

    function fade() {
        // Make many small changes to gain over time, tracking
        // currentGain and targeting volFreq.volume
        if (currentGain < volFreq.volume) {
            setCurrentGain(currentGain + 1);
        } else {
            setCurrentGain(currentGain - 1);
        }
        gainNode.gain.setValueAtTime(currentGain / 200, audioContext.currentTime);
        console.log(volFreq.volume, currentGain);
    }

    function setWaveform(w) {
        oscillator.type = w;
        setWave(w);
    }

    function initTheremin(e) {
        e.stopPropagation();
        if (!oscStarted) {
            oscillator.start();
            setOscStarted(true);
        }
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        let timer = setInterval(fade,50);
    }

    return (
        <div className="theremin-container">
            <button className="theremin-waveform-button" name="sine" id="theremin-sine-button" onClick={() => setWaveform('sine')}>SINE</button><br />
            <button className="theremin-waveform-button" name="tri" id="theremin-triangle-button" onClick={() => setWaveform('triangle')}>TRI</button><br />
            <button className="theremin-waveform-button" name="saw" id="theremin-sawtooth-button" onClick={() => setWaveform('sawtooth')}>SAW</button><br />
            <button className="theremin-waveform-button" name="squ" id="theremin-square-button" onClick={() => setWaveform('square')}>SQU</button>
            <div className="theremin-surface" onPointerMove={setVF} onLoad={initTheremin} onClick={initTheremin}>
                <p>{waveform}</p>
                <p>{volFreq.volume}</p>
                <p>{volFreq.frequency}</p>
            </div>
        </div>
    )
}

export default Theremin;