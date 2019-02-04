import React from 'react';
import Home from '../components/Home';
import NavBarView from './NavBarView';
class HomeView extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div>
            <NavBarView />
            <Home />
            </div>
        );
    }
}

export default HomeView;