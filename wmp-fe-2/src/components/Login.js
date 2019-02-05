import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const LoginForm = styled.div`
    width: 100%;
    margin: 0 auto;
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
            <LoginForm>
                <form autoComplete="off">
                    <input 
                    type="text"
                    onChange={this.handleChanges}
                    value={this.state.username}
                    name="username"
                    placeholder="Username"
                    // Needs an addUser fn passed down or created here
                    />
                    <input 
                    type="password"
                    onChange={this.handleChanges}
                    value={this.state.password}
                    name="password"
                    placeholder="Password"
                    />
                    <Button onClick={this.onLogin}>Click To Log In</Button>

                </form>
            </LoginForm>
        );
    }
}

export default Login;