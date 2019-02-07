import React from 'react';
import Login from '../components/Login';
import './LoginView.css';

class LoginView extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className="LoginBg">
                <div className="loginWrapper">
                <Login 
                />
                </div>
            </div>
        );
    }
}

export default LoginView;