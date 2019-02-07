import React from 'react';
import { withRouter } from 'react-router';

import { connect } from 'react-redux';

// import axios from 'axios';


import styled from 'styled-components';
import Button from '@material-ui/core/Button';
// import ReactNotification from 'react-notifications-component';

// const baseUrl = 'https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants';

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
        if (props.isUpdating){
            props.updatePlant();
        } else {
            props.addPlant();
        }
        props.history.push('plant-list');
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
                  placeholder="Describe how to take care of this plant"
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

const mapStateToProps = state => ({
    plants: state.plants
})

export default withRouter(PlantForm);

// class PlantForm extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             name: '',
//             description: '',
//             characteristic: '',
//             lastWater: '',
//             nextWater: '',
//             img_url: '',
//             isUpdating: false
//         };
//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.addNotification = this.addNotification.bind(this);
//         this.notificationDOMRef = React.createRef();
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         if (this.state.isUpdating){
//             this.updatePlant();
//         } else {
//             this.addPlant();
//         }
//     }

//     addNotification() {
//         this.notificationDOMRef.current.addNotification({
//             title: 'Plant Stuff',
//             message: 'Plant Added!',
//             type: "success",
//             insert: "bottom",
//             container: "top-right",
//             animationIn: ["animated", "fadeIn"],
//             animationOut: ["animated", "fadeOut"],
//             dismiss: { duration: 2000 },
//             dismissable: { click: true }
//         })
//     }

//     addPlant = event => {
//         event.preventDefault();
//         console.log('Add plant invoked ');
//         axios
//         .post(`${baseUrl}`, {
//             name: this.state.name,
//             description: this.state.description,
//             characteristic: this.state.characteristic,
//             lastWater: this.state.lastWater,
//             nextWater: this.state.nextWater,
//             img_url: this.state.img_url
//         })
//         .then(res => {
//           console.log(res);
//         //   this.setState({ plants: res.data })
//           console.log('AddPlant data', res.data);
//           this.props.history.push('/plant-list')
//         })
//         .catch(err => {
//           console.log('Add plant did not work. You must not have a green thumb.', err)
//         })
//     }

//     updatePlant = () => {
//         axios
//           .put(`${baseUrl}/${this.state.id}`, this.state.plant
//         //   {
//         //     name: this.state.name,
//         //     description: this.state.description,
//         //     characteristic: this.state.characteristic,
//         //     lastWater: this.state.lastWater,
//         //     nextWater: this.state.nextWater,
//         //     img_url: this.state.img_url
//         //   }
//           )
//           .then(res => {
//             this.setState({ plants: res.data, isUpdating: false}
//                 // {
//             //   isUpdating: false,
//             //     name: '',
//             //     description: '',
//             //     characteristic: '',
//             //     lastWater: '',
//             //     nextWater: '',
//             //     img_url: ''
//             // }
//             );
//             this.props.history.push('/plants')
//           })
//           .catch(err => {
//             console.log('Update fn is not working', err);
//           })
//       }
    
//       handleInputChange = e => {
//         this.setState({ [e.target.name]: e.target.value });
//       };
      
//     // handleClick = () => {
//     //     this.addNotification();
//     //     this.addPlant();
//     // }

//       render(){
//           return(
//               <div>
//                   <h2>{this.state.isUpdating ? 'Update Plant Information' : 'Add New Plant'}</h2>
                //   <Form autoComplete="off" onSubmit={this.addPlant}>
                //   <AddPlantInput 
                //   onChange={this.handleInputChange}
                //   placeholder="Plant Name"
                //   value={this.state.name}
                //   name="name"
                //   />
                //   <AddPlantInput
                //   type="text" 
                //   onChange={this.handleInputChange}
                //   placeholder="Describe how to take care of this plant"
                //   value={this.state.description}
                //   name="description"
                //   />
                //   <AddPlantInput
                //   type="text" 
                //   onChange={this.handleInputChange}
                //   placeholder="Plant Characteristic"
                //   value={this.state.characteristic}
                //   name="characteristic"
                //   />
                //   <AddPlantInput 
                //   type="text"
                //   onChange={this.handleInputChange}
                //   placeholder="How Often Does It Need to be Watered?"
                //   value={this.state.lastWater}
                //   name="lastWater"
                //   />
                //   <AddPlantInput
                //   type="text" 
                //   onChange={this.handleInputChange}
                //   placeholder="When does it next need to be watered?"
                //   value={this.state.nextWater}
                //   name="nextWater"
                //   />
                //   <AddPlantInput
                //   type="text" 
                //   onChange={this.handleInputChange}
                //   placeholder="Drop in a picture of your plant!"
                //   value={this.state.img_url}
                //   name="img_url"
                //   />
                //   <Button onClick={() => this.addPlant}>{this.state.isUpdating ? 'Update Plant Information' : 'Add New Plant'}</Button>
                //   </Form>
//               </div>
//           );
//       }
// }

// export default PlantForm;