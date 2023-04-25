import { Component } from "react"
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default class Carousel extends Component{

    render(){

        return(<div className="container">
               <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 h-20 d-block'
        itemId={1}
        style={{height:300}}
        src='https://knowpathology.com.au/wp-content/uploads/2016/04/genetic_testing_blood_test_tubes_lab_595x240-595x240.jpg'
       
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 h-20 d-block'
        itemId={2}
        style={{height:300}}
        src='https://www.gericare.in/static/images/services/labtest.jpg'
    
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        style={{height:300}}
        src='https://santokhhospital.com/wp-content/uploads/2023/01/A-Comprehensive-Review-of-Diabetes-Test.jpeg'
        
      >
        <h5 style={{textDecorationColor:"black"}}>Sugur test</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  
        </div>)
        
    }
}