import React from 'react';

import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`

const HomeLinkWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const HomeIntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

function Home(props){
    // const routeToPlants = e => {
    //     e.preventDefault();
    //     props.history.push(`/plant-list`);
    // };

    // const routeToForm = e => {
    //     e.preventDefault();
    //     props.history.push(`/plant-form`);
    // };

    return(
        <HomeWrapper>
        <h2>Welcome to Your Plants!</h2>
        <HomeLinkWrapper>
            <HomeIntroWrapper>
            See Your Plants Here:
            <Button component={Link} to="/plant-list">Go To Plants</Button>
            </HomeIntroWrapper>
            <HomeIntroWrapper>
            Add New Plants Here:
            <Button component={Link} to="/plant-form">Go To Form</Button>
            </HomeIntroWrapper>
        </HomeLinkWrapper>
        </HomeWrapper>
    );
}

export default Home;