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
        console.log('Update is great');
        axios
            .put(
                `https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants/${this.state.plant.id}`,
                    {
                    name: this.state.plant.name,
                    description: this.state.plant.description,
                    characteristic: this.state.plant.characteristic,
                    lastWater: this.state.plant.lastWater,
                    nextWater: this.state.plant.nextWater,
                    img_url: this.state.plant.img_url,
                    }
            )
            .then(res => {
                this.setState({
                    plants: res.data,
                    isUpdating: false,
                    plant: blankPlant
                })
                this.props.history.push('/plant-list');
            })
            .catch(err => console.log('Redux update error', err));
    }
    
    render(){
        return(
            <div>
                <PlantForm 
                item={this.props.item}
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
    { addPlant }
)(PlantFormView);