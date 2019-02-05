import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Route } from 'react-router-dom';

// Components
import { Header } from "./components/index.js";
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';
import PlantFormView from './views/PlantFormView';

// Action creators
import { getSanityCheck } from "./store/actions/index.js";
import authenticate from "./components/Authenticate.js";
import PlantListView from "./views/PlantListView.js";

const StyledApp = styled.div`
  background-color: #c7dbf4;
  min-height: 100vh;
  .message {
    text-align: center;
  }
`;

class App extends Component {
  componentDidMount = () => this.props.getSanityCheck();

  render() {
    const { message } = this.props;
    return (
      <StyledApp>
        <Header />
        <p className="message">{message}</p>
        <ConditionalRender />
        <Route exact path="/home" component={HomeView} />
        <Route path="/plant-list" render={props => (
          <PlantListView 
          {...props}
          />
        )} />
        <Route path="/plant-form" render={props => (
          <PlantFormView {...props} />
        )}/>
      </StyledApp>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message
});

const ConditionalRender = authenticate(HomeView)(LoginView);

export default connect(
  mapStateToProps,
  { getSanityCheck }
)(App);
