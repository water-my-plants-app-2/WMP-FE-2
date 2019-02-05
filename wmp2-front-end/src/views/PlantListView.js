import React from 'react';
import axios from 'axios';

// Components
import PlantList from '../components/PlantList';

// const baseUrl = 'https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants';

class PlantListView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            plants: []
        }
    }

    componentDidMount(){
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=cBhPySRjxlaeFZnAGh5rWlxNMhjt9hTAQZlKSVuS')
        .then(res => {
        console.log(res);
          this.setState({ plants: res.data}, () => console.log(res.data));
        })
        .catch(err => {
          console.log('No plants here', err.response);
        })
      }

    // deletePlant = plantId => {
    // axios
    //     .delete(`${baseUrl}/plants/${plantId}`)
    //     .then(res => {
    //     console.log(res);
    //     this.setState({ plants: res.data })
    //     this.props.history.push('/plants')
    //     })
    //     .catch(err => {console.log('Delete plant did not work', err) })
    // }

    render(){
        return(
            <div>{this.state.plants.explanation}</div>
            // <PlantList 
            // plants={this.state.plants}
            // deletePlant={this.deletePlant}
            // />
        );
    }
}

export default PlantListView;