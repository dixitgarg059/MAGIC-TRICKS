import React, {Component, PureComponent} from 'react';
import axios from 'axios';
import Alert from 'react-s-alert';

var pictures = [];
for(let i=1;i<=52;i++){
  pictures.push(i);
}
var first=-1,trapid=-1;
var steps = [];
var value=0;

function randomint() {
  return Math.floor(Math.random() * 52+1);
}   

function Square(props){
  var myimg =props.id+'.png';
//   console.log(props.class);
  return(
    <img className={props.class} src={require(`../card_pics/${myimg}`)} onClick={props.onClick}/>
  )
}
function Trap(props){
  // var myimg =props.id+'.png';
  console.log(`trap caught`);
  return(
      <img className={props.class} src={require(`../card_pics/trap.jpg`)}/>,
    <div>
      <Alert stack={{ limit: 10, spacing: 50 }} />
    </div>,
        Alert.error("Trap caught", {offset:100})
  )
}

class Board extends React.Component {
  constructor(props){
      super(props);   
      this.state={
          selarr: [],
      }
      this.arr = [];
      for(let i=1;i<=52;)
      {
        let r = randomint();
        if(this.arr.indexOf(r)==-1){
          this.arr.push(r);
          i++;
        }
        else
        continue;
      }
      this.id = 0;
    //   this.props.trapset();
  }
  handleClick(i) { 
    // console.log(i);
    if(first==-1)
    first=i;   
    // else
    // return; 
    if(this.state.selarr.indexOf(i)==-1)  
    this.setState({
      selarr: [...this.state.selarr,i]
    })
    else
    this.setState({
      selarr: [...this.state.selarr.slice(0,this.state.selarr.indexOf(i)),...this.state.selarr.slice(this.state.selarr.indexOf(i)+1)],
    })
  }
  trapsarenotgay(id){
      // this.arr[id].class="traps";
      trapid=id;
    console.log(id);
  }
  nextstep(i) {
    this.props.value="CHnage";
    let loop=i%13,next=0;
    console.log(i);
    console.log(steps[i]);
    loop = steps[i];
      // console.log(loop); // pic num
      next=this.arr.indexOf(i);
      // console.log(next); // index in array
      if((next+loop)>=52){
        Alert.success("Walk complete", {offset:100});
        Alert.error("Trap avoided", {offset:100});
        console.log("DONE");
        // if(trapid == i)
        // console.log("TRAPPED");
        return;
      }
      loop = this.arr[next+loop];
      this.handleClick(loop);
      first = loop;
}
trapset(){
    let pick = Math.floor(Math.random()*7);
    console.log(pick);
    let nt=0;
    while(1){
        let val = this.arr[pick];//pic num
        // console.log(val);
        nt = steps[val];//steps
        // console.log(`nt:`,nt);
        if((nt+pick)>52){
            break;
        }
        let lp = this.arr[nt+pick];
        pick = pick+nt;
    }
    this.trapsarenotgay(pick);
}
  renderSquare(i) {
    // console.log(this);
    // console.log(this.state.selarr);
    console.log(`render called:`,{i});
    if(first==-1){
      if(this.arr.indexOf(i)<7){
        return(
          <Square class={"mycard"} id={i} onClick={()=>this.handleClick(i)}/>
        )
      } else{
        return (
          <Square class={"mycard"} id={i}/>
        )
      }
    } else {
      console.log(`first:`,first);
      if(this.state.selarr.indexOf(i)==-1){
          return (
          <Square class={"mycard"} id={i}/>
          );
        } else{
          if(this.arr.indexOf(i)==trapid){
            return (
              <Trap class={"trap"}/>
              );
          } else {
            return (
              <Square class={"mycard-bold"} id={i}/>
              );
          }
        }
    }
    //   if(this.state.selarr.indexOf(i)==-1){
    //     if(this.arr.indexOf(i)<7){
    //       return (
    //       <Square class={"mycard"} id={i} onClick={()=>this.handleClick(i)}/>
    //       );
    //     } else{
    //       return (
    //         <Square class={"mycard"} id={i}/>
    //         );
    //     }
    //   } else{
    //     return (
    //       <Square class={"mycard-bold"} id={i} onClick={()=>this.handleClick(i)}/>
    //       );
    //   }
    // } else{
    //   if(this.state.selarr.indexOf(i)==-1){
    //     return (
    //     <Square class={"mycard"} id={i}/>
    //     );
    //   } else{
    //     if(this.arr.indexOf(i)==trapid){
    //       return (
    //         <Trap class={"trap"}/>
    //         );
    //     } else{
    //       return (
    //         <Square class={"mycard-bold"} id={i}/>
    //         );
    //     }
    //   }
    // }
}
  
  render() {
      this.trapset();
      return (
          <div>
          <Alert stack={{ limit: 10, spacing: 50 }} />
        <div>
        <button className="btn btn-outline-primary sticky" value="Find next" onClick={()=>this.nextstep(first)}></button>
        </div>
        {this.arr.map((value,index)=>{
          console.log(index);
          {this.renderSquare(value)}
        })}
          <div className="myboard-row ">
          {this.renderSquare(this.arr[0])}
          {this.renderSquare(this.arr[1])}
          {this.renderSquare(this.arr[2])}
          {this.renderSquare(this.arr[3])}
          {this.renderSquare(this.arr[4])}
          {this.renderSquare(this.arr[5])}
          {this.renderSquare(this.arr[6])}
          </div>
          <div className="myboard-row">
          {this.renderSquare(this.arr[7])}
          {this.renderSquare(this.arr[8])}
          {this.renderSquare(this.arr[9])}
          {this.renderSquare(this.arr[10])}
          {this.renderSquare(this.arr[11])}
          {this.renderSquare(this.arr[12])}
          {this.renderSquare(this.arr[13])}
          </div>
          <div className="myboard-row">
          {this.renderSquare(this.arr[14])}
          {this.renderSquare(this.arr[15])}
          {this.renderSquare(this.arr[16])}
          {this.renderSquare(this.arr[17])}
          {this.renderSquare(this.arr[18])}
          {this.renderSquare(this.arr[19])}
          {this.renderSquare(this.arr[20])}
          
          </div>
          <div className="myboard-row">
          {this.renderSquare(this.arr[21])}
          {this.renderSquare(this.arr[22])}
          {this.renderSquare(this.arr[23])}
          {this.renderSquare(this.arr[24])}
          {this.renderSquare(this.arr[25])}
          {this.renderSquare(this.arr[26])}
          {this.renderSquare(this.arr[27])}
          
          </div>
          <div className="myboard-row">
          {this.renderSquare(this.arr[28])}
          {this.renderSquare(this.arr[29])}
          {this.renderSquare(this.arr[30])}
          {this.renderSquare(this.arr[31])}
          {this.renderSquare(this.arr[32])}
          {this.renderSquare(this.arr[33])}
          {this.renderSquare(this.arr[34])}
          
          </div>
          <div className="myboard-row">
          {this.renderSquare(this.arr[35])}
          {this.renderSquare(this.arr[36])}
          {this.renderSquare(this.arr[37])}
          {this.renderSquare(this.arr[38])}
          {this.renderSquare(this.arr[39])}
          {this.renderSquare(this.arr[40])}
          {this.renderSquare(this.arr[41])}
          
          </div>
          <div className="myboard-row">
          {this.renderSquare(this.arr[42])}
          {this.renderSquare(this.arr[43])}
          {this.renderSquare(this.arr[44])}
          {this.renderSquare(this.arr[45])}
          {this.renderSquare(this.arr[46])}
          {this.renderSquare(this.arr[47])}
          {this.renderSquare(this.arr[48])}
          {this.renderSquare(this.arr[49])}
          {this.renderSquare(this.arr[50])}
          {this.renderSquare(this.arr[51])}
          </div> 
      </div>
      );
  }
}

export default class GAME5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: 1,
            win: 0,
        }
    }

    keys=(num)=> {
        // console.log(num);
        value=num;
        // console.log(value);
        for(let i=0;i<=52;i++){
          if((i%13)>=11 || i%13==0){
            steps.push(num);
            // console.log("being:",i,i%13,num);
          }
          else{
            steps.push(i%13);
            // if(i==51)
            // console.log("eeee");
          }
        }  
        this.setState({
            stage: 2,
        })
      }
    Show_logic=() => {
        if(!window.confirm("UNLOCK LOGIC ?"))
            return 
        this.props.history.push({
            pathname:'/Play/Game5/Logic'
        });
    }
    resetstate=()=>{
      this.setState({
        stage: 1,
      })
      window.location.reload(false);
    }
    render() {
        if(this.state.stage==1){
            return (
              <div>
                <button type="button" onClick={this.Show_logic} style={{ float: 'right' }} className='btn btn-outline-danger'> Show Logic </button>
                <div className="game">
                  <p class="h2">The Kruskal Count Card Trick</p>
                  <p>
                    The cards below were ordered by shuffling a deck of cards and then dealing them out.<br/>
                    Click on any card in the first row. Whatever number is on this card move this many cards to the right and click the new card, treating Ace as a 1 and face cards as 5, and wrapping around to the left side of the next row. Repeat from the card just clicked. I magically know that you will (usually) end up on the 'trap' card, indicated by a thick border. The <a href="kruskal2.html">two deck version</a> is successful over 95% of the time. To reshuffle and play again hit the reload button on your browser.
                  </p>
                  <br/>
                <div className="game">
                  <h2>
                    CHOOSE ANY VALUE FOR THE FACE CARDS:
                  </h2>
                    <button className="btn btn-outline-info" onClick={()=>this.keys(2)}>2</button>
                    <button className="btn btn-outline-info" onClick={()=>this.keys(3)}>3</button>
                    <button className="btn btn-outline-info" onClick={()=>this.keys(5)}>5</button>
                    <button className="btn btn-outline-info" onClick={()=>this.keys(7)}>7</button>
                    <br/>
                    <br/>
                    <p>The value of face cards will determine the accuracy of guessing your card</p>
                </div>
                </div>
              </div>
            );
        }
        else if(this.state.stage==2){
            return (
                <div>
                  <button type="button" onClick={this.Show_logic} style={{ float: 'right' }} className='btn btn-outline-danger'> Show Logic </button>
                  <div className="game">
                    <p class="h2">The Kruskal Count Card Trick</p>
                    <p class="h3">
                     Choose your card from the first row of the deck
                    </p>
                    <br/>
                  </div>
                  <button className="btn btn-outline-success" onClick={()=>this.resetstate()}>Play again</button>
                  <br/>
                  <br/>
                  <div>
                    <Board />
                  </div>
                </div>
            );
        }
    }
}