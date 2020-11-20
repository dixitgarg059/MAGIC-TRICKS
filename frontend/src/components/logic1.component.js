import React, { Component } from 'react';
import axios from 'axios';
import MathJax from 'react-mathjax2'

export default class LOGIC1 extends Component {
	render() {
		return (
			<div style={{paddingTop: "100px"}}>

			<MathJax.Context input='ascii'>

				<div class="text-logic" >
					<h1 class="logic-h1"><strong>The CRT Card Trick</strong></h1>
					<p>
						We take two piles of 4 cards each, having cards from 1 to 4 in both of them. The order of the cards in each pile
						is opposite, i.e. in 1st pile lets arrange them in ascending order, so in the next pile they must be arranged in
						descending order.<br />
						Now lets define an operation <i>Shuffle</i> as taking the card from the top of the pile and putting it at the bottom.<br />
						Now lets take our magical word <b>ABRACADABRA</b>. Or is it really that magical ?? We will see later! <br />
						For each alphabet in the magic word, perform the Shuffle operation on any pile of your choice, till the word is finised.
						<br />
					</p>
					<p>
						You will observe that the cards on top of each pile are always same. Now lets remove these 2 top cards, with 3 remaining
						repeat the same step as above. Much to your surprise the top cards are same again. Repeat the whole step with 2 cards.
						In the end, they come out to be same too.<br />
					</p>
						The word really is magical, it seems...<br /><br />

					<h2 class="logic-h2"><strong>The Secret</strong></h2>
					<h4 class="logic-h4">Seems interesting, right!! So lets see how is this done.</h4><br />
					<div>
						The trick is based on Modular Arithmetic and Chinese Remainder Theorem (CRT).<br />
						<p><br />Lets start with a general case and then deal with our 4 card trick.</p>
						<p>
							So we take <i>m</i> cards in each pile and arrange them in opposite order. The order in which we perform Shuffle doesn't
							matter, this is trivial. So lets say that in the 1st pile the Shuffle happened <i>h</i> times and in the 2nd pile it
							happened <i>r</i>  times. We do the operation Shuffle <i>n</i> number of times, where <i>n</i> is the length of the magic word.
							<br />So now we know that only the length of the word matters, not the actual word.<br />
							We can see that <MathJax.Node inline>{'h + r = n'}</MathJax.Node>
						</p>
					</div>
					<div><center>
						<table id="crt" width="50%">
							<tr>
								<th>After </th>
								<th colspan="2">Top card on</th>
							</tr>
							<tr>
								<th>number of  moves</th>
								<th>1st Pile</th>
								<th>2nd Pile</th>
							</tr>
							<tr>
								<td>0</td>
								<td>1</td>
								<td>m</td>
							</tr>
							<tr>
								<td>1</td>
								<td>2</td>
								<td>m-1</td>
							</tr>
							<tr>
								<td>2</td>
								<td>3</td>
								<td>m-2</td>
							</tr>
							<tr>
								<td>3</td>
								<td>4</td>
								<td>m-3</td>
							</tr>
						</table>
					</center></div><br />
					<p>By observing the patter we can say that after <i>h</i> Shuffles on <i>1st</i> pile, the card on the top will be
					<i>h+1</i>, and at the top of the <i>2nd</i> pile, after <i>r</i> Shuffles, will be the card with value <i>m-r</i>
					</p>

					<p>For this CRT trick to work the condition on <i>n</i> is such that:<br />
						<center><MathJax.Node inline>{'n \equiv -1 (mod m) '}</MathJax.Node></center>
					Now lets see why this condition is important for our trick.<br />
					</p>
					<center><div>
						<p align="left">We know that,</p>
						<MathJax.Node>
							h + r -= -1 (mod m)
						</MathJax.Node><br />
						<MathJax.Node>
							=> h -= -1 -r (mod m)
						</MathJax.Node><br />
						<p align="left">Now seeing the top card on 1st pile after <i>h</i> shuffles, which is <i>h + 1</i></p>
						<MathJax.Node>
							h + 1 = (-1 - r) + 1  (mod m)
						</MathJax.Node><br />
						<MathJax.Node>
							=> h + 1 = -r  (mod m)
						</MathJax.Node><br />
						<p align="left">(<MathJax.Node inline>{'-r -= (mod m)'}</MathJax.Node>) can also be written
						as (<MathJax.Node inline>{'m - r -= (mod m)'}</MathJax.Node>). Thus,
						</p>
						<MathJax.Node>
							=> h + 1 = m - r  (mod m)
						</MathJax.Node><br />
						<p align="left">This shows that the LHS has the value of top card in 1st Pile and RHS shows the value of the top
						card in 2nd Pile.</p>
					</div></center>
					<p>
						Now we remove the top card from both the piles, that leaves us with <i>m - 1</i> cards in both the piles.<br />
						So, similarly like before, to do the 'magic' we would need <MathJax.Node inline>{'h + r\equiv -1 (mod m-1) '}
						</MathJax.Node>.<br /><br />
						The same step will repeat till we have 1 card left, this gives this condition that must be followed for the magic to work:
					</p>
					<center><div>
						<MathJax.Node>
							h + r -= -1 (mod m)
						</MathJax.Node><br />
						<MathJax.Node>
							h + r -= -1 (mod m-1)
						</MathJax.Node><br />
						<MathJax.Node>
							h + r -= -1 (mod m-2)
						</MathJax.Node><br />.<br />.<br />.<br />
						<MathJax.Node>
							h + r = -1  (mod 2)
						</MathJax.Node><br />
					</div></center>
					<p>
						This is know as simultaneous system of congruences, the solution of which comes from the Chinese Remainder Theorem.<br />

					</p>

					<h2 class="logic-h2"><strong>Chinese Remainder Theorem</strong></h2><br />
					<p>
						Given pairwise coprime positive integers <MathJax.Node inline>n_1, n_2 , . . . , n_k</MathJax.Node>
						and arbitrary integers <MathJax.Node inline>a_1, a_2 , . . . , a_k</MathJax.Node>, the system of simultaneous congruences,
						(given below) has a solution, and the solution is unique modulo <MathJax.Node inline>N = n_1n_2 . . . n_k</MathJax.Node>.
					</p>
					<center><div>
						<MathJax.Node>
							x -= a_1 (mod n_1)
						</MathJax.Node><br />
						<MathJax.Node>
							x -= a_3 (mod n_2)
						</MathJax.Node><br />.<br />.<br />.<br />
						<MathJax.Node>
							x = a_k  (mod n_k)
						</MathJax.Node><br />
					</div></center>
					<p>But there is a special condition that needs to be followed if <MathJax.Node inline>n_1, n_2 , . . . , n_k
					</MathJax.Node> are not co-prime, like in our magic trick (2,4 are not co-prime). The condition is that:<br />
					The greatest common divisor of such moduli is found out. Then the equations are looked with taking mod with the gcd.
					If the the values in all such equations is the same, then the solution exists.<br />
					For example Lets take two equations:<br />
						<center><div>
							<MathJax.Node>
								x -= 5 (mod 6)
						</MathJax.Node><br />
							<MathJax.Node>
								x -= 3 (mod 8)
						</MathJax.Node><br />
						</div></center>


					The first congruence implies <MathJax.Node inline>x \equiv 1\pmod {2}x≡1(mod2)
					</MathJax.Node> and the second congruence also implies <MathJax.Node inline>x \equiv 1 \pmod{2}.x≡1(mod2)
					</MathJax.Node>. Therefore, there is no conflict between these two congruences. In fact, the system of congruences can be reduced to a simpler system of congruences by dividing out the GCD of the moduli from the modulus of the first congruence:
					For every <MathJax.Node inline>n_i</MathJax.Node> such that they are not coprime, the corresponding <MathJax.Node inline>a_i
					</MathJax.Node> should be equal.<br />
					This condition is followed in our magic trick, as <MathJax.Node inline>a_i = -1 \forall i \in bb N</MathJax.Node>.
					</p>

					<br /><center><img src={require(`../assets/crt_logic2.jpg`)} width="100%" /></center><br /><br />
					<h3 class="logic-h3"><strong>Finding solution</strong></h3><br />
					<p>
						<ul>
							<li><h4 class="logic-h4">Naive method</h4>
								<p>We try for and check for each number from 1 to end, given we know that the solution exists, but this is very unoptimized.</p>
								<br /><center><img src={require(`../assets/crt_logic3.jpg`)} width="100%" /></center><br /><br />
								<p>The inner loop runs for <i>k</i> times and the outer one runs till the answer is reached. And the answer
								increases very rapidly with the increase in number of equations.<br />
									<strong>Complexity:</strong> <i>O(mk)</i>, where <i>m = prod(num[1],num[2],...,num[k])</i><br />
								</p>
							</li>
							<li><h4 class="logic-h4">Better method</h4>
								<p>We can see that <i>x</i>(the solution) can be given as shown below. If we take the mod with any number now
								we get the required remainder.</p>
								<br /><center><img src={require(`../assets/crt_logic4.jpg`)} height="400px" width="600px" /></center><br /><br />
								<p>The inner loop runs for <i>k</i> times and the outer one runs till the answer is reached. And the answer
								increases very rapidly with the increase in number of equations.<br />
									<strong>Complexity:</strong> <i>O(k log m)</i>, where <i>m = prod(num[1],num[2],...,num[k])</i><br />
									<i>k</i> is the length of tha array (number of equations), and <i>log m</i> is the complexity of finding
									the inverse of a number wrt <i>m</i>.
								</p>
								<p><strong>Finding inverse</strong><br />
								This can be found out by the Extended Euclidean Method<br />
								Extended Euclidean Algorithm finds integer coefficients x and y such that:
									<center><div>
										<MathJax.Node>
											ax + by = gcd(a, b)
									</MathJax.Node><br />
									</div></center>
								Using it for inverse: we have gcd(a,b) = 1 (co-prime)<br />
									<center><div>
										<MathJax.Node>
											ax + by = 1
									</MathJax.Node><br />
									</div></center>
									To find multiplicative inverse of ‘a’ under ‘m’, we put b = m in above formula.<br />
									<center><div>
										<MathJax.Node>
											ax + my = 1
									</MathJax.Node><br />
									</div></center>
									Take modulo with ‘m’, on both sides, we get:<br />
									<center><div>
										<MathJax.Node>
											ax -= 1 mod m
									</MathJax.Node><br />
									</div></center>
									Thus multiplicative inverse of <i>x</i> wrt <i>m</i> is <i>a</i> and vice versa.<br />
								</p>
							</li>
							<br /><center><img src={require(`../assets/crt_logic5.jpg`)} height="400px" width="700px" /></center><br /><br />
							<br /><center><img src={require(`../assets/crt_logic6.jpg`)} height="450px" width="700px" /></center><br /><br />

						</ul>
					</p>
					<h3 class="logic-h3"><strong>Checking for <i>m = 4</i></strong></h3><br />
					<div>
						<p>For the case of <i>m = 4</i>. First we need to solve the simultaneous system to find the value of <i>n</i>, which is
						total number of shuffles allowed at every stage.</p>
					</div>
					<center><div>
						<MathJax.Node>
							n -= -1 (mod 4)
						</MathJax.Node><br />
						<MathJax.Node>
							n -= -1 (mod 3)
						</MathJax.Node><br />
						<MathJax.Node>
							n -= -1 (mod 2)
						</MathJax.Node><br />
					</div></center>

					<h3 class="logic-h3"><strong>Length of magic phrase for different <i>m</i></strong></h3><br />
					<div><center>
						<table id="crt" width="40%">
							<tr>
								<th>Number of total shuffles</th>
								<th>Value of <i>m</i></th>
							</tr>
							<tr>
								<td>1</td>
								<td>2</td>
							</tr>
							<tr>
								<td>5</td>
								<td>3</td>
							</tr>
							<tr>
								<td>11</td>
								<td>4</td>
							</tr>
							<tr>
								<td>59</td>
								<td>5</td>
							</tr>
							<tr>
								<td>59</td>
								<td>6</td>
							</tr>
							<tr>
								<td>419</td>
								<td>7</td>
							</tr>
							<tr>
								<td>839</td>
								<td>8</td>
							</tr>
						</table>
					</center></div><br />
					<p>We can see that the length increases rapidly even with small </p>

					<br /><center><img src={require(`../assets/crt_logic1.jpg`)} height="80%" width="60%" /></center><br /><br />


					<br />

				</div>
			</MathJax.Context >
			</div>
		)
	}
}