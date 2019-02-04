import React from 'react';
import PlantList from '../components/PlantList';

class PlantListView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            plants: []
        }
    }

    render(){
        return(
            <PlantList 
            plants={this.state.plants}
            />
        );
    }
}

export default PlantListView;