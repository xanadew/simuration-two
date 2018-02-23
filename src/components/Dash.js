import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

// import/write css whenever ready to assume fetal position

import Nav from './Nav';

class Dash extends Component {
    constructor(props){
        super();

        this.state={
            properties:[]
        }
    }

getAllProperties=()=>{
    axios.get('http://localhost:9000/api/properties')
    .then((res)=>{
        this.setState({
            properties:res.data
        })
    })
}
componentDidMount(){

}
componentWillReceiveProps(){

}
    render() {
        return (
            <div>
                <Nav/>
                <div className='dash-top'>
                <div>
                    <Link to='/wiz/1'>
                    <button>Add New Property</button>
                    </Link>
                </div>
                <div className='dash-options'>
                <p>List properties with 'desired rent' greater than: $</p>
                <input type='text' placeholder='0'></input>
                <button>Filter</button>
                <button>Reset</button>
                </div>
                </div>
                <div className='dash-bottom'>
                {this.state.properties.map(property=>{
                    return <div>{property.city}</div>
                })}
                </div>
            </div>
        );
    }
}

export default Dash;