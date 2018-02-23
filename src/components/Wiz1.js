import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {saveWiz1} from '../actions/wizActions';


class Wiz1 extends Component {
    constructor(props){
        super(props);

        this.state={
            propertyName: this.props.propertyName||'',
            propertyDescription: this.props.propertyDescription||''
        }
    }

    render() {
        return (
            <div>
                <h1>STEP 1</h1>
                <input type='text' placeholder='Property Name' 
                onChange={(e)=>{this.setState({propertyName:e.target.value})}}
                value={this.state.propertyName||this.props.propertyName}>
                </input>
                <input type='text' placeholder='Property Description'
                onChange={(e)=>{this.setState({propertyDescription:e.target.value})}}
                value={this.state.propertyDescripton||this.props.propertyDescription}>
                </input>
                <Link to='/wiz/2'>
                <button onClick={()=>this.props.saveWiz1(this.state)}>
                NEXT STEP</button>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        propertyName:state.wizzy.propertyName,
        propertyDescription:state.wizzy.propertyDescription
    }
}
const mapDispatchToProps = {
    saveWiz1:saveWiz1
}
export default connect(mapStateToProps, mapDispatchToProps)(Wiz1);