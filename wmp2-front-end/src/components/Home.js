import React from 'react';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function Home(props){
    
    routeToPlants = event => {
        e.preventDefault();
        props.history.push(`/plant-list`);
    };

    routeToForm = event => {
        e.preventDefault();
        props.history.push(`/plant-form`);
    };

    return(
        <div className="homeWrapper">
        <h2>Welcome to Your Plants!</h2>
        <div>
            See Your Plants Here:
            <Button onClick={routeToPlants}>Go To Plants</Button>
        </div>
        <div>
            Add New Plants Here:
            <Button component={routeToForm}>Go To Form</Button>
        </div>
        </div>
    );
}

export default Home;