import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Alert from 'react-s-alert';
export default class GAME3 extends Component {


    constructor(props) {
        super(props);
        this.state = {
            // totalCount: 15,
            totalCount: 5,
            currentArray: [],
            availableArray: [1,2,3,4,5],
            // availableArray: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
            level : 1,
            hint: false,
            hintIndex : null,

        }
        this.ans1 = [8,1,15,10,6,3,13,12,4,5,11,14,2,7,9];
        this.ans2 = this.ans1.slice();
        this.ans2.reverse();
    }
    Show_logic = () => {
        // alert("UNLOCK LOGIC ??\n");
        this.props.history.push({
            pathname: '/Play/Game3/Logic'
        });
    }
    pushElementToCurrentArray=(e)=>{
        this.setState({
            currentArray: [...this.state.currentArray,e],
            hintIndex: null,
        });
        if(this.state.currentArray.length==this.state.totalCount-1){
            // alert("Hellow");
            let temp = [...this.state.currentArray,e];
            for(let i=0;i<this.state.totalCount-1;i++){
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
            currentArray: temp,
            hintIndex: null
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
            <div style={{paddingTop: "100px"}}>
                <Alert stack={{limit: 10, spacing: 50}} />
                <br></br>
                <button className='btn  btn-outline-danger' type="button" onClick={this.Show_logic} style={{ float: 'right' }} > Show Logic </button>
                <h1>
                   <strong> Square Sum</strong>
            </h1>
<br></br>
<div style={{color:'rgb(241, 206, 7)'}}>
    {this.state.level==2?`The previous case of five numbers was impossible to do. Try the following.`:''}
</div>
<br></br>
                <div style={{marginRight:"20px"}} class="text-logic">
                    Order the numbers from 1 to {`${this.state.level==1?'5':'15'}`} such that sum of any two adjacent numbers leads to a perfect square. Note that each number has to be used.
            </div>
            <br></br>
            <div style={{color:"white"}}>
                {
                    this.state.availableArray.map((e)=>{
                        if(e==this.state.hintIndex)
                        return <button className='c-btn' style={{backgroundColor:'rgb(241, 206, 7)',color:'black'}} onClick={()=>{this.pushElementToCurrentArray(e)}}>{e}</button>;

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
            {/* <button className='btn btn-warning'>Not Possible</button> */}

                {/* <br></br> */}
                {/* <br></br> */}
                <button className='btn btn-warning' onClick={()=>{
                    if(this.state.level==1){
                        console.log('null')

                        this.setState({
                            totalCount: 15,
                            level: 2,
                            currentArray : [],
                            availableArray : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                        })

                    }
                    else{
                        if(JSON.stringify(this.state.currentArray)==JSON.stringify(this.ans1.slice(0,this.state.currentArray.length))){
                            console.log(this.ans1[this.state.currentArray.length]);
                            console.log(this.ans1)
                            this.setState({
                                // hint: false,
                                hintIndex : this.ans1[this.state.currentArray.length],
                            })
                        }
                        else if(JSON.stringify(this.state.currentArray)==JSON.stringify(this.ans2.slice(0,this.state.currentArray.length))){
                            console.log(this.ans2[this.state.currentArray.length]);
                            console.log(this.ans2)

                            this.setState({
                                // hint: false,
                                hintIndex : this.ans2[this.state.currentArray.length],
                            })
                        }
                        else {
                            console.log(this.ans1)
                            console.log(this.ans2)
                            console.log(this.state.currentArray)
                            console.log(this.ans1.slice(0,this.state.currentArray.length))
                            console.log(this.state.currentArray==this.ans1.slice(0,this.state.currentArray.length))

                            console.log('null3')
                            this.setState({
                                currentArray : [...this.state.currentArray.slice(0,this.state.currentArray.length-1)],
                                hintIndex: null,
                            })
                        }


                    }

                }}>Hint</button>
                <br></br>
                <br></br>
                <button className='btn btn-outline-danger' onClick={this.reset}>Reset</button>


                {/* <button className='comp-3-reset' onClick={this.reset}>Reset</button> */}
            </div>
            </div>
        )
    }
}