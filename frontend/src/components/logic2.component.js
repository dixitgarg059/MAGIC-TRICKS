import React, {Component} from 'react';
import axios from 'axios';
import MathJax from 'react-mathjax2';

export default class LOGIC2 extends Component {
  render() {
    return (
      <div style={{paddingTop: "100px"}}>

      <MathJax.Context input='ascii'>
      <div>
        <br/><br/>
        <p >
          What if I told you that the game's result can be predicted with 100% accuracy 
          from the initial state of the game. Yes, you read it right, we can say who is gonna win the game 
          from the initial state of the game. Amazed ? If "not", congrats you are a smart brain, go ahead 
          and try out other <a href="/play">games</a>. For those who are wondering how is this true, read further.
          We highly recommend you to spend some time thinking on the problem before jumping on to the solution.
        </p>
        <h1><strong>The Solution</strong></h1>
        <p>
          Let the number of kings be <i class="text-logic">CK </i> and number of Queens be 
          <i class="text-logic"> CQ. </i> <br/>
        </p>
        <p>
          If both <i class="text-logic">CK </i> and <i class="text-logic">CQ </i> are greater than 1,
          then the current player can always make a move. Why? This is because with given conditions
          it is impossible that no King and Queen are neighbours. After the move both
           <i class="text-logic"> CK </i>
          and <i class="text-logic">CQ </i> decrease by 1.
          So the number of moves is always <i class="text-logic">min(CK, CQ)</i>, where
          <i class="text-logic"> CK</i> and <i class="text-logic">CQ </i> are initial counts, becuase after these many moves
          we will have only Kings or only Queens left.
        </p>
        <p>
          So if <i class="text-logic">min(CK, CQ)</i> is odd then Player1 wins, otherwise Player2 wins. Why? It is because, Player1 plays at 
          odd turns and Player2 moves at even turns. So if total moves are odd, Player1 will play last and Player2 will not be able to play and 
          vice-versa.
        </p>
        <p>
          <div> <center>
                <MathJax.Node >{`
                "Player I wins where I = 1 + (min(CK, CQ) % 2)" 
                `}</MathJax.Node>
          </center> </div>
        </p>
      </div>
      </MathJax.Context>
    </div>
    )
  }
}