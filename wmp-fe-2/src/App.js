import React, { Component } from "react";
import styled from "styled-components";
// import { Route } from 'react-router-dom';
import './App.css';

// Components
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';
import authenticate from "./components/Authenticate.js";

const StyledApp = styled.div`
  background-color: #718D6B;
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
      </StyledApp>
      </div>
    );
  }
}

const ConditionalRender = authenticate(HomeView)(LoginView);

export default App;