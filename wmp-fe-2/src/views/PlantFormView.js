import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { addPlant } from '../store/actions';

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
        isEditing: false
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
        axios
            .put(
                `https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants/${this.state.editingId}`,
                this.state.plant
            )
            .then(res => {
                this.setState({
                    plants: res.data,
                    editingId: null,
                    isEditing: false,
                    plant: blankPlant
                });
            })
            .catch(err => console.log('Redux update error', err));
    }
    
    render(){
        return(
            <div>
                <PlantForm 
                addPlant={this.addPlant}
                changeHandler={this.changeHandler}
                plant={this.state.plant}
                isEditing={this.state.isEditing}
                updatePlant={this.updatePlant}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({})

export default connect(
    mapStateToProps,
    { addPlant }
)(PlantFormView);