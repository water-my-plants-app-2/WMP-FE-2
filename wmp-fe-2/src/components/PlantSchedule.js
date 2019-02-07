import React from 'react';
import Button from '@material-ui/core/Button';


function PlantSchedule(props){
    return(
        <div>
            {props.plants.map(plant => (
                <div>
                    <h3>I am a {plant.name}</h3>
                    <p>I was last watered on {plant.lastWater}</p>
                    <p>I need to be watered {plant.nextWater}</p>
                    {/* <Button onClick={alert(`Water this plant next on ${plant.nextWater}`)}>Click to Water!</Button> */}
                </div>
            ))}
        </div>
    );
}

export default PlantSchedule;