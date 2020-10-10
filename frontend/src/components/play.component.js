import React, {Component} from 'react';
import axios from 'axios';

export default class PLAY extends Component {
    
    
    Game1=() => {
        this.props.history.push({
        pathname:'/Play/Game1/'
      });
    }
    Game2=() => {
        this.props.history.push({
        pathname:'/Play/Game2/'
      });
    }
    Game3=() => {
        this.props.history.push({
        pathname:'/Play/Game3/'
      });
    }
    Game4=() => {
        this.props.history.push({
        pathname:'/Play/Game4/'
      });
    }
    render() {
        return (



            
            
            <div>

                <h2> Here are the list of some awesome card games you'd enjoy !! </h2>
                <div>
                <ol className="navbar-nav mr-auto">
              <li>Game1<button type="button" style={{float: 'right'}} onClick={this.Game1}>Play</button></li>
              <li >Game2<button type="button" style={{float: 'right'}} onClick={this.Game2}>Play</button></li>
              <li >Game3<button type="button" style={{float: 'right'}} onClick={this.Game3}>Play</button></li>
              <li >Game4<button type="button" style={{float: 'right'}} onClick={this.Game4}>Play</button></li>
            </ol>
            </div>
        
            </div>

        )
    }
}