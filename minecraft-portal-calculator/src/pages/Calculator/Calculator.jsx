// IMAGES
import BACKGROUND_SUNRISE from "../../assets/images/overworld_sunrise.jpg";

// REACT
import { useState } from "react";

// STYLES
import "./Calculator.css";

const Calculator = () => {
    const [mode, setMode] = useState("overworld-to-nether");
    const [x, setX] = useState(0);
    const [z, setZ] = useState(0);

    const convert = (coord) => {
        if (mode === "overworld-to-nether") return coord / 8;
        else return coord * 8;
    };

    const handleModeSwitch = () => {
        setMode(mode === "overworld-to-nether" ? "nether-to-overworld" : "overworld-to-nether");
    };

    const convertedX = convert(x);
    const convertedZ = convert(z);

    return (
        <div className="calculator-container">
            <div className="background-image">
                <img src={BACKGROUND_SUNRISE} alt="Overworld Sunrise" />
            </div>
            <div className="calculator-panel">
                <h2 className="title">Nether ↔ Overworld Calculator</h2>
                <button className="switch-button" onClick={handleModeSwitch}>
                    Switch to {mode === "overworld-to-nether" ? "Nether → Overworld" : "Overworld → Nether"}
                </button>
                <div className="input-group">
                    <label>X Coordinate:</label>
                    <input
                        type="number"
                        value={x}
                        onChange={(e) => setX(Number(e.target.value))}
                    />
                </div>
                <div className="input-group">
                    <label>Z Coordinate:</label>
                    <input
                        type="number"
                        value={z}
                        onChange={(e) => setZ(Number(e.target.value))}
                    />
                </div>
                <div className="result">
                    <h3>Converted Coordinates:</h3>
                    <p>X: <span>{convertedX.toFixed(2)}</span></p>
                    <p>Z: <span>{convertedZ.toFixed(2)}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
