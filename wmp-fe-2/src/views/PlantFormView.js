import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { addPlant, updatePlant, handleChange } from '../store/actions';

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
    changeHandler = ev => {
        this.props.handleChange(ev.target.name, ev.target.value)
    };

    addPlant = () => {
        console.log('addPlant fn', this.props);
        const newPlant = {
            name: this.props.name,
            description: this.props.description,
            characteristic: this.props.characteristic,
            lastWater: this.props.lastWater,
            nextWater: this.props.nextWater,
            img_url: this.props.img_url
        }
        this.props.addPlant(newPlant);
    }

    updatePlant = () => {
        const newPlant = {
            name: this.props.name,
            description: this.props.description,
            characteristic: this.props.characteristic,
            lastWater: this.props.lastWater,
            nextWater: this.props.nextWater,
            img_url: this.props.img_url
        }
        this.props.updatePlant(newPlant, this.props.beingUpdated);
    }
    
    render(){
        return(
            <div>
                <PlantForm 
                addPlant={this.addPlant}
                changeHandler={this.changeHandler}
                isUpdating={this.props.isUpdating}
                updatePlant={this.updatePlant}
                history={this.props.history}
                plant={this.props}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    name: state.name,
    description: state.description,
    characteristic: state.characteristic,
    lastWater: state.lastWater,
    nextWater: state.nextWater,
    img_url: state.img_url,
    isUpdating: state.isUpdating,
    beingUpdated: state.beingUpdated
})

export default connect(
    mapStateToProps,
    { addPlant, updatePlant, handleChange }
)(PlantFormView);