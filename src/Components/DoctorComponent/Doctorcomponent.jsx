import { Component } from "react";

export default class DoctorComponet extends Component{
    render(){

        return(<div className="container">
                <div style={{ display: 'flex' }} >
            <div className="col-4">
            <div className="row">
                <div className="card">
                   
                
                    <h5>Dr.Sandeep</h5>
                    <p>General Medicine</p>
                    <h5>M.B.B.S</h5>
                 <p> <b>5</b> years experience</p>
                    <p>Avaliable for</p>
                    <b>Online/Clinic Visit</b>
                    <div className="card" style={{backgroundColor:"#E70A8B"}}>
                        <h6>Book Appointment</h6>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-1">

            </div>
            <div className="col-4">
            <div className="row">
                <div className="card">
                    <h5>Dr.Jyothirmayi</h5>
                    <p>Infectious Disease,General Medicine,Diabetology</p>
                    <h5>MD-General Medicine</h5>
                    <p><b>7.9</b> years experience</p>
                    <p>Avaliable for</p>
                    <b>Online/Clinic Visit</b>
                    <div className="card" style={{backgroundColor:"#E70A8B"}}>
                        <h6>Book Appointment</h6>
                    </div>
                </div>
            </div>
            
            </div>
            <div className="col-2">
                <p><u>more</u></p>
            </div>
         </div>
        </div>)
    }
}