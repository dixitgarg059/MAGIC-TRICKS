import React, {Component} from 'react';
import axios from 'axios';
import MathJax from 'react-mathjax2'

export default class LOGIC5 extends Component {
  render() {
    return (
      <div class="text-logic" style={{paddingTop: "100px"}}>
        <h1>Optimal strategy</h1>
        <p>
          Let N be the size of the side of chess board.
          Let us divide the game into two cases.  
        </p>
        <ol class="text-logic">
          <li class="text-logic">N is even</li>
          <li class="text-logic">N is odd</li>
        </ol>
        <ul>
            <h3><li>N is even</li></h3>
        <section>
          <p>
            In this case, if Player1 places knight at (x,y), Player2 can win by playing optimally
            by placing knight at position symmetric to Player1’s knight: (N+1-x,N+1-y).
          </p>
          <center>
          <img src={require('../assets/game6/symmetric-move.png')} alt="chart-2" height="300px" width="800px"/>
          </center>
          <p>
          Now we have to show that for every position currently occupied by Player1, 
          there exists a vacant position available for Player2 to occupy. 
          This can be done by using some observations:
          </p>
          <ol class="text-logic">
          <li class="text-logic">For every (x,y), there exists a (N+1-x,N+1-y)
           and these pairs are distinct i.e, The pairs are always either both vacant or occupied.
          </li>
          <li class="text-logic">
          The positions occupied by Player1 blocks r1 positions (upto 8: restriction by movement of Knight)
           are symmetric to the positions r2 blocked by Player2’s knight at (N+1-x,N+1-y).

          </li>
        </ol>
          <center>
          <img src={require('../assets/game6/positions-blocked.png')} alt="chart-2" height="300px" width="450px"/>
          </center>
          <p>
            Hence, positions get blocked 
            symmetrically. So we can think positions in pair {"{(x, y), (N+1-x, N+1-y)}"}. So, If Player1 picks
            one element of the pair, then Player2 can pick the other. Hence, Player2 will always win.
          </p>
        </section>
        <section>
          <h3><li>N is odd</li></h3>
          <p>
            In this case Player1 will always win if he plays optimally. If we analyze, the board now has one position 
            which does not have its symmetric position ((N+1)/2, (N+1)/2). If Player1 makes his first move on this position, we 
            kind of go back to the first situation, where now Player1 can play symmetric to  Player2 and win.
          </p>
        </section>
        </ul>
     <br/> </div>
    )
  }
}

