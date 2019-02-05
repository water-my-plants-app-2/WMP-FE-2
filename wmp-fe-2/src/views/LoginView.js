import React from 'react';
import Login from '../components/Login';

class LoginView extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <Login 
            // Needs addUser passed down to it from either store or View state
            />
        );
    }
}

export default LoginView;