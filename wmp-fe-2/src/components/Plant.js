import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const PlantWrapper = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 35%;
    margin: 0 auto;
`

const PlantPicture = styled.img`
    height: 300px;
    width: auto;
`

const PlantCardText = styled.div`
    text-align: center;
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const Plant = props => {

    const plant = props.plants.find(
        plant => `${plant.id}` === props.match.params.plantId
      );
    
      if (!plant) return <h2>This plant isn't here</h2>

    return(
        <PlantWrapper>
        <PlantPicture src={plant.img_url} alt={plant.name}/>
        <PlantCardText>
        <h3>I am a {plant.name}</h3>
        <p>Here's how to take care of me: {plant.description}</p>
        <p>{plant.lastWatered}</p>
        </PlantCardText>
        <ButtonWrapper>
            <Button>Update Plant Information</Button>
            <Button onClick={e => {
                e.preventDefault();
                console.log('Ya clicked a delete button');
                props.deletePlant(plant.id)}}
                color="primary">Delete This Plant
            </Button>
            </ButtonWrapper>
        </PlantWrapper>
    );
}

export default Plant;