import { useState } from "react"
import "./toggleSwitch.css"

export const ToggleSwitch = () => {
    const [state, checkState] = useState(false);
    const value = state ? "on" : "off";
    const bgcolor = state ? "#4caf50" : "#f44336";
    const handleToggleSwitch = () => {
        checkState(!state);
    }

    return(
        <>
            <div className="toggle-switch" onClick={handleToggleSwitch} style={{backgroundColor: bgcolor}}>
                <div className={`switch  ${value}`}>
                    <span className="switch-state">{value}</span>
                </div>
            </div>
        </>
    );
}