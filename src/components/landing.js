import React,{Component} from 'react';
import Navbar from './navbar';
class LandingPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
            action: ''
        }
        if(localStorage.getItem('login')=='true'){
            this.props.history.push('/home');
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        let em = this.state.email;
        let p = this.state.password;
        if(em==""){
            alert("Please enter valid email");
            return;
        } 
        if(p=="" || p.length<8){
            alert("Please enter valid password");
            return;
        }
        if(this.state.action=='login'){
            console.log('adm');
            let sem = localStorage.getItem('useremail');
            let sp = localStorage.getItem('password');
            if(sem==em && p==sp){
                alert("Login Successful");
                localStorage.setItem('login','true');
                this.props.history.push('/home');
            }
            else{
                alert('Incorrect Password or Email');
            }   
        }
        else if(this.state.action=='profile'){
            console.log('fcome');
            localStorage.setItem('useremail',em);
            localStorage.setItem('password',p);
            this.props.history.push('/profile');
        }
        
    }
    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    LoginClick = e => {
       this.setState({
           action:'login'
       }) 
    }

    SignupClick = e => {
        this.setState({
            action:'profile'
        }) 
    }
    
    render(){
        return(
            <div>
            
            <div className="container">
            <h1 className="text-center">Welcome </h1>
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" name="email" onChange={this.handleChange} value={this.state.email} className="form-control" placeholder="Enter email" />
                           </div>
                           <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" onChange={this.handleChange} value={this.state.password} className="form-control" placeholder="Enter Password" />
                           </div>
                           <div className="row">
                               <div className="col-sm-6">
                                    <button className="btn btn-primary btn-block" onClick={this.LoginClick}>Login</button>
                               </div> 
                               <hr className="l-lg-none l-md-none" />
                               <div className="col-sm-6">
                                    <button className="btn btn-success btn-block" onClick={this.SignupClick}>Signup</button>
                               </div> 
                           </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default LandingPage;