import React, {Component} from 'react';
import axios from 'axios';
import HAND from  './hand.component';
export default class GAME4 extends Component {
    
    constructor(props) {

        super(props);
    }
    Show_logic=() => {
          alert("UNLOCK LOGIC ??\n");
        this.props.history.push({
        pathname:'/Play/Game4/Logic'
      });
    }
    render() {
        return (
            <div>


            <h1>
                27 Card Trick
            </h1>
            <HAND hand={[1,2,3,4,41,23,50,51,52]} width={200}/>
            <button type="button" onClick={this.Show_logic} style={{float: 'right'}} > Show Logic </button>
            </div>
        )
    }
}