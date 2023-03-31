import { Component } from "react";

class FooterComponent extends Component{
    render(){
        return(
        <div className="container " style={{backgroundColor:"#E70A8B"}}>
         
        <div className="row" style={{backgroundColor:"#e8e7e3",marginLeft:"5px",marginRight:'5px'}} >
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