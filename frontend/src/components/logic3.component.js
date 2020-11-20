import React, {Component} from 'react';
import axios from 'axios';
import MathJax from 'react-mathjax2'

export default class LOGIC5 extends Component {
  render() {
    return (
    <MathJax.Context input='ascii'>
      <div
      style={{paddingTop:"100px"}}>
          <h1><strong>The Trick</strong></h1>
          <p>
          Here the user is invited to pick cards within a provided range in such a manner that the sum of numbers 
          on adjacent cards is always a perfect square and all cards should be consumed in this process.
          Yet, despite this seemingly random and difficult to think of all the numbers simultaneously in first go, 
          but be patient and excited to see that this complex problem can be brought down into simpler parts by beauty 
          of discrete mathematics and algorithms on graphs to find the Hamiltonian path(or even better if we get 
          a Hamiltonian cycle) on it.
          </p>
          <h1><strong>The Secret</strong></h1>
          <p>
          How is this done? Well, first lets define what is a Hamiltonian path is, a Hamiltonian path or traceable path 
          is a path that visits each vertex of the graph exactly once and a cycle that uses every vertex in a graph 
          exactly once is called a Hamilton cycle.
          </p>
          <p>
          Now we will construct the graph out of card numbers(where card numbers will represent the vertices of our graph) we have,
          for this first pick up the largest two numbers that 
          you have and pick up the perfect square just grater than it(call it to be last perfect square). Now for each number 
          that we have on our cards find a set of numbers comprising of the absolute differences of the selected number, starting from 
          from the perfect square just greater than it and running till our last perfect square numbers, now place a graph edge between
          our selected number to all the numbers from our just obtained set which are present as vertex in our graph(i.e. we have another card
          number on it as selected from the just obtained set). Repeat the same task for every verftex of our graph and if you find any 
          connecting any two numbers then no need to make a new one.
          
          </p>
          <p>
            After this the graph will look like this:
          </p>
          <p>
          <center><img src={require('../assets/charts2/chart1.png')} alt="chart-3" height="400px" width="600px"/></center> <br/>
          </p>
          <h1><strong>The Mathematical Analysis</strong></h1>
          <p>
          There are some useful conditions that imply the existence of a Hamilton cycle or path, which typically
           say in some form that there are many edges in the graph. An extreme example is the complete graph <MathJax.Node inline>{"K_n"}</MathJax.Node>: it 
           has as many edges as any simple graph on <MathJax.Node inline>{"n"}</MathJax.Node> vertices can have, and it has many Hamilton cycles. The problem
            for a characterization is that there are graphs with Hamilton cycles that do not have very many edges. The 
            simplest is a cycle, <MathJax.Node inline>{"C_n"}</MathJax.Node>: this has only n edges but has a Hamilton cycle. On the other hand, the figure below 
            shows graphs with just a few more edges than the cycle on the same number of vertices, but without Hamilton cycles.
          </p>
          <p>
          <center><img src={require('../assets/charts2/chart2.png')} alt="chart-3" height="200px" width="500px"/></center> <br/>
          <center>A graph with a Hamilton path but not a Hamilton cycle</center>
          </p>   
          <br></br>
          <br></br>
          <p>
          <center><img src={require('../assets/charts2/chart3.png')} alt="chart-3" height="175px" width="500px"/></center> <br/>
          <center>A graph with nither Hamilton path nor a Hamilton cycle</center>
          </p>   
          <br></br>
          <br></br>
          <p>
          <center><img src={require('../assets/charts2/chart4.png')} alt="chart-3" height="200px" width="350px"/></center> <br/>
          <center> A graph with many edges but no Hamilton cycle: a complete graph <MathJax.Node inline>{"K_(n-1)"}</MathJax.Node>
           joined by an edge to a single vertex. This graph has  <MathJax.Node inline>{"((n-1),(2)) + 1"}</MathJax.Node> edges.</center>
          </p>  
          <h2><strong>Some Theorems to analyse Hamiltonian Path</strong></h2> 
          <p>
          The key to a successful condition sufficient to guarantee the existence of a 
          Hamilton cycle is to require many edges at lots of vertices.However some of the prominent
          theorems which are helpful in determinig it are:
          </p>
          <h2><strong>Theorem 1</strong></h2>
          <p>
          If <MathJax.Node inline>{"G"}</MathJax.Node> is a simple graph on <MathJax.Node inline>{`n " "`}</MathJax.Node>
           vertices, <MathJax.Node inline>{"n>=3"}</MathJax.Node>, and <MathJax.Node inline>{`d(v)+d(w)≥n " "`}</MathJax.Node>
            whenever <MathJax.Node inline>{"v"}</MathJax.Node> and <MathJax.Node inline>{"w"}</MathJax.Node> are not adjacent,
             then <MathJax.Node inline>{"G"}</MathJax.Node> has a Hamilton cycle.
          </p>
          <h2><strong>Proof :</strong></h2>
          <p>
          First we show that <MathJax.Node inline>{"G"}</MathJax.Node> is connected. 
          If not, let <MathJax.Node inline>{"v"}</MathJax.Node> and <MathJax.Node inline>{`w" "` }</MathJax.Node> 
          be vertices in two different connected components of <MathJax.Node inline>{"G"}</MathJax.Node>, and
           suppose the components have <MathJax.Node inline>{"n1"}</MathJax.Node> and 
           <MathJax.Node inline>{`" " n2`}</MathJax.Node> vertices. Then<MathJax.Node inline>{`" "d( v ) ≤ n1 − 1 " "`}</MathJax.Node> 
           and  <MathJax.Node inline>{`d(w)≤n2−1 " "`}</MathJax.Node>, so  <MathJax.Node inline>{"d(v)+d(w)≤n1+n2−2<n"}</MathJax.Node>. 
           But since <MathJax.Node inline>{"v"}</MathJax.Node> and <MathJax.Node inline>{"w"}</MathJax.Node> are not adjacent, 
           this is a contradiction.
          </p>
            <p>
            Now consider a longest possible path in  <MathJax.Node inline>{"G: v_1,v_2,…,v_k"}</MathJax.Node>. Suppose, for a contradiction, 
            that <MathJax.Node inline>{"k<n"}</MathJax.Node>, so there is some vertex <MathJax.Node inline>{"w"}</MathJax.Node> adjacent to 
            one of <MathJax.Node inline>{"v_2,v_3,…,v_k−1"}</MathJax.Node>, say to <MathJax.Node inline>{"v_i"}</MathJax.Node>. If 
            <MathJax.Node inline>{"v_1"}</MathJax.Node> is adjacent to <MathJax.Node inline>{"v_k"}</MathJax.Node>, then 
            <MathJax.Node inline>{`" "w,v_i,v_i+1,…,v_k,v_1,v_2,…v_i−1`}</MathJax.Node> is a path of length <MathJax.Node inline>{"k+1"}</MathJax.Node>
            , a contradiction. Hence, <MathJax.Node inline>{"v_1"}</MathJax.Node> is not adjacent to <MathJax.Node inline>{"v_k"}</MathJax.Node>, 
            and so<MathJax.Node inline>{`" "d(v_1)+d(v_k)≥n`}</MathJax.Node> . The neighbors of <MathJax.Node inline>{"v_1"}</MathJax.Node> are among 
            <MathJax.Node inline>{"{v_2,v_3,…,v_k−1}"}</MathJax.Node> as are the neighbors of<MathJax.Node inline>{"v_k"}</MathJax.Node>. Consider
             the vertices

            </p>
            <p><center>
            <MathJax.Node inline>{`W={v_l+1∣v_l" " }`}</MathJax.Node>is a neighbor of <MathJax.Node inline>{`v_k`}</MathJax.Node>.
            </center></p>
          <p>
          Then <MathJax.Node inline>{`|N(v_k)|=|W|`}</MathJax.Node> and <MathJax.Node inline>{`W⊆{v_3,v_4,…,v_k}`}</MathJax.Node> 
          and <MathJax.Node inline>{`N(v_1)⊆{v_2,v_3,…,v_k−1}`}</MathJax.Node>, so <MathJax.Node inline>{`W∪N(v_1)⊆{v_2,v_3,…,v_k}`}</MathJax.Node>
          , a set with <MathJax.Node inline>{`k−1<n`}</MathJax.Node> elements. Since <MathJax.Node inline>{`|N(v_1)|+|W|=|N(v_1)|+|N(v_k)|≥n, N(v_1)`}</MathJax.Node>
           and <MathJax.Node inline>{`W`}</MathJax.Node> must have a common element, <MathJax.Node inline>{`v_j`}</MathJax.Node>; note that <MathJax.Node inline>{`3≤j≤k−1`}</MathJax.Node>
           . Then this is a cycle of length <MathJax.Node inline>{`k`}</MathJax.Node>:
          </p>
          <p><center>
          <MathJax.Node inline>{`v_1,v_j,v_j+1,…,v_k,v_j−1,v_j−2,…,v_1.`}</MathJax.Node>
            </center></p>
          <p>
          Now as before, <MathJax.Node inline>{`w`}</MathJax.Node> is adjacent to some <MathJax.Node inline>{`w_l`}</MathJax.Node>, 
          and <MathJax.Node inline>{`w,w_l,w_(l+1),…,w_k,w_1,w_2,…w_(l−1)`}</MathJax.Node> is a path of length <MathJax.Node inline>{`k+1`}</MathJax.Node>
          , a contradiction. Thus, <MathJax.Node inline>{`k=n`}</MathJax.Node>, and, renumbering the vertices for convenience, we have a Hamilton 
          path<MathJax.Node inline>{`v_1,v_2,…,v_n`}</MathJax.Node> . If <MathJax.Node inline>{`v_1`}</MathJax.Node> is adjacent to <MathJax.Node inline>{`v_n`}</MathJax.Node>
          , there is a Hamilton cycle, as desired.
          </p>
          
          <p>
          We can relabel the vertices for convenience:
          </p>
          <p><center>
          <MathJax.Node inline>{`v_1=w_1,w_2,…,w_k=v_2,w_1.`}</MathJax.Node>
            </center></p>
          <p>
          Now as before, <MathJax.Node inline>{`w`}</MathJax.Node> is adjacent to some <MathJax.Node inline>{`w_l`}</MathJax.Node>, 
          and <MathJax.Node inline>{`w,w_l,w_(l+1),…,w_k,w_1,w_2,…w_(l−1)`}</MathJax.Node> is a path of length <MathJax.Node inline>{`k+1`}</MathJax.Node>, 
          a contradiction. Thus,<MathJax.Node inline>{`k=n`}</MathJax.Node> , and, renumbering the vertices for convenience, we have a Hamilton 
          path <MathJax.Node inline>{`v_1,v_2,…,v_n`}</MathJax.Node>. If <MathJax.Node inline>{`v_1`}</MathJax.Node> is adjacent
           to <MathJax.Node inline>{`v_n`}</MathJax.Node>, there is a Hamilton cycle, as desired.
          </p>
          <p>
          If <MathJax.Node inline>{`v_1`}</MathJax.Node> is not adjacent to <MathJax.Node inline>{`v_n`}</MathJax.Node>, 
          the neighbors of <MathJax.Node inline>{`v_1`}</MathJax.Node> are among <MathJax.Node inline>{`{v_2,v_3,…,v_(n−1)}`}</MathJax.Node> as 
          are the neighbors of <MathJax.Node inline>{`v_n`}</MathJax.Node>. Consider the vertices
          </p>
          <p><center>
          <MathJax.Node inline>{`W={v_(l+1)∣v_l`}</MathJax.Node> is a neighbor of <MathJax.Node inline>{`v_n}`}</MathJax.Node>.
          </center></p>
          <p>
          Then <MathJax.Node inline>{`|N(v_n)|=|W|`}</MathJax.Node> and <MathJax.Node inline>{`W⊆{v_3,v_4,…,v_n}`}</MathJax.Node>, 
          and <MathJax.Node inline>{`N(v_1)⊆{v_2,v_3,…,v_(n−1)}`}</MathJax.Node>, so <MathJax.Node inline>{`W∪N(v_1)⊆{v_2,v_3,…,v_n}`}</MathJax.Node>,
           a set with <MathJax.Node inline>{`n−1<n`}</MathJax.Node> elements. Since <MathJax.Node inline>{`|N(v_1)|+|W|=|N(v_1)|+|N(v_k)|≥n`}</MathJax.Node>,
           <MathJax.Node inline>{`N(v_1)`}</MathJax.Node>  and <MathJax.Node inline>{`W`}</MathJax.Node> must have a common element,
           <MathJax.Node inline>{`v_i`}</MathJax.Node> ; note that<MathJax.Node inline>{`3≤i≤n−1`}</MathJax.Node> . 
           Then this is a cycle of length <MathJax.Node inline>{`n`}</MathJax.Node>:
          </p>
          <p><center>
          <MathJax.Node inline>{`v_1,v_i,v_(i+1),…,v_k,v_(i−1),v_(i−2),…,v_1,`}</MathJax.Node>
          </center></p>
          <p>
          and is a Hamilton cycle.  
          </p>
          <h2><strong>Theorem 2</strong></h2>
          <p>
          If <MathJax.Node inline>{`G`}</MathJax.Node> is a simple graph on <MathJax.Node inline>{`n`}</MathJax.Node> vertices 
          and <MathJax.Node inline>{`d(v)+d(w)≥n−1`}</MathJax.Node> whenever <MathJax.Node inline>{`v`}</MathJax.Node> and
          <MathJax.Node inline>{`w`}</MathJax.Node>  are not adjacent, then <MathJax.Node inline>{`G`}</MathJax.Node> has a Hamilton path.
          </p>
          <h2><strong>Proof :</strong></h2>
          <p>
          Suppose <MathJax.Node inline>{`G`}</MathJax.Node> is not simple. The existence of multiple edges and loops can't help produce 
          a Hamilton cycle when <MathJax.Node inline>{`n≥3`}</MathJax.Node>: if we use a second edge between two vertices, or use a 
          loop, we have repeated a vertex. To extend the Ore theorem to multigraphs, we consider the condensation of <MathJax.Node inline>{`G:`}</MathJax.Node> When 
          <MathJax.Node inline>{`n≥3`}</MathJax.Node>, the condensation of <MathJax.Node inline>{`G`}</MathJax.Node> is simple,
           and has a Hamilton cycle if and only if <MathJax.Node inline>{`G`}</MathJax.Node> has a Hamilton cycle. So if the condensation 
           of <MathJax.Node inline>{`G`}</MathJax.Node> satisfies the Ore property, then <MathJax.Node inline>{`G`}</MathJax.Node> has a Hamilton cycle.
          </p>
          <h2><strong>Theorem 3</strong></h2>
          <p>
          If <MathJax.Node inline>{`G`}</MathJax.Node> is a simple graph with <MathJax.Node inline>{`n`}</MathJax.Node> vertices
           with <MathJax.Node inline>{`n>=3`}</MathJax.Node> such that the degree of every vertex in <MathJax.Node inline>{`G`}</MathJax.Node> is 
           at least <MathJax.Node inline>{`n/2`}</MathJax.Node>, then <MathJax.Node inline>{`G`}</MathJax.Node> has a Hamiltonian circuit.
          </p>
          <h1><strong>Coding and Algorithmic analysis of Hamiltonian Path</strong></h1>
          
          <p>
          Following are some ways of checking whether a graph contains a Hamiltonian Path or not:
          </p>
          <h2><strong>
            Method 1:
          </strong></h2>
          <p>
          A Hamiltonian Path in a graph having <MathJax.Node inline>{`N`}</MathJax.Node> vertices is nothing but a permutation of the vertices
           of the graph <MathJax.Node inline>{`[v_1, v_2, v_3, ......v_(N-1), v_N]`}</MathJax.Node> , such that there is an edge between <MathJax.Node inline>{`v_i`}</MathJax.Node> and <MathJax.Node inline>{`v_(i+1)`}</MathJax.Node> where
           <MathJax.Node inline>{`1 ≤ i ≤ N-1`}</MathJax.Node>. So it can be checked for all permutations of the vertices whether any of them represents
             a Hamiltonian Path or not. 
          </p>
          <p>
          Following is the pseudo code of the above algorithm:
          </p>
          <center><img src={require('../assets/charts2/chart5.png')} alt="chart-2" height="400px" width="600px"/></center> <br/>
          <p>
          The function get_next_permutation(p) generates the lexicographically next greater permutation than p.
          Following is the code implementation:
          </p>
          <center><img src={require('../assets/charts2/chart6.png')} alt="chart-2" height="400px" width="600px"/></center> <br/>
          <p>
          Time complexity of the above method can be easily derived. For a graph having <MathJax.Node inline>{`N`}</MathJax.Node> vertices
           it visits all the permutations of the vertices, i.e. <MathJax.Node inline>{`N!`}</MathJax.Node> iterations and in each of those
            iterations it traverses the permutation to see if adjacent vertices are connected or not 
            i.e <MathJax.Node inline>{`N`}</MathJax.Node> iterations, so the complexity is <MathJax.Node inline>{`O( N * N! ).`}</MathJax.Node>

          </p>
          <h2><strong>
            Method 2:
            </strong></h2>
            <p>
            There is one algorithm given by Bellman, Held, and Karp which uses dynamic programming to check whether a Hamiltonian Path exists in
             a graph or not. Here's the idea, for every subset <MathJax.Node inline>{`S`}</MathJax.Node> of vertices check whether there is a path that visits "EACH and ONLY" the vertices
              in <MathJax.Node inline>{`S`}</MathJax.Node> exactly once and ends at a vertex <MathJax.Node inline>{`v`}</MathJax.Node>. Do this for all <MathJax.Node inline>{`v in S`}</MathJax.Node> . 
              A path exists that visits each vertex in subset <MathJax.Node inline>{`S`}</MathJax.Node> and ends at 
              vertex <MathJax.Node inline>{`v in S`}</MathJax.Node> iff <MathJax.Node inline>{`v`}</MathJax.Node> has a neighbor <MathJax.Node inline>{`w`}</MathJax.Node> in <MathJax.Node inline>{`S`}</MathJax.Node> and 
              there is a path that visits each vertex in set <MathJax.Node inline>{`S-{v} `}</MathJax.Node>exactly once and ends at <MathJax.Node inline>{`w`}</MathJax.Node>. If there is such a
                 path, then adding the edge <MathJax.Node inline>{`w-v`}</MathJax.Node> to it will extend it to visit <MathJax.Node inline>{`v`}</MathJax.Node> and as it is already visiting every vertex in <MathJax.Node inline>{`S-{v}`}</MathJax.Node>, 
                 so the new path 
                 will visit every vertex in<MathJax.Node inline>{`S`}</MathJax.Node> .
            </p>
            <p>
            Following is the pseudo code for the above algorithm, it uses bitmasking to represent subsets :
            </p>
            <center><img src={require('../assets/charts2/chart7.png')} alt="chart-2" height="400px" width="600px"/></center> <br/>
            <p>
            Let's try to understand it. The cell <MathJax.Node inline>{`dp[j][i]`}</MathJax.Node> checks if there is a path that visits each vertex in subset represented by mask <MathJax.Node inline>{`i`}</MathJax.Node> and ends at vertex <MathJax.Node inline>{`j`}</MathJax.Node>. In the first 3 lines every cell of table
            <MathJax.Node inline>{`dp`}</MathJax.Node> is initialized as false and in the following two lines the cells <MathJax.Node inline>{`(i, 2^i)`}</MathJax.Node>, <MathJax.Node inline>{`0 ≤ i < n`}</MathJax.Node> are initialized as <MathJax.Node inline>{`true`}</MathJax.Node>. In the binary conversion of <MathJax.Node inline>{`2^i`}</MathJax.Node> only <MathJax.Node inline>{`i^(th)`}</MathJax.Node> bit is 1. That means <MathJax.Node inline>{`2^i`}</MathJax.Node> represents a 
             subset containing only the vertex <MathJax.Node inline>{`i`}</MathJax.Node>. And so the cell <MathJax.Node inline>{`dp[i][2^i]`}</MathJax.Node> represents whether there is a path that visits the vertex <MathJax.Node inline>{`i`}</MathJax.Node> exactly once and ends at vertex <MathJax.Node inline>{`i`}</MathJax.Node>. And ofcourse for every vertex 
             it should be true.
            </p>
            <p>
            The next loop iterates over <MathJax.Node inline>{`0`}</MathJax.Node> <MathJax.Node inline>{`2^n-1`}</MathJax.Node>to , all the bitmasks, that means all the subsets of the vertices. And the loop inside
             it check which of the vertices from <MathJax.Node inline>{`0`}</MathJax.Node> to <MathJax.Node inline>{`n-1`}</MathJax.Node> are present in subset <MathJax.Node inline>{`S`}</MathJax.Node> represented by a bitmask <MathJax.Node inline>{`i`}</MathJax.Node>. And the third loop 
             inside it checks for every vertex <MathJax.Node inline>{`j`}</MathJax.Node> present in <MathJax.Node inline>{`S`}</MathJax.Node>, which of the vertices from <MathJax.Node inline>{`0`}</MathJax.Node> to <MathJax.Node inline>{`n-1`}</MathJax.Node> are present in <MathJax.Node inline>{`S`}</MathJax.Node> and are neighbors 
             of <MathJax.Node inline>{`j`}</MathJax.Node>. Then for every such vertex <MathJax.Node inline>{`k`}</MathJax.Node> it checks whether the cell <MathJax.Node inline>{`dp[k][ i " "XOR" "  2^j ]`}</MathJax.Node> is true or not. What does this cell 
             represents? In binary conversion of <MathJax.Node inline>{`i" " XOR`}</MathJax.Node> <MathJax.Node inline>{`" "2^j`}</MathJax.Node> every bit which is 1 in binary conversion of <MathJax.Node inline>{`i`}</MathJax.Node> remains 1 except the <MathJax.Node inline>{`j^(th)`}</MathJax.Node>
              bit. So <MathJax.Node inline>{`i`}</MathJax.Node> XOR <MathJax.Node inline>{`2^j`}</MathJax.Node> represents the subset <MathJax.Node inline>{`S-{j}`}</MathJax.Node> and the cell <MathJax.Node inline>{`dp[k][ i" " XOR" " 2^j ]`}</MathJax.Node> represents whether there is a path that 
              visits each vertex in the subset <MathJax.Node inline>{`S-{j}`}</MathJax.Node> exactly once and ends at <MathJax.Node inline>{`k`}</MathJax.Node>. If there is a path that visits each vertex in <MathJax.Node inline>{`S-{j} `}</MathJax.Node>
              exactly once and ends at <MathJax.Node inline>{`k`}</MathJax.Node> than adding the edge <MathJax.Node inline>{`k-j`}</MathJax.Node> will extend that path to visit each vertex in <MathJax.Node inline>{`S`}</MathJax.Node> exactly once and 
              end at <MathJax.Node inline>{`j`}</MathJax.Node>. So <MathJax.Node inline>{`dp[j][i]`}</MathJax.Node> will be true if there is such a path.
            </p>
            <p>
            Finally there is a loop that iterates over all the vertices 0 to <MathJax.Node inline>{`n-1`}</MathJax.Node> and checks if
             the cell <MathJax.Node inline>{`dp[i][2^n-1]`}</MathJax.Node> is true or not, where <MathJax.Node inline>{`0 ≤ i < n`}</MathJax.Node>. In the binary conversion of
             <MathJax.Node inline>{`2^n-1`}</MathJax.Node> every bit is 1, that means it represents the set containing all the vertices
               and cell <MathJax.Node inline>{`dp[i][2^n-1]`}</MathJax.Node> represents whether there is a path that visits every vertex
                exactly once and ends at <MathJax.Node inline>{`i`}</MathJax.Node>. If there is such a path it returns true i.e. there
                 is a Hamiltonian path in the given graph. In the last line it returns false, 
                 that means no Hamiltonian path is found in the given graph.
            </p>
            <p>
              <p>
              Time complexity of the above algorithm is <MathJax.Node inline>{`O(2^n" "n^2)`}</MathJax.Node>.
              </p>
            Following is the code implementation of the above method:
            </p>
            <center><img src={require('../assets/charts2/chart8.png')} alt="chart-2" height="400px" width="600px"/></center> <br/>
            <p>
          <h2><strong>
            Method 3:
            </strong></h2>
            </p>
            <p>
            Depth first search and backtracking can also help to check whether
             a Hamiltonian path exists in a graph or not. Simply apply depth first
              search starting from every vertex <MathJax.Node inline>{`v`}</MathJax.Node> and do labeling of all the vertices.
               All the vertices are labelled as either "IN STACK" or "NOT IN STACK". 
               A vertex is labelled "IN STACK" if it is visited but some of its adjacent
                vertices are not yet visited and is labelled "NOT IN STACK" if it is not visited.
            </p>
            <p>
            If at any instant the number of vertices with label "IN STACK" is equal to the total
             number of vertices in the graph then a Hamiltonian Path exists in the graph.
            </p>
            <p>
            Worst case complexity of using DFS and backtracking is <MathJax.Node inline>{`O(N!).`}</MathJax.Node>
            </p>
            <p>
            Following is the code implementation of the above method:
            </p>
            <center><img src={require('../assets/charts2/chart9.png')} alt="chart-2" height="500px" width="600px"/></center> <br/>
          <br/><br/>
        </div>
        </MathJax.Context>
    )
  }
}

