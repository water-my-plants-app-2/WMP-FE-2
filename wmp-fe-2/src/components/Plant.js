import React from 'react';
import Button from '@material-ui/core/Button';

const Plant = props => {
    return(
        <div>
        <h3>I am a {props.plant.name}</h3>
        <p>Here's how to take care of me: {props.plant.description}</p>
        <p>{props.plant.lastWatered}</p>
        <Button>Update Plant Information</Button>
        <Button onClick={e => {
            e.preventDefault();
            console.log('Ya clicked a delete button');
            props.deletePlant(props.plant.id)}}>Delete This Plant</Button>
        </div>
    );
}

export default Plant;