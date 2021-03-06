import React from 'react';
import { connect } from 'react-redux';

// Actions
import { getPlants, deletePlant, populateForm } from '../store/actions';

// Components
import PlantList from '../components/PlantList';

class PlantListView extends React.Component{
    componentDidMount(){
        this.props.getPlants();
    }

    render(){
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