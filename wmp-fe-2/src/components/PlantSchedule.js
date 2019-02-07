import React from 'react';
import Button from '@material-ui/core/Button';


function PlantSchedule(props){
    return(
        <div>
            {props.plants.map(plant => (
                <div>
                    <h3>I am a {plant.name}</h3>
                    <p>I need to be watered {plant.lastWater}</p>
                    <p>The date I need to be watered next is {plant.nextWater}</p>
                    {/* <Button onClick={alert(`Water successful! Water this plant next on ${plant.nextWater}`)}>Click to Water!</Button> */}
                </div>
            ))}
        </div>
    );
}

export default PlantSchedule;