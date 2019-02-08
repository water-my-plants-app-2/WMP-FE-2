import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const PlantScheduleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 90%;
    flex-wrap: wrap;
    margin: 0 auto;
`

const ScheduleWrapper = styled.div`
    margin: 2%;
    // border: 2px solid #F0F3F1;
    background-color: white;
    -webkit-box-shadow: 0px 7px 19px 0px rgba(66,65,66,1);
    -moz-box-shadow: 0px 7px 19px 0px rgba(66,65,66,1);
    box-shadow: 0px 7px 19px 0px rgba(66,65,66,1);
    padding: 1%;
`


function PlantSchedule(props){
    return(
        <PlantScheduleWrapper>
            {props.plants.map(plant => (
                <ScheduleWrapper>
                    <h3>I am a {plant.name}</h3>
                    <p>I need to be watered {plant.lastWater}</p>
                    <p>The date I need to be watered next is {plant.nextWater}</p>
                    <Button onClick={() => alert(`Water successful! Water this plant next on ${plant.nextWater}`)}>Click to Water!</Button>
                </ScheduleWrapper>
            ))}
        </PlantScheduleWrapper>
    );
}

export default PlantSchedule;