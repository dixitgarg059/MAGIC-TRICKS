import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
export default class HAND extends Component {


    constructor(props) {
        super(props);
        this.state = {


        }
    }

    render() {
        return (
            <div>
                {this.props.hand.map((e, index) => {
                    return <div style={{position:"absolute",margin:"50px"}}>
                        <img className="hand-card"  key={e} src={require(`../card_pics/${e}.png`)} width={`${this.props.width}px`} style={{transform:`rotateZ(${(index-this.props.hand.length)*8}deg)`, transformOrigin:'bottom left'}}></img>
                    </div>


                })}

            </div>
        )
    }
}