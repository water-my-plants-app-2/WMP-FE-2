import React from 'react';

import PlantListView from '../views/PlantListView';
import HomeView from '../views/HomeView';

const authenticate = App => Login => 
class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    componentDidMount(){
        if (!localStorage.getItem('user')){
            this.setState({ loggedIn: false })
        } else {
            this.setState({ loggedIn: true })
        }
    }

    render(){
        if (this.state.loggedIn) return <PlantListView />;
        return <Login />
    }
}

export default authenticate;