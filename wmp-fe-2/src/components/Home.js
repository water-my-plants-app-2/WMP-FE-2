import React from 'react';
import './Home.css';

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
    margin-top: 1%;
    justify-content: center;
`


const HomeIntroWrapperOne = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2%;
    margin-right: 2%;
`
const HomeIntroWrapperTwo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2%;
    margin-left: 2%;
`

const HomeIntroWrapperThird = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2%;
`

const HomeHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const HomeHeader = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin: 2% 2% 0 2%;
`

function Home(props){

    return(
        <div className="homePage">
        <HomeWrapper>
            <HomeHeaderWrapper>
                <img src="https://img.icons8.com/ios/50/000000/plant-under-rain.png" alt="plant"></img>
                <HomeHeader>Welcome to Your Plants!</HomeHeader>
                <img src="https://img.icons8.com/ios/50/000000/plant-under-rain.png" alt="plant"></img>
            </HomeHeaderWrapper>
        <HomeLinkWrapper>
            <HomeIntroWrapperOne>
            See Your Plants Here:
            <Button component={Link} to="/plant-list">Go To Plants</Button>
            </HomeIntroWrapperOne>
            <HomeIntroWrapperTwo>
            Add New Plants Here:
            <Button component={Link} to="/plant-form">Go To Form</Button>
            </HomeIntroWrapperTwo>
        </HomeLinkWrapper>
            <HomeIntroWrapperThird>
                See Your Watering Schedule Here:
                <Button component={Link} to="/plant-schedule" style={{width: "15%", marginLeft: "42.5%"}}>Go To Schedule</Button>
            </HomeIntroWrapperThird>
        </HomeWrapper>
        </div>
    );
}

export default Home;