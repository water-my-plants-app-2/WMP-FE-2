import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// Components
import { Header } from "./components/index.js";
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';

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
  componentDidMount = () => this.props.getSanityCheck();

  render() {
    const { message } = this.props;
    return (
      <StyledApp>
        <Header />
        <p className="message">{message}</p>
        <ConditionalRender />
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
