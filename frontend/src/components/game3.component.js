import React, {Component} from 'react';
import axios from 'axios';

export default class GAME3 extends Component {
    
    Show_logic=() => {
          alert("UNLOCK LOGIC ??\n");
        this.props.history.push({
        pathname:'/Play/Game3/Logic'
      });
    }
    render() {
        return (
            <div>
            <h1>
                Welcome to game3  !!
            </h1>
            <button type="button" onClick={this.Show_logic} style={{float: 'right'}} > Show Logic </button>
            </div>
        )
    }
}