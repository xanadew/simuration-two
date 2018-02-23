import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

// import/write css whenever ready to assume fetal position

class Nav extends Component {
    constructor(props){
        super(props);
        this.state={
            datData:''
        }
    }
    userLogout=()=>{
        axios.post('http://localhost:9000/api/logout')
    }
    render() {
        return (
            <div className='nav-div'>
                <Link to='/dashboard'>
                {/* logo here */}
                </Link>
                <Link to='/dashboard'>
                <h1>Houser</h1>
                </Link>
                <h1>Dashboard</h1>
                <Link to='/'>
                <button onClick={this.userLogout}>Logout</button>
                </Link>
                
            </div>
        );
    }
}

export default Nav;