import React from 'react';
import styled from 'styled-components';

//Components
import Home from '../components/Home';
import NavBarView from './NavBarView';

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
            <HomeViewWrapper>
            <NavBarView />
            <Home />
            </HomeViewWrapper>
        );
    }
}

export default HomeView;