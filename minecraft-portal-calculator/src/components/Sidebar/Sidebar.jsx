// HOOKS
import { useNavigate } from "react-router-dom";


// STYLES
import { useEffect, useRef } from "react";
import Logo from "../Logo/Logo";
import "./Sidebar.css";

const Sidebar = () => {

    const navigator = useNavigate();

    const currentActiveButton = useRef(null);

    const manageActiveButton = (e, path) => {
        if (currentActiveButton.current) {
            currentActiveButton.current.classList.remove("active");
        }

        e.currentTarget.classList.add("active");
        currentActiveButton.current = e.currentTarget;
        navigator(path);
    }

    return (
        <div className="sidebar-container">
            <div className="sidebar-div1">
                <div className="sidebar-logo">
                    <Logo onClick={(e) => manageActiveButton(e, "/")} />
                </div>
            </div>
            <div className="sidebar-div2">
                <ul className="sidebar-list">
                    <li className="" onClick={(e) => manageActiveButton(e, "/calculator")}>
                        <span>Find the locations:</span>
                        Portal Calculator
                    </li>
                    <li className="" onClick={(e) => manageActiveButton(e, "/coordinates")}>Stored Coordinates</li>
                    <li className="" onClick={(e) => manageActiveButton(e, "/upcoming")}>Portal Calculator</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar