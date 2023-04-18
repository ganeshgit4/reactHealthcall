import { Component } from "react";

class FooterComponent extends Component{
    render(){
        return(
        <div className="container ">
         
        <div className="row" style={{backgroundColor:"#4d7556", color:"white"}} >
            <div className="col-3">
                <h2>Address</h2>
                <p>Hyderabad</p>
                <p>Ammerpet</p>
                <p>kukatpally</p>
            </div>
              <div className="col-3">
                <h2>Contact</h2>
                <p>+91-9490636450</p>
                </div>  
                <div className="col-3">
                    <h2>E-mail</h2>
                    <p>healthcall@hospital.com</p>
                </div>
                <div className="col-3">
                    <h2>Location</h2>
                </div>
            

        </div>

        </div>
        
        )
    }
}
export default FooterComponent