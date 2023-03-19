import React from "react";
import "./header.css";
import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <NavLink className="navbar-brand" to="">
                <img src="./Images/headerlogo.png" className="navbar-logo d-inline-block align-top" alt=""></img>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link underline" to="/">Home<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link underline" to="/about-us">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link underline" to="/diseases">Diseases</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link underline" to="/share-experience">Share Experience</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link underline" to="/ask-suggestion">Ask Suggestion</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link underline" to="/pathy">Pathy</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link underline" to="/clinics-hospitals">Clinics/Hospitals</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;