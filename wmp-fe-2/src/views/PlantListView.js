import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { getPlants, deletePlant, populateForm } from '../store/actions';

// Components
import PlantList from '../components/PlantList';
import Plant from '../components/Plant';

class PlantListView extends React.Component{
    componentDidMount(){
        this.props.getPlants();
    }

    render(){
        console.log('%c console logging plants', 'color: red', this.props.plants);
        return(
            <PlantList 
            plants={this.props.plants}
            history={this.props.history}
            getPlantById={this.props.getPlantById}
            deletePlant={this.props.deletePlant}
            populateForm={this.props.populateForm}
            />
        );
    }
}

const mapStateToProps = state => ({
    plants: state.plants
})

export default connect(
    mapStateToProps,
    { getPlants, deletePlant, populateForm }
)(PlantListView);