import React, {Component} from 'react';
import axios from 'axios';
import _img from '../assets/home.jpg';
import '../App.css';
export default class WELCOME extends Component {
    
   
    render() {
        return (
            <div 
            className='home-back'
            
            style={{
                marginLeft: auto,
                marginRight: auto,
            // marginLeft:"50%",
                // width:'100%',
                // height:'30%',
            // paddingTop:'32px',
            // backgroundSize:'100% 100%',
            // backgroundImage:`url(${_img})`,
            }}>
                {/* <img src={require("../assets/home.jpg")} width="100%" height="925em"></img> */}

               
            <i>
                "IT IS MAGIC UNTIL YOU UNDERSTAND IT;<br/>
                IT IS MATHEMATICS THEREAFTER" ~ unknown

            </i>
            <br/>
            <button  class="btn btn-secondary btn-lg"><a href="/Play">PLAY</a></button>
            </div>
        )
    }
}