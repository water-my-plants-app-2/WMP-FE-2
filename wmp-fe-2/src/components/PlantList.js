import React from 'react';
import Plant from './Plant';

const PlantList = props => {
    return(
        <div>
            {props.plants.map(plant =>
                <Plant 
                name={plant.name}
                plant={plant}
                id={plant.id}
                key={plant.id}
                description={plant.description}
                lastWatered={plant.lastWatered}
                deletePlant={props.deletePlant}
                />)}
        </div>
    );
}

export default PlantList;