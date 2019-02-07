import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import Plant from './Plant';

const PlantListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
`

const PlantWrapper = styled.div`
    margin: 2%;
`

const PlantPicture = styled.img`
    height: 200px;
    width: auto;
`

function PlantList(props){
    return(
        <PlantListWrapper>
        {props.plants.map(plant => (
            <PlantWrapper>
            {/* <Link to={`/plant-list/${plant.id}`} key={plant.id}> */}
            <PlantPicture src={plant.img_url} alt={plant.name}
            />
                <h3>I am a {plant.name}</h3>
                <p>Here's how to take care of me: {plant.description}</p>
                <p>{plant.lastWatered}</p>
            <Button onClick={() => { 
                props.populateForm(plant.id);
                props.history.push('/plant-form')}
                }>Update Plant Information</Button>
            <Button onClick={() => {
                props.deletePlant(plant.id)}}
                color="primary">Delete This Plant
            </Button>
            {/* </Link> */}
            </PlantWrapper>)
            )}
    </PlantListWrapper>
        
    );
}

export default PlantList;