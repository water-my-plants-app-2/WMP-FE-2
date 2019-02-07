import React, { Component } from "react";
import styled from "styled-components";
import { Route } from 'react-router-dom';
import './App.css';

// Components
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';
import PlantFormView from './views/PlantFormView';
import PlantListView from "./views/PlantListView.js";
import authenticate from "./components/Authenticate.js";
import PlantScheduleView from "./views/PlantScheduleView";

const StyledApp = styled.div`
  background-color: #c7dbf4;
  min-height: 100vh;
  .message {
    text-align: center;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
      <StyledApp>
        <ConditionalRender />
        <Route path="/plant-list" render={props => (
          <PlantListView {...props} /> )} />
        <Route exact path="/plant-form" render={props => (
          <PlantFormView {...props} /> )}/>
        <Route path="/plant-schedule" render={props => (
          <PlantScheduleView {...props} />
          )} />
      </StyledApp>
      </div>
    );
  }
}

const ConditionalRender = authenticate(HomeView)(LoginView);

export default App;