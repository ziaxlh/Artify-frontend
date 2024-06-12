import React, { useState } from 'react';

const ZoomSlider = ({ onZoomChange }) => {
    const [zoomLevel, setZoomLevel] = useState(1);

    const handleChange = (event) => {
        const value = parseFloat(event.target.value);
        setZoomLevel(value);
        onZoomChange(value);
    };

    return (
        <div className="zoom-slider">
            <input
                type="range"
                min="0.1"
                max="2"
                step="0.01"
                value={zoomLevel}
                onChange={handleChange}
            />
        </div>
    );
};

export default ZoomSlider;
