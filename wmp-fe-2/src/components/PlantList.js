import React from 'react';
import { Link } from 'react-router-dom';
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
`

const PlantPicture = styled.img`
    height: 200px;
    width: auto;
`


const PlantList = props => {
    return(
        <PlantListWrapper>
            {props.plants.map(plant => (
                <PlantWrapper>
                <Link to={`/plant-list/${plant.id}`} key={plant.id}>
                <PlantPicture src={plant.img_url} alt={plant.name}
                />
                <p>{plant.name}</p>
                </Link>
                </PlantWrapper>)
                )}
        </PlantListWrapper>
    );
}

export default PlantList;