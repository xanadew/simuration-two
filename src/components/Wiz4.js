import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {saveWiz4,writeMgField,writeLoanField} from '../actions/wizActions';

class Wiz4 extends Component {
    constructor(props){
        super(props);

        this.state={
            loanAmt:this.props.loanAmt,
            monthlyMg:''
        }
    }
    render() {
        return (
            <div>
                <h1>STEP 4</h1>
                <input type='text' placeholder='LOAN AMOUNT'
                onChange={(e)=>{this.props.writeLoanField({mgTotal:e.target.value})}}></input>
                <input type='text' placeholder='MONTHLY MORTGAGE OMG'
                onChange={(e)=>{this.props.writeMgField({mgMonthly:e.target.value})}}></input>
                <Link to='/wiz/3'>
                <button>PREVIOUS STEP</button>
                </Link>
                <Link to='/wiz/5'>
                <button onClick={(e)=>this.props.saveWiz4(this.state)}>
                NEXT STEP</button>
                </Link>
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return{
        loanAmt:state.wizzy.loanAmt,
        monthlyMg:state.wizzy.monthlyMg
    }
}
const mapDispatchToProps={
    saveWiz4:saveWiz4
}
export default connect(mapStateToProps,mapDispatchToProps)(Wiz4);