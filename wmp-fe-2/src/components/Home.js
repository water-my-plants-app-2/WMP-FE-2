import React from 'react';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function Home(props){
    
    const routeToPlants = e => {
        e.preventDefault();
        props.history.push(`/plant-list`);
    };

    const routeToForm = e => {
        e.preventDefault();
        props.history.push(`/plant-form`);
    };

    return(
        <div className="homeWrapper">
        <h2>Welcome to Your Plants!</h2>
        <div>
            See Your Plants Here:
            <Button component={Link} to="/plant-list">Go To Plants</Button>
        </div>
        <div>
            Add New Plants Here:
            <Button component={Link} to="/plant-form">Go To Form</Button>
        </div>
        </div>
    );
}

export default Home;