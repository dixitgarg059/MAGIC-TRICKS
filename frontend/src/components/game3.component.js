import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
export default class GAME3 extends Component {


    constructor(props) {
        super(props);
        this.state = {
            totalCount: 15,
            currentArray: [],
            availableArray: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

        }
    }
    Show_logic = () => {
        alert("UNLOCK LOGIC ??\n");
        this.props.history.push({
            pathname: '/Play/Game3/Logic'
        });
    }
    pushElementToCurrentArray=(e)=>{
        this.setState({
            currentArray: [...this.state.currentArray,e]
        });
        if(this.state.currentArray.length==14){
            // alert("Hellow");
            let temp = [...this.state.currentArray,e];
            for(let i=0;i<14;i++){
                if(this.NotisSq(temp[i]+temp[i+1])) return;
            }
            alert("You've been successfull!!! Congrats");
        }
        
    }
    removeElementFromCurrentArray=(e)=>{
        let temp = this.state.currentArray;
        temp.splice(e,1);
        this.setState({
            currentArray: temp
        });
        // this.state.currentArray.splice(e,1);
        
    }
    NotisSq=e=>{
        for(let i = 1;;i++){
            if(i*i==e) return false;
            if(i*i>e) return true;
        }
    }
    reset=()=>{
        this.setState({
            currentArray:[]
        })
    }
    render() {
        return (
            <div>
                <h1>
                    Square Sum Problem
            </h1>

                <div>
                    <button className='logic-btn' type="button" onClick={this.Show_logic} style={{ float: 'right' }} > Show Logic </button>
                </div>
                <div style={{marginRight:"20px"}}>
                    Order the numbers from 1 to 15 such that sum of any to adjacent number leads to a perfect square. Note that each number has to be used and only once.
            </div>
            <div style={{color:"white"}}>
                {
                    this.state.availableArray.map((e)=>{
                        if(this.state.currentArray.indexOf(e)!=-1)
                        return <button className='comp-3-btn'>{e}</button>;
                        else return <button className='comp-3-btn' style={{backgroundColor:"black",color:"white"}} onClick={()=>{this.pushElementToCurrentArray(e)}}>{e}</button>;
                    })
                    
                }
            </div>
            <div style={{height:"50px",borderRadius:"10px",backgroundColor:"white",boxShadow:"0 0 4px black",marginTop:"10px"}}>
                {
                    this.state.currentArray.map((e,index)=>{
                        let temp = this.state.currentArray;
                        let colr;
                        if((index>0 && this.NotisSq(temp[index]+temp[index-1])) || (index<temp.length-1 && this.NotisSq(temp[index]+temp[index+1]) ))
                        return  <button style={{backgroundColor:"red",color:"white"}} className='comp-3-btn' onClick={()=>{this.removeElementFromCurrentArray(index)}}>{e}</button>;
                        else 
                        return  <button style={{backgroundColor:"rgb(105, 231, 105)",color:"white"}} className='comp-3-btn' onClick={()=>{this.removeElementFromCurrentArray(index)}}>{e}</button>;

                    })
                }
            </div>
            <div>
                <button className='comp-3-reset' onClick={this.reset}>Reset</button>
                {/* <button className='comp-3-reset' onClick={this.reset}>Reset</button> */}
            </div>
            </div>
        )
    }
}