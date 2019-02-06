import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const LoginFormWrapper = styled.div`
    width: 50%;
    padding-top: 2%;
    margin: 0 auto;
    font-family: merriweather, sans-serif;
    display: flex;
    justify-content: center;
    flex-direction: column;
    // background-color: #c1f4c9;
    // height: 900px;
`

const LoginHeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`

const LoginHeader = styled.h1`
    font-size: 26px;
    font-weight: bold;
`

const HeaderTwo = styled.h2`
    margin-top: 2%;
    font-weight: 400;
    line-height: 18px;
`
const SubTitle = styled.span`
    margin-top: 2%;
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5%;
`
const FormInput = styled.input`
    font-size: 16px;
    padding-left: 1%;
    font-size: 18px;
    width: 75%;
    align-self: center;
`

const LoginIcon = styled.img`
    margin-top: 2%;
    width: 12%;
    align-self: center;
`
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChanges = ev => {
        this.setState({ [ev.target.name]: ev.target.value })
    }

    onLogin = ev => {
        const user = this.state.username
        localStorage.setItem('user', user)
        window.location.reload();
    }


    render(){
        return(
            <LoginFormWrapper>
                <LoginHeaderWrapper>
                    <LoginHeader>Welcome to Water My Plants!</LoginHeader>
                    <HeaderTwo>Ready to start hydrating your plants?</HeaderTwo>
                    <SubTitle>Log In To Begin!</SubTitle>
                </LoginHeaderWrapper>
                <LoginForm autoComplete="off">
                    <FormInput 
                    type="text"
                    onChange={this.handleChanges}
                    value={this.state.username}
                    name="username"
                    placeholder="Username"
                    // Needs an addUser fn passed down or created here
                    />
                    <FormInput 
                    type="password"
                    onChange={this.handleChanges}
                    value={this.state.password}
                    name="password"
                    placeholder="Password"
                    />
                    <Button onClick={this.onLogin}
                    className="mdc-button--raised"
                    style={{width: "76%", marginLeft: "12%"}}>Click To Log In</Button>
                </LoginForm>
                <LoginIcon src="https://img.icons8.com/dotty/80/000000/natural-food.png" />
            </LoginFormWrapper>
        );
    }
}

export default Login;