import React from 'react';

import PlantForm from '../components/PlantForm';
import Plant from '../components/Plant';

class PlantFormView extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    
    render(){
        return(
            <div>
                <PlantForm />
            </div>
        );
    }
}

export default PlantFormView;