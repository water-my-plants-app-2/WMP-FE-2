import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { addPlant, updatePlant } from '../store/actions';

import PlantForm from '../components/PlantForm';

const blankPlant = {
    name: '',
    description: '',
    characteristic: '',
    lastWater: '',
    nextWater: '',
    img_url: '',
}
class PlantFormView extends React.Component{
    state = {
        plant: {
            name: '',
            description: '',
            characteristic: '',
            lastWater: '',
            nextWater: '',
            img_url: '',
        },
        isUpdating: false,
        beingUpdated: null
    };

    changeHandler = ev => {
        this.setState({
            plant: {
                ...this.state.plant,
                [ev.target.name]: ev.target.value
            }
        });
    };

    addPlant = () => {
        this.props.addPlant(this.state.plant);
    }

    updatePlant = () => {
        this.props.updatePlant(this.state.plant);
    }
    
    render(){
        return(
            <div>
                <PlantForm 
                addPlant={this.addPlant}
                changeHandler={this.changeHandler}
                plant={this.state.plant}
                isUpdating={this.props.isUpdating}
                updatePlant={this.updatePlant}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({})

export default connect(
    mapStateToProps,
    { addPlant, updatePlant }
)(PlantFormView);