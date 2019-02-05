import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props){
    return(
        <div>
            <NavLink to="/plant-list">Plant List</NavLink>
            <NavLink to="/plant-form">Add a Plant</NavLink>
            <NavLink to="/">Home</NavLink>
        </div>
    );
}

export default NavBar;