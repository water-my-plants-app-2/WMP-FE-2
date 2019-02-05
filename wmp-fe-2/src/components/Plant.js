import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const PlantWrapper = styled.div`
    border: 1px solid red;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // width: 50%;
`

const Plant = props => {
    return(
        <PlantWrapper>
        <img src={props.plant.img_url} alt={props.plant.name}/>
        <h3>I am a {props.plant.name}</h3>
        <p>Here's how to take care of me: {props.plant.description}</p>
        <p>{props.plant.lastWatered}</p>
        <Button>Update Plant Information</Button>
        <Button onClick={e => {
            e.preventDefault();
            console.log('Ya clicked a delete button');
            props.deletePlant(props.plant.id)}}>Delete This Plant</Button>
        </PlantWrapper>
    );
}

export default Plant;