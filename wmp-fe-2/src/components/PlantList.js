import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import Plant from './Plant';

const PlantListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
`

const PlantWrapper = styled.div`
    margin: 2%;
`

const PlantPicture = styled.img`
    height: 200px;
    width: auto;
`

class PlantList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
             isUpdating: false,
            item: null
        }
    }

    // populateForm1 = (id) => {
    //     const item = this.props.plants.find(plant => plant.id === id);
    //     this.props.populateForm(item);
    // }

    populateForm = (item) => {
        // e.preventDefault();
        console.log('populate test', item);
        this.setState({
        //   plant: this.state.plants.find(plant => plant.id === id),
            item,
            isUpdating: true
        });
        this.props.history.push('/plant-form');
      };

    render(){
    return(
        <PlantListWrapper>
            {this.props.plants.map(plant => (
                <PlantWrapper>
                {/* <Link to={`/plant-list/${plant.id}`} key={plant.id}> */}
                <PlantPicture src={plant.img_url} alt={plant.name}
                />
                <h3>I am a {plant.name}</h3>
                <p>Here's how to take care of me: {plant.description}</p>
                <p>{plant.lastWatered}</p>
                <Button onClick={e => {
                    e.preventDefault();
                    console.log('Populate form');
                    this.populateForm(plant);
                }}>Update Plant Information</Button>
                <Button onClick={e => {
                    e.preventDefault();
                    console.log('Ya clicked a delete button');
                    this.props.deletePlant(plant.id)}}
                    color="primary">Delete This Plant
            </Button>
                {/* </Link> */}
                </PlantWrapper>)
                )}
        </PlantListWrapper>
    );
    }
}

export default withRouter(PlantList);