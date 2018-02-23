import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {saveWiz5,resetStore} from '../actions/wizActions';

class Wiz5 extends Component {
    constructor(props){
        super(props);

        this.state={
            datData:''
        }
    }
    sendDataToStore=()=>{
        let {property_name, description, address, city, state, zip, url, mg_total, mg_monthly, desired_rent, user_id}=this.props;
        axios.post('http://localhost:9000/api/properties',{
            property_name, 
            description, 
            address, 
            city, 
            state, 
            zip, 
            url, 
            mg_total, 
            mg_monthly, 
            desired_rent, 
            user_id
        })
    }
    render() {
        return (
            <div>
                <h1>STEP 5</h1>
                <input type='text' placeholder='RENT IS TOO DAMN HIGH'></input>
                <Link to='/wiz/4'>
                <button>PREVIOUS STEP</button>
                </Link>
                <Link to='/dashboard'>
                <button onClick={this.sendDataToStore}>MISSION COMPREE</button>
                </Link>
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return{
            property_name:state.wizzy.propertyName, 
            description:state.wizzy.description, 
            address:state.wizzy.address, 
            city:state.wizzy.city, 
            state:state.wizzy.state, 
            zip:state.wizzy.zip, 
            url:state.wizzy.imgUrl, 
            mg_total:state.wizzy.mgTotal, 
            mg_monthly:state.wizzy.mgMonthly, 
            desired_rent:state.wizzy.desiredRent, 
            user_id:state.wizzy.userID
    }
}
const mapDispatchToProps={
    saveWiz5:saveWiz5,
    resetStore:resetStore
}
export default connect(mapStateToProps,mapDispatchToProps)(Wiz5);