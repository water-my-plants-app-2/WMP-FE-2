import React from 'react';
import Home from '../components/Home';
class HomeView extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div>
                <h1>Call Me Sanity Check</h1>
            <Home />
            </div>
        );
    }
}

export default HomeView;