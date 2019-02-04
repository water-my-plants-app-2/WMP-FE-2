import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props){
    return(
        <div>
            <NavLink to="/">Plant List</NavLink>
            <NavLink to="/">Add a Plant</NavLink>
            <NavLink to="/">Home</NavLink>
        </div>
    );
}

export default NavBar;