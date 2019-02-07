import React from 'react';
import Login from '../components/Login';
import styled from 'styled-components';

const LoginViewWrapper = styled.div`
    border: 1px solid red;
    background-image: url('../plantAppBg.jpg');

`

class LoginView extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <LoginViewWrapper>
                <Login 
                />
            </LoginViewWrapper>
        );
    }
}

export default LoginView;