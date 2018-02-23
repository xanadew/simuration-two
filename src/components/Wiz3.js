import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {saveWiz3} from '../actions/saveWiz3';

class Wiz3 extends Component {
    constructor(props){
        super(props);

        this.state={
            imgUrl:this.props.imgUrl||''
        }
    }
    render() {
        return (
            <div>
                <h1>STEP 3</h1>
                <input type='text' placeholder='IMAGE GOES HERE'
                onChange={(e)=>{this.setState({imgUrl:e.target.value})}}
                value={this.state.imgUrl||this.props.imgUrl}></input>
                <Link to='/wiz/2'>
                <button>PREVIOUS STEP</button>
                </Link>
                <Link to='/wiz/4'>
                <button onClick={(e)=>this.props.saveWiz3(this.state)}>
                NEXT STEP</button>
                </Link>
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return{
        imgUrl:state.wiz.imgUrl
    }
}
const mapDispatchToProps={
    saveWiz3:saveWiz3
}
export default connect(mapStateToProps,mapDispatchToProps)(Wiz3);