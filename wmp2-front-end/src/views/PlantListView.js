import React from 'react';
import PlantList from '../components/PlantList';

class PlantListView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            plants: []
        }
    }

    componentDidMount(){
        axios
        .get('')
        .then(res => {
          this.setState({ plants: res.data })
        })
        .catch(err => {
          console.log('No plants here');
        })
      }

    deletePlant = plantId => {
    axios
        .delete(`${baseUrl}/plants/${plantId}`)
        .then(res => {
        console.log(res);
        this.setState({ plants: res.data })
        this.props.history.push('/plants')
        })
        .catch(err => {console.log(err) })
    }
    

    render(){
        return(
            <PlantList 
            plants={this.state.plants}
            deletePlant={this.deletePlant}
            />
        );
    }
}

export default PlantListView;