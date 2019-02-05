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


const PlantList = props => {
    return(
        <PlantListWrapper>
            {props.plants.map(plant => (
                <Link to={`/plant-list/${plant.id}`} key={plant.id}>
                <img src={plant.img_url} alt={plant.name}
                />
                <p>{plant.name}</p>
                </Link>)
                )}
        </PlantListWrapper>
    );
}

export default PlantList;