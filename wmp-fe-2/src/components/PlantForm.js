import React from 'react';

import styled from 'styled-components';
import Button from '@material-ui/core/Button';
// import ReactNotification from 'react-notifications-component';

const FormWrapper = styled.div`
    border: 1px solid green;
    margin-top: 2%;
    width: 86.9%;
    background-color: white;
    margin: 0 auto;
`

const FormHeader = styled.h2`
    margin-top: 2%;
    margin-bottom: 1%;
    font-size: 24px;
`

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
        <FormWrapper>
            <FormHeader>{props.isUpdating ? 'Update Plant Information' : 'Add New Plant'}</FormHeader>
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
                  placeholder="How often does it need to be watered?"
                  value={props.plant.lastWater}
                  name="lastWater"
                  />
                  <AddPlantInput
                  type="text" 
                  onChange={props.changeHandler}
                  placeholder="On what date does it next need to be watered?"
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
        </FormWrapper>
    );
}


export default PlantForm;
