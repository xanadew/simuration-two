import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

// import/write css whenever ready to assume fetal position


class Auth extends Component {
    constructor(props){
        super(props);

        this.state={
            username:'',
            password:''
        }
}
    userRegister=()=>{
        let {username,password}=this.state;
        axios.post('http://localhost:9000/api/auth/register',{
            username,
            password
        }).then(()=>{
            this.props.history.push('/dashboard')
        })
    }
    userLogin=()=>{
        let {username,password}=this.state;
        axios.post('http://localhost:9000/api/auth/login',{
            username,
            password
        }).then(()=>{
            this.props.history.push('/dashboard')
        })
    }
    render() {
        return (
            <div className='login-main'>
                <div className='login-center'>
                    <div className='user-input'>
                    <label for='username-input'>Username</label>
                    <input type='text' placeholder='Username' onChange={(e)=>this.setState({username: e.target.value})}>
                    </input>
                    </div>
                    <div className='user-password'>
                    <label for='password-input'>Password</label>
                    <input type='text' placeholder='Password' Onchange={(e)=>this.setState({password: e.target.value})}></input>
                    </div>
                    <div className='login-n-register'>
                    <button onClick={this.loginUser}>Login</button>
                    <Link to='/dashboard'>
                    <button onClick={this.userRegister}>Register</button>
                    </Link>
                    
                    </div>
                
                
                
                </div>
            </div>
        );
    }
}

export default Auth;