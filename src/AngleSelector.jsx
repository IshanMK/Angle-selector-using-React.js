import React, { useState, useEffect } from "react";

const AngleSelector = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    // Add Bootstrap CSS
    const link = document.createElement("link");
    link.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Clean up function
    return () => {
      document.head.removeChild(link);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const handleAngleChange = (value) => {
    const newAngle = ((value % 360) + 360) % 360;
    setAngle(newAngle);
  };

  const getSliderValue = (angle) => {
    return angle <= 180 ? angle + 180 : angle - 180;
  };

  const handleSliderChange = (sliderValue) => {
    const newAngle = sliderValue <= 180 ? sliderValue + 180 : sliderValue - 180;
    setAngle(newAngle);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Angle Selector</h2>
              <div className="mb-3">
                <label htmlFor="angleInput" className="form-label">
                  Angle:
                </label>
                <input
                  type="number"
                  id="angleInput"
                  className="form-control"
                  value={angle}
                  onChange={(e) => handleAngleChange(parseInt(e.target.value))}
                  min="0"
                  max="360"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="angleSlider" className="form-label">
                  Slider:
                </label>
                <input
                  type="range"
                  id="angleSlider"
                  className="form-range"
                  value={getSliderValue(angle)}
                  onChange={(e) => handleSliderChange(parseInt(e.target.value))}
                  min="0"
                  max="360"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Preset Angles:</label>
                <div className="d-flex justify-content-between">
                  {[0, 45, 60, 90, 180].map((value) => (
                    <div key={value} className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="anglePreset"
                        id={`angle${value}`}
                        value={value}
                        checked={angle === value}
                        onChange={() => handleAngleChange(value)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`angle${value}`}
                      >
                        {value}°
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AngleSelector;
