import React, { Component } from "react";
import styled from "styled-components";
import { Route } from 'react-router-dom';
import './App.css';

// Components
// import { Header } from "./components/index.js";
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';
import PlantFormView from './views/PlantFormView';
import PlantListView from "./views/PlantListView.js";


// Action creators
import { getSanityCheck } from "./store/actions/index.js";
import authenticate from "./components/Authenticate.js";

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
        <Route exact path="/home" />
        <Route path="/plant-list" render={props => (
          <PlantListView {...props} /> )} />
        <Route exact path="/plant-form" render={props => (
          <PlantFormView {...props} /> )}/>
      </StyledApp>
      </div>
    );
  }
}

const ConditionalRender = authenticate(HomeView)(LoginView);

export default App;