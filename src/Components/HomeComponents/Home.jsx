import { Component } from "react";



import Carousel from "../CaourselComponent/CaourselComponent";
import DoctorComponent from "../DoctorComponent/Doctorcomponent";


export default class Home extends Component{
 render(){
    return(<div>
        <header>
        
       <Carousel/>
        <DoctorComponent/>
        
       
        </header> 
    </div>)
 }   
}