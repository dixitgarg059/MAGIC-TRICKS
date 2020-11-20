import React, { Component } from 'react';
import axios from 'axios';
import MathJax from 'react-mathjax2'

export default class LOGIC4 extends Component {

    render() {
        return (
            <div style={{paddingTop: "100px"}}>

            <MathJax.Context input='ascii'>

                <div class="text-logic" >
                    <h1 class="logic-h1"><strong>The 27 Card Trick</strong></h1>
                    <p>
                        27 cards are laid down face up in 3 piles of 9 cards each. The user is asked to chose a number from 1 to 27,
                        and pick a card, but do not reveal the card chose.
                        Then the user selects a pile in which the chosen card lies. The computer(magician) takes this into account and compile
                        the 3 piles(i.e. keep the piles on top of each other in some particular order) and re draw the cards into new piles. The user again chooses the pile with his/her card. For the final time
                        the computer(magician) compiles the piles and re draw. The user chooses again. Now this time the magician takes all the
                        piles and draws the card, with user's chosen card at the place denoted by user’s chosen number.
                        <br /><center><img src={require(`../assets/27card_logic1.jpg`)} width="75%" /></center>
                    </p>
                    <h2 class="logic-h2"><strong>The Secret</strong></h2>
                    <h4 class="logic-h4">Seems interesting, right!! So lets see how is this done.</h4>
                    <p>
                        The 27 card trick is based on the ternary number (base-3) system. <br />
                    Suppose the you choose a card and the number 15. The computer(magician) then wants to make the chosen card move to the 15th
                    position in the deck, which means it needs 14 cards above it. For this we first need to express 14 in base-3,
                    writing it as a three digit number. For the procedure used in this trick, it’s also handy to write the digits in
                    backward order: 1s digit first, 3s digit second, and 9s digit last. In this backward base-3 notation 14 becomes 211, since
                    </p>
                    <div> <center>
                        <MathJax.Node >
                            14 = 2\times3^0 + 1\times3^1 + 1\times3^2
                        </MathJax.Node>
                    </center> </div>
                    <p>
                        With the understanding that 2 = bottom, 1 = middle, and 0 = top, the number 14 becomes “bottom-middle-middle.”
                    </p>
                    <br /><center><img src={require(`../assets/27card_logic6.jpg`)} height="90%" width="70%" /></center><br /><br />

                    <p>
                        Now deal the cards into three piles. The player identifies the pile containing his/her card. That pile should be placed at the
                        position indicated by the 1s digit, which is 2, or bottom. After picking up the three piles with the pile containing the chosen
                        card on the bottom, deal the cards a second time into three piles. This time place the pile containing the chosen card in the
                        position indicated by the 3s digit, which is 1, or middle. Finally, after placing the pile containing the subject’s card on the bottom,
                        deal the cards into three piles for a third time. When picking up the piles, this time place the pile containing his/her card in
                        the position indicated by the 9s digit, which is 1, or middle. Deal out 14 cards. The 15th will be "THE" card.
                    </p>
                    <h3 class="logic-h3"><strong>Will it work always for any card and any number from 27 cards??</strong></h3>
                    <p>
                        Of course this procedure will work regardless of which position the player chooses, for his/her choice is always a
                        number between 1 and 27. This means you need between 0 and 26 cards on top of it, and in base 3 we have
                        0 = 000 (top-top-top) and 26 = 222 (bottom-bottom-bottom). Every possible position that the subject can choose
                        corresponds to a unique base 3 representation.
                    </p><br />

                    <h1 class="logic-h2"><strong>Some variations</strong></h1><br />
                    <ul>
                        <li><h3 class="logic-h3">21 Card Trick</h3>
                            <p>In this instead of using 27 cards we try to do the same trick but with 21 cards.
                            Since there are 27 three digit numbers in base three that we can use to specify the position
                            of the designated pile in each pass and only 21 positions, it can take some work to see
                            precisely how the final position of the selected card depends on the order in which we
                            pick up the piles. For some of the three digit strings that position depends on where the
                            card started. For example, we can show that if the selected card is in position 0, 1 or
                            2 then “001” moves it to to position 0 (the top of the deck) but any other selected card
                            ends up in position 1. Of course “000” moves any selected card to the top of the deck.
                            But there is no single three digit string that can move any selected card to position 1.
                            The following table shows the good target positions, to which we can move every
                            card, and the base three string (to be read from right to left) that tells we how to pick
                            up the piles.<br />
                                <br /><center><img src={require(`../assets/27card_logic2.jpg`)} width="90%" /></center><br />
                                Note that “111” is still the code for the middle (10th) position, even though it represents 13 in base three.
                            </p>

                        </li>
                        <li><h3 class="logic-h3">49 Card Trick</h3>
                            <p>This is very similar to the 27 one, only difference being that now we use base-7 number system.
                            So we make 7 piles of 7 cards each and ask the user to tell in which pile the chosen card is. And we have
                            to repeat the process only 2 times as opppsed to 3 times in the 27 card trick. <strong>Why?</strong>
                                <br />
                            Because in case of 27 cards, we observe that (27-1) can be repesented as a 3 digit number in base-3.
                            But for 49 cards, (49-1) can be represented as 66 in base-7, which is only 2-digits.
                            So we only need two steps to find the card at the chosen place. Although now there is not only a 'top','middle' or 'bottom'
                            but 7 levels of depth.
                            <br />
                            This becomes a little cumbersome when doing with real cards, but a simulation on a computer is much convenient.
                            </p>
                        </li>
                        <li><h3 class="logic-h3">General Case</h3>
                            <p>In general, if we deal a pack of <MathJax.Node inline>{"n^k"}</MathJax.Node> cards into <i>n</i> piles, have the
                            player identify the pile that contains his/her card, and repeat this procedure <i>k</i> times, we can place that card at
                            any desired position in the deck. The idea is the same: <br />
                            Subtract one from the desired position number, and convert the result to base <i>n</i> as a <i>k</i> digit number.
                            Which means that we have to deal the cards only <i>k</i> times.
                            The ones digit of this number tells you where to place the packet containing his/her card after the first
                            deal (<i>n</i> – 1 = bottom, 0 = top), and the procedure continues for the remaining deals.</p>

                        </li>
                    </ul><br />
                    <h2 class="logic-h2"><strong>Similarity with Radix Sort</strong></h2>
                    <p>The idea of Radix Sort is to do digit by digit sort starting from least significant digit to most significant digit.
                        Radix sort uses counting sort as a subroutine to sort.</p>

                    <p>Suppose we shuffle a deck of 27 cards numbered 0, 1,... , 26. (Counting from 0
                    is standard practice in computer science.) To restore them to numerical order:
                    </p>
                    <ul>
                        <li>Express each of the card values in base three.</li>
                        <li>Deal the cards into three piles labelled 0, 1, and 2, putting each card in the pile that
                        matches its rightmost digit. Pick up the cards with pile 0 on top, then pile 1, then
                        pile 2 on the bottom, preserving the order of the cards in each pile.</li>
                        <li>Repeat, this time using the middle digit to place the cards in piles.</li>
                        <li>Repeat, using the leftmost digit.</li><br />
                    </ul>
                    <p>The cards are in order. To see why, note that after the first pass the cards with
                    numbers that end in 0 are above those that end in 1, which are in turn above those that
                    end in 2. As we deal the next pass, they retain that partial order in each pile of nine,
                    so, for example, the cards in pile 0 are the ones with numbers ending in “00”, “01” and
                    “02” in that order (whatever their leftmost digits). The final pass sorts by the leftmost
                    digit. This is how Radix sort works.
                    </p>
                    <p><strong>
                        Think back to 27 card trick. Only the card the spectator chose has a prescribed
                        position in the “sorted” deck. So when we deal out the cards we need not assign them
                        to labelled piles as in radix sort, we just play them as they come. After the deal we
                        label the single pile the spectator identifies with the appropriate digit 0, 1 or 2. Put that
                    one in its proper place as we pick up the piles.<br /><br />
                    </strong>
                    Lets see Radix and Count Sort in detail:
                    </p>
                    <h3 class="logic-h3"><strong>Radix Sort</strong></h3>
                    <p>Radix sort is a sorting technique that sorts the elements by first grouping the individual digits of the
                        same <i>place value</i>. Then, sort the elements according to their increasing/decreasing order.</p>
                    <h4 class="logic-h4">Algorithm</h4>
                    <p>
                        Steps:
                        <ol class="text-logic" style={{ fontSize: "0.85em" }}>
                            <li>Find the largest element in the array, i.e. <i>max</i>. Let <i>X</i> be the number of digits in <i>max</i>.
                            <i>X</i> is calculated because we have to go through all the significant places of all elements.<br />
                            Lets take an array <i>[121, 432, 564, 23, 1, 45, 788]</i>, we have the largest number <i>788</i>.
                            It has 3 digits. Therefore, the loop should go up to hundreds place (3 times).</li>
                            <li>Now, go through each significant place one by one.
                            We use counting sort for this. Sort the elements based on the unit place digits <i>(X=0)</i>.</li>
                            <li>Now we repeat Step 2, for the tens place <i>(X=1)</i> and then the same for hundreds place <i>(X=2)</i></li>
                        </ol>
                        <br /><center><img src={require(`../assets/27card_logic3.jpg`)} height="300px" width="300px" /></center>
                    </p>
                    <h4 class="logic-h4">Pseudo Code</h4>
                    <br /><center><img src={require(`../assets/27card_logic4.jpg`)} width="75%" /></center><br />
                    <br />
                    <h4 class="logic-h4">Complexity</h4><br />
                    <p>
                        For the radix sort that uses counting sort as an intermediate stable sort, Radix Sort takes <i>O(k*(n+b))</i> time
                    where <i>k</i> is the number of digits in input integers, and <i>b</i> is the base for representing numbers,
                    for example, for the decimal system, <i>b = 10</i>.<br />
                    Hence, <i>k</i> is the number of cycles that is needed and <i>O(n+b)</i> is the time complexity of counting sort.
                    </p>
                    <p>
                        If <i>max</i> is the maximum possible value, then <i>k</i> would be <MathJax.Node inline>{`O(log_b max)`}</MathJax.Node>.
                        So overall time complexity is <MathJax.Node inline>{`O((n+b) log_b max)`}</MathJax.Node>.
                        Which looks more than the time complexity of comparison-based sorting algorithms for a large <i>max</i>. Let us first
                        limit <i>max</i>.<br />
                        Let <MathJax.Node inline>{`max\leq nc`}</MathJax.Node> where <i>c</i> is a constant. In that case, the complexity becomes
                        <MathJax.Node inline>{`O(nLog_b n)`}</MathJax.Node>.But it still doesn’t beat comparison-based sorting algorithms.<br />
                        What if we make the value of <i>b</i> larger?. What should be the value of <i>b</i> to make the time complexity linear?
                        If we set <i>b</i> as <i>n</i>, we get the time complexity as <i>O(n)</i>. In other words, we can sort an array of integers
                        with a range from  to <i>nc</i> if the numbers are represented in base <i>n</i>
                        (or every digit takes <MathJax.Node inline>{`log_2 n`}</MathJax.Node> bits).
                    </p>
                    <p>
                        Thus, radix sort has linear time complexity which is better than <i>O(nlog n)</i> of comparative sorting algorithms.<br />
                    If we take very large digit numbers or the number of other bases like 32-bit and 64-bit numbers then it can perform in
                    linear time however the intermediate sort takes large space.
                    This makes radix sort space inefficient. This is the reason why this sort is not used in software libraries.
                    </p>
                    <br />
                    <h3 class="logic-h3"><strong>Counting Sort</strong></h3>
                    <p>Counting sort is a sorting technique based on keys between a specific range. It works by counting the number of
                    objects having distinct key values (kind of hashing). Then doing some arithmetic to calculate the position of
                        each object in the output sequence.<br />
                        The algo below is for positive numbers only, but it can be modified easliy to work for negative numbers too.</p>
                    <h4 class="logic-h4">Algorithm</h4>
                    <p>
                        Steps:
                        <ol class="text-logic" style={{ fontSize: "0.85em" }}>
                            <li>Find out the maximum element (let it be <i>max</i>) from the given array.</li>
                            <li>Initialize an array of length <i>max+1</i> with all elements 0.
                                This array is used for storing the count of the elements in the array.</li>
                            <li>Store the count of each element at their respective index in count array.
                            <br />For example: if the count of element 3 is 2 then, 2 is stored in the 3rd position of count array.
                            If element "5" is not present in the array, then 0 is stored in 5th position.</li>
                            <li>Store cumulative sum of the elements of the count array. It helps in placing the elements into
                                the correct index of the sorted array.</li>
                            <li>Find the index of each element of the original array in the count array. This gives the cumulative count.<br />
                            Place the element at the index calculated as <i>index - 1 </i> position in the sorted array.</li>
                            <li>After placing each element at its correct position, decrease its count by one.</li>
                        </ol>

                    </p><br />
                    <h4 class="logic-h4">Pseudo Code</h4>
                    <br /><center><img src={require(`../assets/27card_logic5.jpg`)} width="75%" /></center><br /><br />

                    <h4 class="logic-h4">Complexity</h4>
                    <p> <u>Time Complexity</u>: <i>O(n+k)</i> where <i>n</i> is the number of elements in input array and <i>k</i>
                    is the range of input. <br />
                        <u>Auxiliary Space</u>: <i>O(n+k)</i> <br /><br />
                        Counting sort is efficient if the range of input data is not significantly greater than the number of objects
                        to be sorted. Consider the situation where the input sequence is between range 1 to 10K and the data is 10, 5, 10K, 5K.
                        It is not a comparison based sorting. It running time complexity is O(n) with space proportional to the range of data.
                        </p>
                    <br /><br /><br />

                </div>
            </MathJax.Context >
        </div>
        )
    }
}