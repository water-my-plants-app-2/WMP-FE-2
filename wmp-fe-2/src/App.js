import React, { Component } from "react";
import axios from 'axios';
import { connect } from "react-redux";
import styled from "styled-components";
import { Route } from 'react-router-dom';
import './App.css';

// Components
// import { Header } from "./components/index.js";
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
  state = {
    activePlant: null
  }
  componentDidMount = () => this.props.getSanityCheck();

  getPlantById = id => {
    axios
      .get(`https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants/plantById/${id}`)
      .then(res => this.setState({ activePlant: res.data }))
      .catch(err => console.log('Get Item By Id', err))
  }

  render() {
    // const { message } = this.props;
    return (
      <div className="App">
      <StyledApp>
        {/* <Header />
        <p className="message">{message}</p> */}
        <ConditionalRender />
        <Route exact path="/home" />
        <Route path="/plant-list" render={props => (
          <PlantListView 
          {...props}
          getPlantById={this.getPlantById}
          />
        )} />
        <Route exact path="/plant-form" render={props => (
          <PlantFormView {...props} />
        )}/>
      </StyledApp>
      </div>
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
