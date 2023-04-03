import axios from "axios";
import { Component } from "react";
import './Register.css';

export default class Register extends Component{
    constructor(){
        super()
        this.state={
            name:'sandip',
            userJson:{}
        }
    }
    
    registerInputValues=(event)=>{
        
    let firstName=event.target.value
    let lastName=event.target.value
    let mobile=event.target.value
    let email=event.target.value
    let address=event.target.value
    let pincode=event.target.value
    let password=event.target.value
    
    
    let json={
        "user_first_name":firstName,
        "user_last_name":lastName,
        "user_mobile":mobile,
        "user_email":email,
        "user_address":address,
        "user_address":pincode,
        "user_password":password
    }
         console.log("firstname"+firstName);
    
         this.setState(this.state.userJson=json)
         console.log("user json"+JSON.stringify(json));
         console.log("user state json"+this.state.userJson);
    }
    
    registerSubmit=()=>{
        axios.post("http://localhost:8080/user/save",this.state.userJson).then()
    
    }
    
    changeStaet=()=>{
    
        console.log("clicking");
        this.setState({name:'Ganesh'})
    }
        render(){
            return (
                <div class="container" style={{justifyContent:"center",alignItems:"center",display:"flex"}} >
                       <div class="cards">
    <h3>Registration Form</h3>
    <form action="home.html" name="registerform">
    <label>First Name</label>
    <input placeholder="Enter first Name" type="text" name='user_first_name' onChange={(event)=>this.registerInputValues(event)}/>
    <label>Last Name</label>
    <input placeholder="Enter Last Name" type="text"  name='user_last_name' onChange={(event)=>this.registerInputValues(event)}/>
    <label>Mobile</label>
    <input placeholder="Enter mobile" type="number" name='user_mobile' onChange={(event)=>this.registerInputValues(event)}/>
    <label>Email</label>
    <input placeholder="Enter email" type="email" name='user_email' onChange={(event)=>this.registerInputValues(event)}/>
    <label>address</label>
    <input placeholder="Enter your address" type="text" name='user_address' onChange={(event)=>this.registerInputValues(event)}/>
    <label>pincode</label>
    <input placeholder="enter your pincode" type="number" name='user_address' onChange={(event)=>this.registerInputValues(event)}/>
    <label >password</label>
    <input placeholder="enter you password" type="password" name='user_password' onChange={(event)=>this.registerInputValues(event)}/>
    
    <button class="sub-btn" >Submit</button>
    </form>
    </div>
                </div>
            )
        }
    
    }