import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {saveWiz2} from '../actions/wizActions';


class Wiz2 extends Component {
    constructor(props){
        super(props);

        this.state={
            address: this.props.address||'',
            city: this.props.city||'',
            state: this.props.state||'',
            zip: this.props.zip||''
        }
    }

    render() {
        return (
            <div>
                <h1>STEP 2</h1>
                <input type='text' placeholder='Address'
                onChange={(e)=>{this.setState({address:e.target.value})}}
                value={this.state.address||this.props.address}></input>
                <input type='text' placeholder='City'
                onChange={(e)=>{this.setState({city:e.target.value})}}
                value={this.state.city||this.props.city}></input>
                <input type='text' placeholder='State'
                onChange={(e)=>{this.setState({state:e.target.value})}}
                value={this.state.state||this.props.state}></input>
                <input type='text' placeholder='ZIP'
                onChange={(e)=>{this.setState({state:e.target.value})}}
                value={this.state.zip||this.props.zip}></input>
                <Link to='/wiz/3'>
                <button onClick={()=>this.props.saveWiz2(this.state)}>NEXT STEP</button>
                </Link>
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return{
        address:state.wiz.address,
        city:state.wiz.city,
        state:state.wiz.state,
        zip:state.wiz.zip
    }
}

const mapDispatchToProps={
    saveWiz2:saveWiz2
}
export default connect(mapStateToProps,mapDispatchToProps)(Wiz2);