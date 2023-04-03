import { Component } from "react";
import axios from "axios";
export default  class Profile extends Component{

constructor(props){
super(props);
 this.state={
  userList:[]
 }
}
 

getuserList= ()=>{
  console.log("calling");
axios.get("http://localhost:8080/user/get").then(
(result) =>{
if(result.status==200)
  console.log(result.status)
}

)


}

getuserList= ()=>{
  console.log("calling");
axios.get("http://localhost:8080/user/get").then(
(result) =>{
if(result.status==200){
  console.log(result.data)
  this.setState(this.state.userList=result.data)
}
}

)


}




  render(){
    return(
      <div class="container" style={{backgroundColor: "#e8e7e3"}}>
        
    {
this.state.userList.map(
(user) =>
<div >
<p>{user.user_id}</p>
<p>{user.user_first_name}</p>
</div>

)


    }




      <div class="row">
        <div class="col-sm">
          
          <img style={{borderRadius: 500,backgroundColor:"lightgray"}} src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
          <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
    <div> <h3>Dr.jone Deo</h3></div>   
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   <div> <h3> drjonedeo@gmail.com</h3></div>   
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <h3>Doctor</h3>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   <h5> iam Doctor,sugur test specilist</h5> 
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <h2>Star Rating</h2><br /><br />
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>  
  </li>
  
</ul>
            
            
          
          
          
        </div>
        <div class="col-sm">
        <ul class="list-group">
        <p style={{alignContent: "center",backgroundColor:"gray"}}> <b>Doctor Details</b> </p>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   <h5> Full Name: </h5> <div> <h6>Dr. Jone Deo Rao</h6></div>   
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   <h5> Mobile No: </h5> <div> <h6>9020608045</h6></div>   
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   <h5> Telephone No: </h5> <div> <h6>234-5678</h6></div>   
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   <h5> Address: </h5> <div> <h6>Bay Area, San Francisco, CA Ameerpet</h6></div>   
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   <h5> Email: </h5> <div> <h6> drjonedeo@gmail.com </h6></div>   
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   <h5> specilist: </h5> <div> <h6>Suger Test specilist </h6></div>   
  </li>
</ul>
        </div>
        <div class="col-sm">
        <ul class="list-group">
  <p style={{alignContent: "center",backgroundColor:"gray"}}><b>Test</b></p>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   <h5> Sugur Test: </h5> <div> <h6>100 </h6></div>   
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   <h5> Blood Test: </h5> <div> <h6>945</h6></div>   
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   <h5> ECG Test: </h5> <div> <h6>2</h6></div>   
  </li>
  
</ul>
        </div>
      </div>
    </div>
    
        
          
    )
  }
}