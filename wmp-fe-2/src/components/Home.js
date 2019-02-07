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
    margin: 0 auto;
    display: flex;
    width: 75%;
    margin-top: 1%;
    justify-content: space-around;
    flex-direction: row;
`
const LinkCard = styled.div`
    border: 5px solid #B7DEC6;
    background-color: #C5D0C5;
    padding-top: 6%;
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 100px;
`

const CardIcon = styled.img`
    width: 12%;
    // height: 20%;
    margin-top: 1%;
    margin: 0 auto;
    align-content: center;
`

const HomeHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const HomeHeader = styled.h2`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 3%;
`

function Home(props){

    return(
        <div className="homePage">
        <HomeWrapper>
            <HomeHeaderWrapper>
                <HomeHeader>Welcome to Your Plants!</HomeHeader>
            </HomeHeaderWrapper>
        <HomeLinkWrapper>
            <LinkCard>
                <span>See Your Plants Here</span>
                <Button component={Link} to="/plant-list">Go To Plants</Button>
                {/* <CardIcon src="https://img.icons8.com/ios/40/000000/bunch-flowers.png"></CardIcon> */}
            </LinkCard>
            <LinkCard>
                <span>Add New Plants Here</span>
                <Button component={Link} to="/plant-form">Go To Form</Button>
                {/* <CardIcon src="https://img.icons8.com/ios/50/000000/paper-bag-with-seeds.png"></CardIcon> */}
            </LinkCard>
            <LinkCard>
                <span>See Your Watering Schedule Here</span>
                <Button component={Link} to="/plant-schedule" style={{}}>Go To Schedule</Button>
                {/* <CardIcon src="https://img.icons8.com/ios/50/000000/plant-under-rain.png" alt="plant"></CardIcon> */}
            </LinkCard>
            </HomeLinkWrapper>
        </HomeWrapper>
        </div>
    );
}

export default Home;