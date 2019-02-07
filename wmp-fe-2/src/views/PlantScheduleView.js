import React from 'react';
import { connect } from 'react-redux';

import PlantSchedule from '../components/PlantSchedule';

class PlantScheduleView extends React.Component{

    render(){
        return(
            <div>
                <PlantSchedule 
                plants={this.props.plants}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    plants: state.plants
})

export default connect(mapStateToProps)(PlantScheduleView);