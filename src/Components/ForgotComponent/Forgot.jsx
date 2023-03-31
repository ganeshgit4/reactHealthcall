import { Component } from "react"

class Forgotcomponent extends Component{
    render(){
        return(
        <div className="d-flex justify-content-center">
           <div class="card text-center" style={{width: 400}}>
    <div class="card-header h5 text-white "style={{backgroundColor:"#E70A8B"}}>Password Reset</div>
    <div class="card-body px-5">
        <p class="card-text py-2">
            Enter your email address and we'll send you an email with instructions to reset your password.
        </p>
        <div class="form-outline">
            <input type="email" id="typeEmail" class="form-control my-3" />
            <label class="form-label" for="typeEmail">Email input</label>
        </div>
        <a href="#" class="btn w-100" style={{backgroundColor:"#E70A8B",color:"white"}}>Reset password</a>
        <div class="d-flex justify-content-between mt-4">
            <a class="" href="#">Login</a>
            <a class="" href="#">Register</a>
        </div>
    </div>
</div>
     
        </div>)
    }
    
}
export default Forgotcomponent;