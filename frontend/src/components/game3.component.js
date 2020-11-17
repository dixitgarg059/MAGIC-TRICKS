import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Alert from 'react-s-alert';
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
        // alert("UNLOCK LOGIC ??\n");
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
                if(this.NotisSq(temp[i]+temp[i+1])) {
                    Alert.error("Wrong sequence!!! Try Again.",{
                        offset:100,
                        beep:true,
                        timeout:2000,
                    })
                    
                    return;}
            }
            Alert.success("You've been successfull!!! Congrats",{
                offset:100,
                timeout:2000,
                beep:true
            });
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
                <Alert stack={{limit: 10, spacing: 50}} />
                <br></br>
                <h1>
                   <strong> Square Sum</strong>
            </h1>
<br></br>
                <div>
                    <button className='btn  btn-outline-danger' type="button" onClick={this.Show_logic} style={{ float: 'right' }} > Show Logic </button>
                </div>
                <div style={{marginRight:"20px"}}>
                    Order the numbers from 1 to 15 such that sum of any two adjacent numbers leads to a perfect square. Note that each number has to be used.
            </div>
            <br></br>
            <div style={{color:"white"}}>
                {
                    this.state.availableArray.map((e)=>{
                        if(this.state.currentArray.indexOf(e)!=-1)
                        return <button className='c-btn' style={{color:'white',backgroundColor:'black'}}>{e}</button>;
                        else return <button className='c-btn' style={{backgroundColor:"white",color:"black"}} onClick={()=>{this.pushElementToCurrentArray(e)}}>{e}</button>;
                    })
                    
                }
            </div>
            <br></br>
            <div style={{minHeight:"100px",borderRadius:"10px",backgroundColor:"black",boxShadow:"0 0 4px black",marginTop:"10px"}}>
                {
                    this.state.currentArray.map((e,index)=>{
                        let temp = this.state.currentArray;
                        let colr;
                        if((index>0 && this.NotisSq(temp[index]+temp[index-1])) || (index<temp.length-1 && this.NotisSq(temp[index]+temp[index+1]) ))
                        return  <button style={{backgroundColor:"red",color:"white"}} className='c-btn' onClick={()=>{this.removeElementFromCurrentArray(index)}}>{e}</button>;
                        else 
                        return  <button style={{backgroundColor:"rgb(105, 231, 105)",color:"white"}} className='c-btn' onClick={()=>{this.removeElementFromCurrentArray(index)}}>{e}</button>;

                    })
                }
            </div>
            <br></br>
            <div>
                <button className='btn btn-outline-danger' onClick={this.reset}>Reset</button>
                {/* <button className='comp-3-reset' onClick={this.reset}>Reset</button> */}
            </div>
            </div>
        )
    }
}