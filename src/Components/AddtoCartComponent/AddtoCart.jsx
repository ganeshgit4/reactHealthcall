import axios from "axios";
import { Component } from "react";

export default class AddToCart extends Component{
    constructor(props){
        super(props);
        this.state={
            testList:[]
        }
        this.gettestList()
    }
    gettestList= ()=>{
        console.log("calling test list");
        axios.get("http://localhost:8081/test/get").then(
   


        (res) =>{
 this.setState(this.state.testList=res.data)

        }

        )
    }

    render(){
        return( 
        <div className="container" style={{backgroundColor: "#e8e7e3"}}> 
        <div className="row">
            <div className="col-6" style={{display:"inline"}}>
                <div className="card" >
                <h1>Booking Slot Time</h1>
                <div >
                    <h5>morning slots:</h5>
                <button type="button" class="btn btn-success ">9:30</button> 
                <button type="button" class="btn btn-success">10:30</button> 
                <button type="button" class="btn btn-success">11:30</button>
                <button type="button" class="btn btn-success">12:30</button>
                <button type="button" class="btn btn-success">1:30</button>

                <h5>Afternoon slots:</h5>
                <button type="button" class="btn btn-success">2:30</button>
                <button type="button" class="btn btn-success">3:30</button>
                <button type="button" class="btn btn-success">4:30</button>
                <button type="button" class="btn btn-success">5:30</button>
                <button type="button" class="btn btn-success">6:30</button>
                </div>                
                </div>
            </div>
            <div className="col-6">
                <div className="card">
                <ul class="list-group">
                    <h3>Test List:</h3>
                    {
                        this.state.testList.map(
                            (test) =>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                           <h5>{test.test_name} </h5> <div> <h6>
                            
                            
                            
                            {test.test_price}</h6></div>   
                     </li>
                     )}
                </ul>
                </div>
            </div>
        </div>
        <div className="row">
            <h1>payment</h1>
          <div className="col-6" >
           <div className="card" >
            <h1>Card:-</h1>
                   <form action="">
                 <p>slect the payment mode</p>
                 <input type="radio" id="html" name="fav_language" value="HTML"/>
                     <label for="Credit" style={{fontSize:'20px'}}>Credit</label><br />
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                     <label for="Debit" style={{fontSize:'20px'}}>Debit</label><br />
<input type="radio" id="html" name="fav_language" value="HTML"/>
                     <label for="G Pay" style={{fontSize:'20px'}}>G Pay</label><br />
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                     <label for="Phone pay" style={{fontSize:'20px'}}>Phone pay</label><br />
                      <input type="radio" id="html" name="fav_language" value="HTML"/>
                     <label for="Paytem" style={{fontSize:'20px'}}>Paytem</label><br />   
                    <input type="radio" id="html" name="fav_language" value="HTML"/>
                     <label for="Cash" style={{fontSize:'20px'}}>Cash</label><br />
                     <button type="button" class="btn btn-success" style={{width:"150px"}}>Book</button>
                    </form>                            
           </div>
             </div>
             <div className="col-6" >
             <div className="card" >
                <h1>NetBanking</h1>
                <p>now days not avilable</p>
             </div>
             </div>
        </div>


        </div>
       
        
        )
    }
}