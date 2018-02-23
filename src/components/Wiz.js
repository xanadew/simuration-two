import React, { Component } from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import Nav from './Nav';
import Wiz1 from './Wiz1';
import Wiz2 from './Wiz2';
import Wiz3 from './Wiz3';
import Wiz4 from './Wiz4';
import Wiz5 from './Wiz5';

class Wiz extends Component {
    constructor(props){
        super(props);

        this.state={
            datData:''
        }
    }

    render() {
        return (
            <div>
                <Nav/>
                <h1>Add New Listing</h1>
                <Link to='/dashboard'>
                <button>Cancel</button>
                </Link>
                <Switch>
                    <Route path={`${this.props.match.path}1`} component={Wiz1}/>
                    <Route path={`${this.props.match.path}2`} component={Wiz2}/>
                    <Route path={`${this.props.match.path}3`} component={Wiz3}/>
                    <Route path={`${this.props.match.path}4`} component={Wiz4}/>
                    <Route path={`${this.props.match.path}5`} component={Wiz5}/>
                </Switch>
            </div>
        );
    }
}

export default Wiz;