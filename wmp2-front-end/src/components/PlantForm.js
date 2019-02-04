import React from 'react';
import axios from 'axios';

const baseUrl = 'https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants';

class PlantForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            plant: {
                name: '',
                description: '',
                lastWatered: ''
            },
            isUpdating: false
        }
    }

    addPlant = event => {
        event.preventDefault();
        axios
        .post(`${baseUrl}/plants`, this.state)
        .then(res => {
          console.log(res);
          this.setState({ state: res.data })
          this.props.history.push('/plants')
        })
        .catch(err => {
          console.log('Add plant did not work. You must not have a green thumb.', err)
        })
    }

    updatePlant = () => {
        axios
          .put(`${baseUrl}/plants/${this.state.plant.id}`, this.state.plant)
          .then(res => {
            this.setState({
              plants: res.data,
              isUpdating: false,
              plant: {
                name: '',
                description: '',
                lastWatered: ''
              }
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

      render(){
          return(
              <div>
                  <form autoComplete="off" onSubmit={this.addPlant}>
                  <input 
                  onChange={this.handleInputChange}
                  placeholder="Plant Name"
                  value={this.state.name}
                  name="name"
                  />
                  </form>
              </div>
          );
      }
}

export default PlantForm;