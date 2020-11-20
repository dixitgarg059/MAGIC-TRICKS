import React, {Component} from 'react';
import axios from 'axios';
import MathJax from 'react-mathjax2'

export default class LOGIC5 extends Component {
  render() {
    return (
    <MathJax.Context input='ascii'>
      <div class="text-logic" style={{paddingTop: "100px"}}> 
          <h1 class="logic-h1"><strong>The Trick</strong></h1>
          <p>
          A User is invited to pick a card from 1st row of a well shuffled deck of cards.
          The magician explains that the card in the position of the user’s secret number becomes the user’s
          first chosen card. The user is then told to use the value of that chosen card as his new number, and
          to repeat the process until the magician runs out of cards. Note, User has already decided the value of face cards.
          Yet, despite this seemingly random path through a shuffled pack of cards, the magician is able to predict
          the user’s last chosen card.
          </p>
          <h1 class="logic-h1"><strong>The Secret</strong></h1>
          <p>
          How is this done? Well, unknown to the user, the magician also picks an initial number between 1 and
          10, and proceeds to go through the same proces. And
          although the magician may not have picked the same number as the user, there is a high probability
          they will land on the same final card. This is because, even though the magician and the user begin on
          different paths, there will come a point, simply by coincidence, when the two players land on the same card.
          And from that point on the two paths will become synchronised, meaning both players end on the same final
          card.
          </p>
          <p>
          Don’t believe me? Then I invite you to try this out for yourself. You will find that, more often than
          not, each player will land on the same final card.
          In fact we will show that, if we assume the initial numbers are equally likely to be chosen, then the probability
          of success is 84%. And we can increase that chance slightly, to 85%, if the magician chooses 1 as his initial
          number.
          </p>
          <p>
          Furthermore, we will now show that, if N is the number of cards, and x is the mean average card value,
          then the probability of success may be approximated with the simple formula
          </p>
            <div> <center>
                <MathJax.Node >
                  P("success") = 1 - ((x^2 - 1)/(x^2))^N
                </MathJax.Node>
            </center> </div>
          <h1 class="logic-h1"><strong>The Probability of Success</strong></h1>
          <p>
          Calculating the probabilty of success is not an easy thing to do. So we will simplify the problem in a number
          of ways.
          </p>
          <p>
          First, we will assume the cards are labelled with a number from <MathJax.Node inline>{"NN = {1, 2, 3, . . .};"}</MathJax.Node> and specifically for
          Kruskal’s Count, from the numbers 1 to 10; and that these labels are written independently. This assumption
          would not be true for a real deck of cards as the probability of a card’s label will depend on which cards
          have already been revealed.
          </p>
          <p>
          Secondly, we assume each card is labelled with values determined by a geometric distribution, and that
          each player chooses their initial number with the same distribution. In other words, the probability that a
          card is labelled with the number <MathJax.Node inline>{"k"}</MathJax.Node>  is given by
          <MathJax.Node inline>{`p_k = (1-p)*p^(k-1), "for some " 0<=p<=1.`}</MathJax.Node>
          If <MathJax.Node inline>{`x`}</MathJax.Node> is the expected card value, it is standard result for the
          geometric distribution that <MathJax.Node inline>{`x = 1/(1-p)`}</MathJax.Node> and we may now write 
          <MathJax.Node inline>{`" "p_k = (1/x)*((x-1)/x)^(k-1)`}</MathJax.Node>.
          For Kruskal’s Count Face cards are worth 5, so we have the average card value of <MathJax.Node inline>{`x = 70/13`}</MathJax.Node>
          </p>
          <p>
          The use of the geometric distribution rather than the uniform distribution, as one might more reasonably
          expect, simplifies calculation while still giving us an excellent approximation of the true probability. This
          is due to the Law of Large Numbers and the fact that we are giving the geomettric distribution the same
          expected value as the uniform distribution.
          </p>
          <p>
          Now consider a deck of N cards. Let t be the ‘coupling time’, i.e. the position in the deck when
          the paths of magician and spectator first coincide. For example, P[t = 1] is the probability that coupling
          happens on the first card. This would be the probability that both players choose an initial value of 1, and
          they would each do so with a geometric distribution, so;
          </p>
          <div> <center>
                <MathJax.Node>
                  P[t=1] = p_1^2 = 1/x^2
                </MathJax.Node>
          </center> </div>
          <p>
          Kruskal’s Count fails if the coupling time is greater than the number of cards. That means the probability
           of failure is P[t > N ], and;
          </p>
          <div style={{paddingLeft: "20em"}}>
                <MathJax.Node>
                  P[t>N] = P[t>N|t=1] + P[t>N|t!=1]P[t!=1] 
                </MathJax.Node>
                <br/>
                <span style={{paddingLeft: "2.8em"}}></span><MathJax.Node>{`
                  "   "= (0 xx 1/x^2) + P[t>N|t!=1](1-1/x^2)
                  `}
                </MathJax.Node>
                <br/> 
                <span style={{paddingLeft: "2.8em"}}></span><MathJax.Node>{`
                  "       "= P[t > N − 1]((x^2 - 1)/x^2)
                  `}
                </MathJax.Node>
          </div>
          <p>
          Here we use the fact that <MathJax.Node inline>{`P[t > N |t = 1] = 0`}</MathJax.Node>, and the memoryless property of a Markov chain of geometric
          distributions which means <MathJax.Node inline>{`P[t = k|t >= l] = P[t = k − l]`}</MathJax.Node>.
          </p>
          <p>
            Counting this way we find <MathJax.Node inline>{`P[t>N] = ((x^2-1)/x^2)^N`}</MathJax.Node>. In other words, 
            <MathJax.Node>{`
              P("success") = 1 - ((x^2-1)/x^2)^N
            `}</MathJax.Node>
            Applying this result to Kruskal’s Count, where <MathJax.Node inline>{`x = 70/13`}</MathJax.Node> and we find
            <MathJax.Node inline>{`P("success") ~~ 83.88%`}</MathJax.Node>
          </p>
          <p>
          We can verify these results with a Monte Carlo simulation of a shuffled deck of cards. Imagine the
          magician chooses the first card while the spectator picks their initial value uniformly between 1 and 10.
          Then, for <MathJax.Node inline>10^6</MathJax.Node> trials, the proportion of decks where n/10 initial values end on the same card as the magician
          is;
          </p>
          <center><img src={require('../assets/charts/chart1.png')} alt="chart-1" height="300px" width="600px"/></center> <br/>
          <p>
          giving an average probability of success of 85.35%. A difference of 1.06% from the geometric distribution
          approximation.
          </p>
          <p>
          Note, this is a value of success averaged over all possible decks. In fact we can see some decks are
          even more successful than this, with 58.39% of decks having every initial choice land on the same final card.
          Which means, if you perform this trick to an audience, every single person in that audience will land on the
          same card!
          </p>
          <h1 class="logic-h1"><strong>Expected Coupling Time</strong></h1>
          <p>
            We may also calculated the expected coupling time; that is to say, the expected value of t. Under the 
            assumptions of a geometric distribution we showed that <MathJax.Node inline>{`P[t>N] = ((x^2-1)/x^2)^N`}</MathJax.Node>.
            So now it is a simple matter to calculate the more specific probability P[t = k] to be;
          </p>
          <div style={{paddingLeft: "20em"}}>
                <MathJax.Node>
                P[t = k] = P[t > k − 1] − P[t > k]
                </MathJax.Node>
                <br/>
                <span style={{paddingLeft: "2.8em"}}></span><MathJax.Node>{`
                  "   "= (1-(x^2-1)/x^2)((x^2-1)/x^2)^(k-1)
                  `}
                </MathJax.Node>
                <br/> 
                <span style={{paddingLeft: "2.8em"}}></span><MathJax.Node>{`
                  "       "= (1/x^2)((x^2-1)/x^2)^(k-1)
                  `}
                </MathJax.Node>
          </div>
          <p>
            We use the standard result that  <MathJax.Node inline>{`sum_(k=1)^(oo) k*q^(k-1) = 1/(1-q)^2 " for " 0<=q<=1`}</MathJax.Node>
            , to calculate the expectation of t, giving the following simple answer;
          </p>
          <div style={{paddingLeft: "20em"}}>
                <MathJax.Node>{`
                  E[t] = sum_(k=1)^(oo)kP[t=k]
                `}</MathJax.Node>
                <br/>
                <span style={{paddingLeft: "2em"}}></span><MathJax.Node>{`
                  = (1/x^2)sum_(k=1)^(oo)k((x^2-1)/x^2)^(k-1)
                  `}
                </MathJax.Node>
                <br/> 
                <span style={{paddingLeft: "2em"}}></span><MathJax.Node>{`
                  = (1/x^2)(1-((x^2-1)/x^2))^(-2)
                  `}
                </MathJax.Node>
                <br/> 
                <span style={{paddingLeft: "2em"}}></span><MathJax.Node>{`
                  = x^2
                  `}
                </MathJax.Node>
          </div>
          <p>
            These calculations show that the coupling time t is also a geometric distribution with <MathJax.Node inline>{`p = (x^2-1)/x^2 " and expectation " x^2`}</MathJax.Node>.
            So in Kruskal’s Count, with x = 70/13, we see that the expected coupling time E[t] ≈ 29. 
          </p>
          <h1 class="logic-h1"><strong>How Many Final Cards</strong></h1>
          <p>
          If we placed a counter on each of the ten initial starting positions, then followed Kruskal’s counting procedure
          for each counter, how many final positions would we end up with? As we have seen by simulation, 58.39% of
          decks have all ten initial cards end on the same final card. In fact, for a regular deck of cards, we may have
          no more than six final placements. Here are the proportions of decks, from simulation, for each number of
          final placements:
          </p>
          <center><img src={require('../assets/charts/chart2.png')} alt="chart-2" height="300px" width="600px"/></center> <br/>
          <center style={{fontSize: "15px"}}>As you can see by this simulation, 5 are more final cards becomes extremely rare. </center> <br/>
          <h1 class="logic-h1"><strong>The Final Card Placement</strong></h1>
          <p>
          Clearly, the final chosen card will be one of the last ten cards. By simulation, the proportion of trials finishing
          in each position were found to be;
          </p>
          <center><img src={require('../assets/charts/chart3.png')} alt="chart-3" height="300px" width="600px"/></center> <br/>
          <p>
          These figures can be approximated using Bayes’ Theorem as follows:
          </p>
          <p>
          Let a be the label of the card; each card may be labelled semi-uniformly with probabilities; 1/13, 1/13,
          1/13, 1/13, 4/13, 1/13, 1/13, 1/13, 1/13, 1/13. Let b be the placement of the card, numbering the card
          placements from the end, with b = 1 being the last card. Assume b is chosen uniformly with probability
          1/10.
          </p>
          <p>
          A card will be a final card if its label exceeds its placement, i.e. a > b. The probability of this condition will
          be;
          </p>
          <div style={{paddingLeft: "20em"}}>
                <MathJax.Node>{`
                  P(a>=b) = sum_(k=1)^(10)P(a>=k)P(b=k)
                `}</MathJax.Node>
                <br/>
                <span style={{paddingLeft: "4.3em"}}></span><MathJax.Node>{`
                  = (1/10)(1 + 12/13 + 11/13 + 10/13 + 9/13 + 8/13 + 7/13 + 6/13 + 5/13 + 4/13 + 3/13 + 2/13 + 1/13)
                  `}
                </MathJax.Node>
                <br/> 
                <span style={{paddingLeft: "4.3em"}}></span><MathJax.Node>{`
                  = 7/13
                  `}
                </MathJax.Node> <br/>
          </div>
          By Bayes’ Theorem: <br/>
          <div style={{paddingLeft: "20em"}}>
                <span style={{paddingLeft: "4.3em"}}></span><MathJax.Node>{`
                  P(b=n|a>=b) = (P(a>=b | b=n)P(b=n))/P(a>=b)
                  `}
                </MathJax.Node> <br/>
          </div>
          where <br/>
          <div style={{paddingLeft: "20em"}}>
                <span style={{paddingLeft: "4.3em"}}></span><MathJax.Node>{`
                  P(a>=b | b=n) = sum_(k=n)^(10) P(a=k);
                  `}
                </MathJax.Node>
          </div>
          giving <br/>
          <div style={{paddingLeft: "20em"}}>
                <span style={{paddingLeft: "4.3em"}}></span><MathJax.Node>{`
                  P(b=1|a>=b) = (1/10)/(7/13) = 13/70 = 18.57%;
                  `}
                </MathJax.Node> <br/>
                <span style={{paddingLeft: "4.3em"}}></span><MathJax.Node>{`
                  P(b=2|a>=b) = (12/130)/(7/13) = 12/70 = 17.14%;
                  `}
                </MathJax.Node> <br/>
                <span style={{paddingLeft: "4.3em"}}></span><MathJax.Node>{`
                  P(b=3|a>=b) = (11/130)/(7/13) = 11/70 = 15.71%;
                  `}
                </MathJax.Node> <br/>
                <span style={{paddingLeft: "4.3em"}}></span><MathJax.Node>{`
                  P(b=4|a>=b) = (10/130)/(7/13) = 10/70 = 14.29%;
                  `}
                </MathJax.Node> <br/>
                <span style={{paddingLeft: "4.3em"}}></span><MathJax.Node>{`
                  P(b=5|a>=b) = (9/130)/(7/13) = 9/70 = 12.86%;
                  `}
                </MathJax.Node> <br/>
                <span style={{paddingLeft: "4.3em"}}></span><MathJax.Node>{`
                  P(b=6|a>=b) = (5/130)/(7/13) = 5/70 = 7.14%;
                  `}
                </MathJax.Node> <br/>
                <span style={{paddingLeft: "4.3em"}}></span><MathJax.Node>{`
                  P(b=7|a>=b) = (4/130)/(7/13) = 4/70 = 5.71%;
                  `}
                </MathJax.Node> <br/>
                <span style={{paddingLeft: "4.3em"}}></span><MathJax.Node>{`
                  P(b=8|a>=b) = (3/130)/(7/13) = 3/70 = 4.29%;
                  `}
                </MathJax.Node> <br/>
                <span style={{paddingLeft: "4.3em"}}></span><MathJax.Node>{`
                  P(b=9|a>=b) = (2/130)/(7/13) = 2/70 = 2.86%;
                  `}
                </MathJax.Node> <br/>
                <span style={{paddingLeft: "4.3em"}}></span><MathJax.Node>{`
                  P(b=10|a>=b) = (1/130)/(7/13) = 1/70 = 1.43%;
                  `}
                </MathJax.Node> <br/>
          </div>
          as expected <br /> <br/>
          <h1 class="logic-h1"><strong>Some Variations</strong></h1>
          <p>
          Our formula for approximating the probability of success of Kruskal’s Count was reasonably accurate, being
          within 1.06% of simulation. So let’s consider some variations of the main trick.
          </p>
          <p>
          In the standard version of Kruskal’s Count, face cards were given a value of 5. If face cards were given
          a value of 10 instead, then the average card value is x = 85/13. And if the magician picks the first card,
          our formula will give the probability of success as 74.67% - a much lower probability of success. Simulation
          gives this value as 72.21%, a difference of 2.46%.
          </p>
          <p>
          If the three face cards had values 11, 12 and 13 then x = 7. Assuming the magician picks the first card, our
          formula will give the probability of success as 70.05%. Simulation gives this value as 68.48%, a difference of
          1.57%.
          </p>
          <p>
          A variant with a much higher probability of success would be if we spelled out the names of the cards,
          so now an ‘ace’ would have a value of 3 as we spelled out A-C-E. ‘Jack’ would have a value of 4, ‘three’
          would have a value of 5 and so on. In that case, the average card value is now 4. Assuming the magician
          picks first, our formula gives a probability of success of 97.21%. Simulation gives this value as 95.66%, a
          difference of 1.55%.
          </p>
          <p>
          Note that these simulations work under the assumption that the spectator chooses his initial value with
          uniform probability. In real-life this would clearly not be the case, and when asked to pick a number between
          1 and 10 the most common choice is 7. Which means, if the magician picks 7 as his initial value, he can
          increase his chances of success even more!
          </p>
          <p>
          Another fun variation is to use a piece of text instead of cards. For example, pick a word from the first
          sentence from this piece of text from the hitch-hiker’s guide to the galaxy:
          </p>
          <p style={{paddingLeft: "5em", fontSize: "15px", paddingRight: "5em", fontStyle: 'italic'}}>
          ‘It is known that there are an infinite number of worlds, simply because there is an infinite amount
          of space for them to be in it. However, not every one of them is inhabited. Therefore, there must
          be a finite number of inhabited worlds. Any finite number divided by infinity is as near to nothing
          as makes no odds, so the average population of all the planets in the Universe can be said to be
          zero. From this it follows that the population of the whole Universe is also zero, and that any
          people you may meet from time to time are merely the products of a deranged imagination.’
          </p>
          <p>
          Use the length of the word as your value. Count through the paragraph until you reach your next word,
          and repeat until you reach your final chosen word. In this case, your final chosen word would be 'product'.
          </p>
          <p>
          Finally, more serious applications of these methods are found in cryptography, such as Pollard’s rho
          Factorization Method and ‘Kangaroo’ (or ‘lambda’) method for solving the Discrete Logarithm problem:
          given the generator g of a cyclic group G, and an element h ∈ G, find x such that g x = h. Here x is a secret
          message and h is the encrypted message. The essential idea being; if we know the total of the jumps
          made by each participant, we can deduce the other participant’s starting point.
          </p>
          <br/><br/>
        </div>
        </MathJax.Context>
    )
  }
}

