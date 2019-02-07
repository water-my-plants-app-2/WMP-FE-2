import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
    background-color: white;
    border-bottom: 1px solid green;
    width: 87%;
    margin: 0 auto;
`

const NavLinkWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 1%;
    margin-bottom: 2%;
`

const NavHeader = styled.h1`
    font-weight: 300;
    font-size: 24px;
    text-align: center;
    padding-top: 1%;
`
const NavHeaderIcon = styled.img`
    margin-top: .5%;
`

function NavBar(props){
    // function onLogout() {
    //     localStorage.removeItem(user)
    //      window.location.reload();
    // }

    return(
        <NavBarWrapper>
        <NavHeader>Water My Plants</NavHeader>
        <NavHeaderIcon src="https://img.icons8.com/ios/50/000000/hand-planting.png" alt="Plant"></NavHeaderIcon>
        <NavLinkWrapper>
            <NavLink style={{textDecoration: "none", color: "black" }} to="/plant-list">Plant List</NavLink>
            <NavLink style={{textDecoration: "none", color: "black"}} to="/plant-form">Add a Plant</NavLink>
            <NavLink style={{textDecoration: "none", color: "black"}} to="/home">Home</NavLink>
            {/* <button>Log Out</button> */}
        </NavLinkWrapper>
        </NavBarWrapper>
    );
}

export default NavBar;