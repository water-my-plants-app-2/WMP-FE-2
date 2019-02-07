import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const PlantListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
`

const PlantWrapper = styled.div`
    margin: 2%;
    // border: 2px solid #F0F3F1;
    background-color: white;
    -webkit-box-shadow: 0px 7px 19px 0px rgba(66,65,66,1);
    -moz-box-shadow: 0px 7px 19px 0px rgba(66,65,66,1);
    box-shadow: 0px 7px 19px 0px rgba(66,65,66,1);
`

const PlantPicture = styled.img`
    height: 200px;
    width: auto;
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

function PlantList(props){
    const confirmDelete = () => {
        let r = window.confirm(`Do you want to delete this plant?`);
    }

    return(
        <PlantListWrapper>
        {props.plants.map(plant => (
            <PlantWrapper>
            {/* <Link to={`/plant-list/${plant.id}`} key={plant.id}> */}
            <PlantPicture src={plant.img_url} alt={plant.name}
            />
                <h3>I am a {plant.name}</h3>
                <p>{plant.description}</p>
                <p>{plant.lastWatered}</p>
            <ButtonWrapper>
            <Button onClick={() => { 
                props.populateForm(plant.id);
                props.history.push('/plant-form')}
                }>Update Plant Information</Button>
            <Button onClick={() => {
                confirmDelete();
                props.deletePlant(plant.id)}}
                >Delete This Plant
            </Button>
            <Button onClick={() => alert(`${plant.name} needs to be watered ${plant.lastWater}. Water it again on ${plant.nextWater}`)}>Check Watering Schedule</Button>
            </ButtonWrapper>
            {/* </Link> */}
            </PlantWrapper>)
            )}
    </PlantListWrapper>
        
    );
}

export default PlantList;