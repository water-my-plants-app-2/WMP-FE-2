import React from 'react';

import styled from 'styled-components';
import Button from '@material-ui/core/Button';
// import ReactNotification from 'react-notifications-component';

const Form = styled.form`
    margin: 0 auto;
    display: flex;
    width: 50%;
    flex-direction: column;
`
const AddPlantInput = styled.input`
    font-size: 16px;
    padding-left: 1%;
`

function PlantForm(props){

    const handleClick = ev => {
        ev.preventDefault();
        if (props.plant.isUpdating){
            props.updatePlant();
        } else {
            props.addPlant();
            props.history.push('/plant-list')
        }
        props.history.push('/plant-list');
    };

    return(
        <div>
            <h2>{props.isUpdating ? 'Update Plant Information' : 'Add New Plant'}</h2>
            <Form autoComplete="off" onSubmit={handleClick}>
                  <AddPlantInput 
                  onChange={props.changeHandler}
                  placeholder="Plant Name"
                  value={props.plant.name}
                  name="name"
                  />
                  <AddPlantInput
                  type="text" 
                  onChange={props.changeHandler}
                  placeholder="How much sun does your plant like?"
                  value={props.plant.description}
                  name="description"
                  />
                  <AddPlantInput
                  type="text" 
                  onChange={props.changeHandler}
                  placeholder="Plant Characteristic"
                  value={props.plant.characteristic}
                  name="characteristic"
                  />
                  <AddPlantInput 
                  type="text"
                  onChange={props.changeHandler}
                  placeholder="How Often Does It Need to be Watered?"
                  value={props.plant.lastWater}
                  name="lastWater"
                  />
                  <AddPlantInput
                  type="text" 
                  onChange={props.changeHandler}
                  placeholder="When does it next need to be watered?"
                  value={props.plant.nextWater}
                  name="nextWater"
                  />
                  <AddPlantInput
                  type="text" 
                  onChange={props.changeHandler}
                  placeholder="Drop in a picture of your plant!"
                  value={props.plant.img_url}
                  name="img_url"
                  />
                  <Button onClick={handleClick}>{props.isUpdating ? 'Update Plant Information' : 'Add New Plant'}</Button>
                  </Form>
        </div>
    );
}


export default PlantForm;
