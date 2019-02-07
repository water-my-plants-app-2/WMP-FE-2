import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import PlantSchedule from '../components/PlantSchedule';

class PlantScheduleView extends React.Component{
    notify = () => this.toastId = toast("Hello", { autoClose: false });

    render(){
        return(
            <div>
                <PlantSchedule 
                plants={this.props.plants}
                notify={this.notify}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    plants: state.plants
})

export default connect(mapStateToProps)(PlantScheduleView);