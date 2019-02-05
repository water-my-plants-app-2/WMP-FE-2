import React from 'react';
import { Link } from 'react-router-dom';

// import Plant from './Plant';

const PlantList = props => {
    return(
        <div>
            {props.plants.map(plant => (
                <Link to={`/plant-list/${plant.id}`} key={plant.id}>
                <img src={plant.img_url} alt={plant.name}
                />
                <p>{plant.name}</p>
                </Link>)
                )}
        </div>
    );
}

export default PlantList;

// <Plant 
// name={plant.name}
// plant={plant}
// id={plant.id}
// key={plant.id}
// description={plant.description}
// lastWatered={plant.lastWatered}
// deletePlant={props.deletePlant}
// />