import React from 'react';
import './NavigationBar.css';

import {NavLink} from 'react-router-dom';

class NavigationBar extends React.Component {

    render() {
        return (
            <div className="navbar-conatiner">
                <NavLink to={'/topstories'} className="nav-link">
                    <i className="fa fa-globe"></i> Top Stories
                </NavLink>
                <NavLink to={'/topics/business'} className="nav-link">
                    <i className="fa fa-building"></i> Business
                </NavLink>
                <NavLink to={'/topics/movies'} className="nav-link">
                    <i className="fa fa-film"></i> Entertainment
                </NavLink>
                <NavLink to={'/topics/technology'} className="nav-link">
                    <i className="fa fa-flask"></i> Technology
                </NavLink>
                <NavLink to={'/topics/sports'} className="nav-link">
                    <i className="fa fa-bicycle"></i> Sports
                </NavLink>
                <NavLink to={'/topics/science'} className="nav-link">
                    <i className="fa fa-microchip"></i> Science
                </NavLink>
            </div>
        );
    }
}

export default NavigationBar;