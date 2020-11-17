import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
// export default 
export default class HAND extends Component {


    constructor(props) {
        super(props);
        this.state = {


        }
        
    }

    render() {
        // console.log(this.props.u);
        if(this.props.straight==undefined)
        return (
            <div style={{position:"static"}}>
                {this.props.hand.map((e, index) => {
                    if(this.props.focused==-1 || index+1!=this.props.focused)
                    return <div style={{position:"absolute",margin:`${this.props.margin}px`}}>
                        <img className="hand-card"  key={e} src={require(`../card_pics/${e}.png`)} width={`${this.props.width}px`} style={{transform:`rotateZ(${(index-this.props.hand.length/2-1)*8}deg)`, transformOrigin:'bottom left'}}></img>
                    </div>;
                    else 
                    return <div style={{position:"absolute",margin:`${this.props.margin}px`}}>
                    <img className="hand-card-focused"  key={e} src={require(`../card_pics/${e}.png`)} width={`${this.props.width}px`} style={{transform:`rotateZ(${(index-this.props.hand.length/2-1)*8}deg)`, transformOrigin:'bottom left'}}></img>
                </div>;


                })}

            </div>
        )
        else return (
            <div style={{position:"static"}}>
            {this.props.hand.map((e, index) => {
                if(this.props.focused==-1 || index+1!=this.props.focused)
                return <div style={{position:"absolute",margin:`${this.props.margin}px`}}>
                    <img className="hand-card"  key={e} src={require(`../card_pics/${e}.png`)} width={`${this.props.width}px`} style={{transform:`translateX(${(index-this.props.hand.length/2-1)*20}px)`, transformOrigin:'bottom left'}}></img>
                </div>;
                else 
                return <div style={{position:"absolute",margin:`${this.props.margin}px`}}>
                <img className="hand-card-focused"  key={e} src={require(`../card_pics/${e}.png`)} width={`${this.props.width}px`} style={{transform:`translateX(${(index-this.props.hand.length/2-1)*20}px)`, transformOrigin:'bottom left'}}></img>
            </div>;


            })}

        </div>

        )
    }
}