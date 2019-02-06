import React from 'react';
import axios from 'axios';

import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ReactNotification from 'react-notifications-component';

const baseUrl = 'https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants';

const Form = styled.form`
    margin: 0 auto;
    display: flex;
    width: 50%;
    flex-direction: column;
`

class PlantForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
            characteristic: '',
            lastWater: '',
            nextWater: '',
            img_url: '',
            // isUpdating: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addNotification = this.addNotification.bind(this);
        this.notificationDOMRef = React.createRef();
    }

    addNotification() {
        this.notificationDOMRef.current.addNotification({
            title: 'Plant Stuff',
            message: 'Plant Added!',
            type: "success",
            insert: "bottom",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: { duration: 2000 },
            dismissable: { click: true }
        })
    }

    addPlant = event => {
        event.preventDefault();
        console.log('Add plant invoked ');
        axios
        .post(`${baseUrl}`, {
            name: this.state.name,
            description: this.state.description,
            characteristic: this.state.characteristic,
            lastWater: this.state.lastWater,
            nextWater: this.state.nextWater,
            img_url: this.state.img_url
        })
        .then(res => {
          console.log(res);
        //   this.setState({ plants: res.data })
          console.log('AddPlant data', res.data);
          this.props.history.push('/plant-list')
        })
        .catch(err => {
          console.log('Add plant did not work. You must not have a green thumb.', err)
        })
    }

    updatePlant = () => {
        axios
          .put(`${baseUrl}/${this.state.id}`, {
            name: this.state.name,
            description: this.state.description,
            characteristic: this.state.characteristic,
            lastWater: this.state.lastWater,
            nextWater: this.state.nextWater,
            img_url: this.state.img_url
          })
          .then(res => {
            this.setState({
              isUpdating: false,
                name: '',
                description: '',
                characteristic: '',
                lastWater: '',
                nextWater: '',
                img_url: ''
            });
            this.props.history.push('/plants')
          })
          .catch(err => {
            console.log('Update fn is not working', err);
          })
      }
    
      handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
      
    // handleClick = () => {
    //     this.addNotification();
    //     this.addPlant();
    // }

      render(){
          return(
              <div>
                  <ReactNotification ref={this.notificationDOMRef} />
                  <Form autoComplete="off" onSubmit={this.addPlant}>
                  <input 
                  onChange={this.handleInputChange}
                  placeholder="Plant Name"
                  value={this.state.name}
                  name="name"
                  />
                  <input
                  type="text" 
                  onChange={this.handleInputChange}
                  placeholder="Plant Description"
                  value={this.state.description}
                  name="description"
                  />
                  <input
                  type="text" 
                  onChange={this.handleInputChange}
                  placeholder="Plant Characteristic"
                  value={this.state.characteristic}
                  name="characteristic"
                  />
                  <input 
                  type="text"
                  onChange={this.handleInputChange}
                  placeholder="How Often Does It Need to be Watered?"
                  value={this.state.lastWater}
                  name="lastWater"
                  />
                  <input
                  type="text" 
                  onChange={this.handleInputChange}
                  placeholder="When does it next need to be watered?"
                  value={this.state.nextWater}
                  name="nextWater"
                  />
                  <input
                  type="text" 
                  onChange={this.handleInputChange}
                  placeholder="Drop in a picture of your plant!"
                  value={this.state.img_url}
                  name="img_url"
                  />
                  <Button onClick={() => this.addPlant}>Click to Add Plant!</Button>
                  </Form>
              </div>
          );
      }
}

export default PlantForm;