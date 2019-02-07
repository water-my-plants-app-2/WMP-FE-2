import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

//Components
import Home from '../components/Home';
import NavBarView from './NavBarView';
import PlantFormView from '../views/PlantFormView';
import PlantListView from "../views/PlantListView.js";
import PlantScheduleView from "../views/PlantScheduleView";


const HomeViewWrapper = styled.div`
    margin: 0 auto;
`
class HomeView extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div>
            <HomeViewWrapper>
            <NavBarView />
            <Home />
            <Route path="/plant-list" render={props => (
                <PlantListView {...props} /> )} />
            <Route exact path="/plant-form" render={props => (
                <PlantFormView {...props} /> )}/>
            <Route path="/plant-schedule" render={props => (
                <PlantScheduleView {...props} /> )} />
            </HomeViewWrapper>
            </div>
        );
    }
}

export default HomeView;