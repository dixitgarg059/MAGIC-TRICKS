import React, {Component} from 'react';
import axios from 'axios';
import $ from "jquery";
var lt = new Array(11).fill(false);
export default class Products extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            cards1:['1','0','0','1','1','0','1','1','0'],
            selected_indices:[],
            Player:"Alice",
            // cards2:"",
            total_count:0,
            limit:11
        }
    }
    componentDidMount() {
        // var lt=[]
        // for(var i=0;i<10;i++)
        // {
        //     $("."+String(i)).on('click', function(event){
        //         $(event.delegateTarget).css("background-color","blue")
        //         lt[i]=true;
        //     });
            
        // }
        $(".play").show();
        $(".loose").hide();
        $(".0").on('click', function(event){
            $(event.delegateTarget).css("background-color","blue")
            lt[0]=true;
        });
        $(".1").on('click', function(event){
            $(event.delegateTarget).css("background-color","blue")
            lt[1]=true;
        });
        $(".2").on('click', function(event){
            $(event.delegateTarget).css("background-color","blue")
            lt[2]=true;
        });
        $(".3").on('click', function(event){
            $(event.delegateTarget).css("background-color","blue")
            lt[3]=true;        
        });
        $(".4").on('click', function(event){
            $(event.delegateTarget).css("background-color","blue")
            lt[4]=true;
        });
        $(".5").on('click', function(event){
            $(event.delegateTarget).css("background-color","blue")
            lt[5]=true;
        });
        $(".6").on('click', function(event){
            $(event.delegateTarget).css("background-color","blue")
            lt[6]=true;
        });
        $(".7").on('click', function(event){
            $(event.delegateTarget).css("background-color","blue")
            lt[7]=true;
        });
        $(".8").on('click', function(event){
            $(event.delegateTarget).css("background-color","blue")
            lt[8]=true;
        });
        $(".9").on('click', function(event){
            $(event.delegateTarget).css("background-color","blue")
            lt[9]=true;
        });

    }
    Show_logic=() => {
        if(!window.confirm("UNLOCK LOGIC ?"))
            return 
        this.props.history.push({
            pathname:'/Play/Game1/Logic'
        });
    }
    Erase=() => {

        var arr=[]
        for(var i=0;i<10;i++)
        {
            if(lt[i])
            {
                arr.push(i);
            }
        }
        if(arr.length!=2 || (arr[0]!=arr[1]-1) || (this.state.cards1[arr[0]]==this.state.cards1[arr[1]]))
        {
            alert("Invalid Move");
            for(var i=0;i<10;i++)
            {
                $("." + String(i)).css("background-color","white")
                lt = new Array(11).fill(false);

            }
            return;
        }
        var cards2=[]
        for(var i=0;i<this.state.cards1.length;i++)
        {
            if(!lt[i])
                cards2.push(this.state.cards1[i]);
            else{
                
                $("." + String(i)).css("background-color","white")
            }
        }
        
        this.setState({cards1:cards2});
        lt = new Array(11).fill(false);
        if(this.state.Player == "Alice")
        {
            this.setState({Player:"Bob"});
        }
        else
            this.setState({Player:"Alice"});
        var possible = false;
        for(var i=0;i<cards2.length-1;i++)
        {
            if(cards2[i]!=cards2[i+1])
            {
                possible=true;
                break;
            }
        }
        if(possible)
            return ;
        $(".play").hide();
        $(".loose").show();
    }
    Loose=() => {

        if(this.state.Player == "Alice")
            alert("Bob Wins");
        else
            alert("Alice Wins");
        
        // this.props.history.push({pathname:'/Play/Game2'})
        window.location.reload();
    }

    render() {
        return (
            <div>
      
            <button type="button" onClick={this.Show_logic} style={{float: 'right'}} > Show Logic </button>


            <div className="container" style={
              {
                  marginBottom:'25px'
              }
            }>
                <h4>0-1 Game</h4>
                Alica and Bob are playing a game <br></br>
                Initially they have a binary string s consisting of only characters 0 and 1. <br></br>
                Alice and Bob make alternating moves: Alice makes the first move, Bob makes the second move, 
                Alice makes the third one, and so on. During each move, the current player must choose two 
                <b> different </b>adjacent characters of string s and delete them.
                <br></br>
                If a player can't make any move, they lose. Both players play optimally.

            </div>

            

           <div className="container" style={
              {
                  marginBottom:'18px'
              }
            }>
                {this.state.Player}'s Turn
            </div> 
            <div className="container">
                  {this.state.cards1.map((char,index) =>(
                      <span class = {index} style={
                        {
                         border: '1px solid black',
                         padding: '11.4px 12px',

                        }
                      } > {char} </span>
                  ))}
              </div>


          <div className="container" style={
              {
                  marginTop:'18px'
              }
          }>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
          <li class = "play"><button type="button" onClick={this.Erase}>Erase</button></li>
          <li class = "loose"><button type="button" onClick={this.Loose}>Finish</button></li>
              
          </ul>
      </div>
  </nav>
</div>
          </div>
      )
    }
}