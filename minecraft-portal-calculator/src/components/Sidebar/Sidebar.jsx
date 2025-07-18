// HOOKS
import { useNavigate } from "react-router-dom";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { changeActive } from "../../features/sidebar.mjs";

// STYLES
import { useEffect, useRef, useState } from "react";
import Logo from "../Logo/Logo";
import "./Sidebar.css";

// DEFAULTS
const SIDEBAR_MENU = [
    {
        main: "PORTAL CALCULATOR",
        span: "FIND THE LOCATIONS:",
        path: "/calculator"
    },
    {
        main: "STORED COORDINATES",
        path: "/coordinates"
    },
    {
        main: "upcoming",
        path: "/upcoming",
        span: "more features:"
    },
]

const Sidebar = () => {
    const navigator = useNavigate();
    const currentActiveButton = useRef(null);

    // SIDEBAR ACTIVE STATE USING REDUX
    const currentActive = useSelector((state) => state.sidebar.value);
    const dispatcher = useDispatch();



    const manageActiveButton = (path) => {
        dispatcher(changeActive(path))
        navigator(path);
    }

    useEffect(() => {
        console.log(currentActive);
    }, [currentActive])

    return (
        <div className="sidebar-container">
            <div className="sidebar-div1">
                <div className="sidebar-logo">
                    <Logo onClick={() => manageActiveButton("/")} />
                </div>
            </div>
            <div className="sidebar-div2">
                <ul className="sidebar-list">
                    {SIDEBAR_MENU.map((elem) => {
                        return <li className={currentActive == elem.path ? "active" : ""} key={elem.main} onClick={() => manageActiveButton(elem.path)}>
                            <span>{elem.span}</span>
                            {elem.main}
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar