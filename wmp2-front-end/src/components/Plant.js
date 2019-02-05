import React from 'react';
import Button from '@material-ui/core/Button';

const Plant = props => {
    return(
        <div>
        <h3>I am a {props.name}</h3>
        <p>Here's how to take care of me: {props.description}</p>
        <p>{props.lastWatered}</p>
        <Button>Update Plant Information</Button>
        <Button onClick={props.deletePlant(props.id)}>Delete This Plant</Button>
        </div>
    );
}

export default Plant;