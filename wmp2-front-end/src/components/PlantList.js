import React from 'react';

const PlantList = props => {
    return(
        <div>
            {props.plants.map(plant =>
                <Plant 
                key={plant.id}
                description={plant.description}
                lastWatered={plant.lastWatered}
                />)}
        </div>
    );
}

export default PlantList;