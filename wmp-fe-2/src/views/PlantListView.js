import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { getPlants, deletePlant } from '../store/actions';

// Components
import PlantList from '../components/PlantList';
import Plant from '../components/Plant';

class PlantListView extends React.Component{
    state = {
        plants: []
    };

    componentDidMount(){
        this.props.getPlants();
    }

    render(){
        return(
            <PlantList 
            plants={this.props.plants}
            history={this.props.history}
            getPlantById={this.props.getPlantById}
            deletePlant={this.props.deletePlant}
            />
        );
    }
}

const mapStateToProps = state => ({
    plants: state.plants
})

export default connect(
    mapStateToProps,
    { getPlants, deletePlant }
)(PlantListView);

// const baseUrl = 'https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants';
// const deleteUrl = 'https://wmp2-back-end.herokuapp.com/api/plantsunp/';

// class PlantListView extends React.Component{
//     // constructor(props){
//     //     super(props);
//     //     this.state = {
//     //         plants: [],
//     //         isUpdating: false
//     //     }
//     // }

//     componentDidMount(){
//         this.props.getPlants();
//         // axios
//         // .get('https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants')
//         // .then(res => {
//         // console.log(res);
//         //   this.setState({ plants: res.data}, () => console.log(res.data));
//         // })
//         // .catch(err => {
//         //   console.log('No plants here', err.response);
//         // })
//       }

//     deletePlant = plantId => {
//     console.log('Hello are you here?');
//     axios
//         .delete(`${deleteUrl}/${plantId}`)
//         .then(res => {
//         const newPlants = this.state.plants.filter(plant => plant.id !== plantId)
//         this.setState({ plants: newPlants })
//         this.props.history.push('/plant-list');
//         })
//         .catch(err => {console.log('Delete plant did not work', err) })
//     }

//     // populateForm = (e, plant) => {
//     //     e.preventDefault();
//     //     this.setState({
//     //     //   plant: this.state.plants.find(plant => plant.id === id),
//     //         plant,
//     //         isUpdating: true
//     //     });
//     //     this.props.history.push('/plant-form');
//     //   };

//     render(){
//         return(
//         <div>
//             <PlantList 
//             plants={this.state.plants}
//             deletePlant={this.deletePlant}
//             populateForm={this.props.populateForm}
//             />
//             <Route path="/plant-list/:plantId" render={props => (
//             <Plant {...props} 
//             deletePlant={this.deletePlant}
//             plants={this.state.plants}
//             // isUpdating={this.state.isUpdating}
//             />
//           )} />
//         </div>
//         );
//     }
// }

// const mapStateToProps = state =>({
//     plants: state.plants
// })

// export default connect(
//     mapStateToProps,
//     { deletePlant, getPlants }
// )(PlantListView);