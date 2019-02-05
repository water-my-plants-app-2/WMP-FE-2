import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`

function NavBar(props){
    return(
        <NavBarWrapper>
            <NavLink to="/plant-list">Plant List</NavLink>
            <NavLink to="/plant-form">Add a Plant</NavLink>
            <NavLink to="/home">Home</NavLink>
        </NavBarWrapper>
    );
}

export default NavBar;