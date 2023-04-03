import { Component } from "react";
import axios from "axios";

class TestListComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            paymentList:[]
        }
    }
    getPaymentList= ()=>{
        console.log("invoking");
        axios.get("http://localhost:8090/payment/get").then(
            (result)=>{
              console.log(result.data)
                  
                console.log(result.status)
                

            }
        )
    }

    render(){

        return(<div className="container fluid">
           
            <div style={{ display: 'flex' }} >
             
          
            <div className="col-5">
            <div className="card">
                <div className="row">
                    
                <a className="nav-link" href="/test" >
                     <h4>Blood Glucose, Fasting</h4>
                     </a>
                        
                        <p>Offer price<br/>Rs200.00</p>
                        
                      
                        
                       <div className="col-6">
                       <p>Before Offer price<br/>Rs250.00</p>
                       </div>
                    
                        <div className="card" style={{backgroundColor:"#E70A8B"}}>
                            <a className="nav-link" href="/addtocart">
                            <h6>Add to cart</h6>
                            </a>
                        
                       </div>
                    </div>
                    </div>
                    </div>
                    
                  
         <div className="col-1">
            <div className="row">

            </div>
         </div>
        
                
                  <div className="col-5">
            <div className="card">
                <div className="row">
                    
                <a className="nav-link" href="/test" >
                        <h4>X Ray- Paranasal Sinuses</h4>
                        </a>
                        <p>Offer Price<br/>Rs95.00</p>
                        
                       
                        
                       <div className="col-6">
                       <p>Before Offer price<br/>Rs388.00</p>
                       </div>
                       
                        <div className="card" style={{backgroundColor:"#E70A8B"}}>
                        <a className="nav-link" href="/addtocart">
                            <h6>Add to cart</h6>
                            </a>
                        
                       </div>
                    </div>
                    </div>
                    </div>
                    
                  </div>
          
            </div>
        )
    }
}
export default TestListComponent;