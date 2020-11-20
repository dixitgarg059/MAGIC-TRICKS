import React, {Component} from 'react';
import axios from 'axios';
import _img from '../assets/home.jpg';
import '../App.css';
import '../home.css';
export default class WELCOME extends Component {
    
   
    render() {
        return (
            <div>
            <div 
            className='home-back hm'
            style={{paddingTop:'100px',
        alignItems:'center',
        justifyContent:'center',
        flexFlow: 'column'
        }}
            >
             <a href='/CARD-TRICKS/Play' onClick={()=>{this.props.func(1)}}>
                 <p>
                 <span className='bg'></span>
                 <span className='base'></span>
                 <span className='text'>Enter</span>
                 </p>
                 </a>  
                 {/* <a href='#' className='white'>
                     <p>
                 <span className='bg'></span>
                 <span className='base'></span>
                 <span className='text'>Play Valorant</span>
                 </p>
                 </a>  
                 <a href='#' className='transparent'>
                 <p><span className='bg'></span>
                 <span className='base'></span>
                 <span className='text'>Play Valorant</span>
                 </p> */}
                 {/* </a>   */}


            </div>
            {/* <div>
                <h1>hello</h1>
            </div> */}
            </div>
        )
    }
}