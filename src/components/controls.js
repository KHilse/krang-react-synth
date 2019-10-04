import React from 'react';

const Controls = props => {
    return (
        <div className="controls-container">
            <p>Controls placeholder</p>
            <div>
                <input type="range" min="1" max="100" value="50" className="slider" />
            </div>
        </div>
    )
}

export default Controls;