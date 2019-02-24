import React from 'react';
import {Component } from 'react'
import Navbar from './navbar';

export default class Profile extends Component{
    constructor(props){
        super(props);
        this.handleMobile = this.handleMobile.bind(this);
        this.handleDate=this.handleDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name : '',
            mobile : '',
            dat : '',
            addr : '',
            valid : false,
        }
        console.log(Date());
    }
    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        let formStatus = true;
        let n = this.state.name;
        let mob = this.state.mobile;
        let d = this.state.valid;
        let ad = this.state.addr;
        if(n==""){
            formStatus = false;
            alert("Please enter valid name");
            return;
        }
        if(!d){
            formStatus = false;
            alert("Please Enter Valid date");
            return;
        }
        if(mob=='' || mob.length<10){
            formStatus = false;
            alert("Please Enter Valid mobile number");
            return;
        }
        if(ad==""){
            formStatus = false;
            alert("Please enter valid Address");
            return;
        }
        if(formStatus){
            let input = document.getElementById('pic');
            if(input.value==''){
                alert("Please upload a valid pic");
                return;
            }
            else{
                
                if(input.files && input.files[0]) {
                    var reader = new FileReader();
                    
                    reader.onload = function (e) {
                        
                        let du = e.target.result;
                        
                        console.log(du);
                        localStorage.setItem('pic',du);
                    }
                    reader.readAsDataURL(input.files[0]);
                }
            }
            localStorage.setItem('username',n);
            localStorage.setItem('dob',d);
            localStorage.setItem('mobile',mob);
            localStorage.setItem('address',ad);
            localStorage.setItem('login','true');
            this.props.history.push('/home');
        }
    }
    handleMobile(e){
        let mob = e.target.value;

        if(mob.length<=10){
            this.setState({
                mobile:mob
            });
        }
    }
    handleDate(event){
        event.preventDefault();
        let dob=event.target.value;
        let dt = new Date(dob);
        let dd = dt.getDate();
        let mm = dt.getMonth();
        let yyyy = dt.getFullYear();
        let nmm = (mm<10)?'0'+mm:mm;
        let ndd = (dd<10)?'0'+dd:dd;
        let date = ndd + '-' + nmm + '-' + yyyy;
        let cdt = new Date();
        if(yyyy>cdt.getFullYear() || (mm>cdt.getMonth() && yyyy>=cdt.getFullYear()) || (dd>cdt.getDate() && (mm>=cdt.getMonth() && yyyy>=cdt.getFullYear()))){
            alert("Enter valid date");
            date = "dd-mm-yyyy";
        }
        
            this.setState({
                dat : date,
                valid : true,
            });
        
        }
    
    render(){
        return(
            <div>
            
            <div className="container">
            <h1 className="text-center">Complete your profile </h1>
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" value={this.state.name} onChange={this.handleChange} name="name" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label>Profile Picture</label>
                                <input id="pic" type="file" name="pic"/>
                           </div>
                           <div className="form-group">
                                <label>Date of Birth</label>
                                <input type="date" name="dat" onChange={this.handleDate} value={this.state.date} className="form-control" placeholder="Enter date of birth" />
                           </div>
                           <div className="form-group">
                                <label>Mobile</label>
                                <input type="number" name="mobile" onChange={this.handleMobile} value={this.state.mobile} className="form-control" placeholder="Enter your mobile number" />
                           </div>
                           <div className="form-group">
                                <label>Address</label>
                                <textarea name="addr" onChange={this.handleChange} value={this.state.addr} className="form-control" placeholder="Enter your address" />
                           </div>
                           <div className="row">
                               <div className="col-sm-6 offset-sm-3">
                                    <button className="btn btn-primary btn-block">Update Profile</button>
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

