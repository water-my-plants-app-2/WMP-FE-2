import React from 'react';

import NavBar from '../components/NavBar';

class NavBarView extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div>
                <NavBar />
            </div>
        );
    }
}

export default NavBarView;