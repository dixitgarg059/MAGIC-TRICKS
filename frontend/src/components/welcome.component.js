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
                // width:'100%',
                // height:'30%',
            // paddingTop:'32px',
            // backgroundSize:'100% 100%',
            // backgroundImage:`url(${_img})`,
            }}>
                {/* <img src={require("../assets/home.jpg")} width="100%" height="925em"></img> */}


            </div>
        )
    }
}