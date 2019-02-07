import React from 'react';

function PlantSchedule(props){
    return(
        <div>
            {props.plants.map(plant => (
                <div>
                    <h3>I am a {plant.name}</h3>
                    <p>I was last watered on {plant.lastWater}</p>
                    <p>Please water me next on {plant.nextWater}</p>
                </div>
            ))}
        </div>
    );
}

export default PlantSchedule;