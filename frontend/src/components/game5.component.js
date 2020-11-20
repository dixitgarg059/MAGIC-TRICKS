import React, { Component, PureComponent } from "react";
import axios from "axios";
import Alert from "react-s-alert";

var pictures = [];
for (let i = 1; i <= 52; i++) {
  pictures.push(i);
}
var first = -1;
var steps = [];
var trapid = -1;

function randomint() {
  return Math.floor(Math.random() * 52 + 1);
}

function Square(props) {
  var myimg = props.id + ".png";
  //   console.log(props.class);
  return (
    <img
      className={props.class}
      src={require(`../card_pics/${myimg}`)}
      onClick={props.onClick}
    />
  );
}
function Trap(props) {
  // var myimg =props.id+'.png';
  console.log(`trap caught`);
  Alert.error("Caught in trap!", { offset: 125 });
  return (
    <img
      className={props.class}
      src={require(`../assets/spider.png`)}
      onClick={props.onClick}
    />
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selarr: [],
      set: 0,
      avoid: -1,
      fixed: 0,
    };
    this.arr = [];
    for (let i = 1; i <= 52; ) {
      let r = randomint();
      if (this.arr.indexOf(r) == -1) {
        this.arr.push(r);
        i++;
      } else continue;
    }
    this.id = 0;
    //   this.props.trapset();
  }
  handleClick(i) {
    // console.log(i);
    // if(this.props.trapid==-1)
    // {
    //   this.trapset();
    // }
    
    first = i;
    if(this.state.fixed==0){
      if (this.state.selarr.indexOf(i) == -1)
        this.setState({
          selarr: [i],
          // selarr: [...this.state.selarr, i],
          set: 1,
        });
      else
        this.setState({
          selarr: [
            ...this.state.selarr.slice(0, this.state.selarr.indexOf(i)),
            ...this.state.selarr.slice(this.state.selarr.indexOf(i) + 1),
          ],
          set: 1,
        });
    }else{
      if (this.state.selarr.indexOf(i) == -1)
      this.setState({
        selarr: [...this.state.selarr, i],
        set: 1,
      });
    else
      this.setState({
        selarr: [
          ...this.state.selarr.slice(0, this.state.selarr.indexOf(i)),
          ...this.state.selarr.slice(this.state.selarr.indexOf(i) + 1),
        ],
        set: 1,
      });
    }
  }

  nextstep(i) {
    if(this.state.set==0){
        Alert.error("Please select card from first row", { offset: 125 });
      return;
    }
    // console.log(this.props.trapid);
    if(this.state.fixed==0){
      this.setState({
        fixed: 1,
      });
      return;
    }
    let loop = i % 13,
      next = 0;
    console.log(i);
    console.log(steps[i]);
    loop = steps[i];
    // console.log(loop); // pic num
    next = this.arr.indexOf(i);
    // console.log(next); // index in array
    if (next + loop >= 52) {
      Alert.success("Walk complete", { offset: 125 });
      if (next != trapid) {
        Alert.error("Trap avoided", { offset: 125 });
      }
      return;
    }
    let currow = Math.floor(next / 7);
    loop = this.arr[next + loop];
    let nextrow = Math.floor(this.arr.indexOf(loop) / 7);
    console.log(`rows:`,currow,nextrow);
    if((currow-nextrow)==2){
      document.getElementById("devdiv").scrollTop += 125;
    }
    else if(currow<nextrow){
      document.getElementById("devdiv").scrollTop += 100;
    }
    else if(currow==nextrow){
      document.getElementById("devdiv").scrollTop += 50;
    }
    this.handleClick(loop);
    first = loop;
  }
  trapset() {
    let pick = Math.floor(Math.random() * 7);
    console.log(pick);
    let nt = 0;
    while (1) {
      let val = this.arr[pick]; //pic id
      nt = steps[val]; //steps
      if ((nt + pick) >= 52) {
        break;
      }
      // console.log(nt,pick);
      pick = pick + nt;
    }
    this.props.func(pick);
    console.log(`after`,trapid);
    return;
  }
  renderSquare(i) {
    // console.log(this.props.trapid);
    if (this.state.fixed == 0) {
      if (this.arr.indexOf(i) < 7) {
        if (this.state.selarr.indexOf(i) == -1) {
        return (
          <Square class={"mycard"} id={i} onClick={() => this.handleClick(i)} />
        );
        } else{
          return (
            <Square class={"mycard-bold"} id={i} onClick={() => this.handleClick(i)} />
          );
        }
      } else {
        return <Square class={"mycard"} id={i} />;
      }
    } else {
      if (this.state.selarr.indexOf(i) == -1) {
        if (this.arr.indexOf(i) == trapid) {
          return <Square class={"trap"} id={i} onClick={() => this.handleClick(i)}/>;
        }else {
          return <Square class={"mycard"} id={i} onClick={() => this.handleClick(i)}/>;
        }
      } else {
        if (this.arr.indexOf(i) == trapid) {
          return <Trap class={"trap"} id={i} onClick={() => this.handleClick(i)}/>;
        } else {
          return <Square class={"mycard-bold"} id={i} />;
        }
      }
    }
  }
 
  render() {
    if(trapid==-1)
    this.trapset();

    if (this.state.fixed == 0) {
      return (
        <div>
          <p>Trap card:</p>
          <Square class={"mycard"} id={this.arr[trapid]}/>
          <br/>
          <br/>
          <p class="h3">Choose your card from the first row of the deck</p>
          <Alert stack={{ limit: 10, spacing: 50 }} />
          <div>
            <button
              style={{ left: "20%", position: "relative" }}
              className="btn btn-primary"
              onClick={() => this.nextstep(first)}
            >
              Confirm selection
            </button>
            <br />
            <br />
          </div>
          <div
            style={{
              overflowY: "scroll",
              height: "350px",
              backgroundColor: "#252525",
            }}
            id="devdiv"
            className="myboard-row"
          >
            <br />
            <br />
            {this.arr.map((value, index) => {
              return this.renderSquare(value);
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>Trap card:</p>
          <Square class={"mycard"} id={this.arr[trapid]}/>
          <br/>
          <br/>
          <p style={{marginLeft: "auto"}} class="h3">Walk your path by clicking the button:</p>
          <Alert stack={{ limit: 10, spacing: 50 }} />
          <div>

            <button
              style={{ left: "20%", position: "relative" }}
              className="btn btn-outline-primary"
              onClick={() => this.nextstep(first)}
            >
              Find the next card
            </button>
            <br />
            <br />
          </div>
          <div
            style={{
              overflowY: "scroll",
              height: "350px",
              backgroundColor: "#252525",
            }}
            id={"devdiv"}
          >
            <br />
            <br />
            {this.arr.map((value, index) => {
              return this.renderSquare(value);
            })}
          </div>
        </div>
      );
    }
  }
}

export default class GAME5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 1,
      win: 0,
      trapid: -1,
    };
  }
  trapsarenotgay = (id) => {
    // this.setState({
    //   // trapid: id,
    //   // stage: 3,
    // });
    trapid = id;
    console.log(`ttt:`, id);
  };
  keys = (num) => {
    // value = num;
    console.log(num);
    for (let i = 0; i <= 52; i++) {
      if (i % 13 >= 11 || i % 13 == 0) {
        steps.push(num);
      } else {
        steps.push(i % 13);
      }
    }
    this.setState({
      stage: 2,
    });
  };
  Show_logic = () => {
    if (!window.confirm("UNLOCK LOGIC ?")) return;
    this.props.history.push({
      pathname: "/Play/Game5/Logic",
    });
  };
  resetstate = () => {
    this.setState({
      stage: 1,
    });
    window.location.reload(false);
  };
  render() {
    if (this.state.stage == 1) {
      return (
        <div style={{paddingTop: "100px"}}>
          <button
            type="button"
            onClick={this.Show_logic}
            style={{ float: "right" }}
            className="btn btn-outline-danger"
          >
            {" "}
            Show Logic{" "}
          </button>
          <div>
            <h1><strong>The Kruskal Count Card Trick</strong></h1>
            <p className="text-logic">
              Click on any card in the first row. Whatever number is on this
              card, move this many cards to the right,
              treating Ace as a 1 and face cards as one of the values chosen below.
              I magically know that you will (usually) end up on the 'trap'
              card predicted.
            </p>
            <br />
            <div>
              <h2 className="text-logic">Choose one of the following values for the face cards:</h2>
              <button
                className="btn btn-info facevalue"
                onClick={() => this.keys(1)}
              >
                <h4>1</h4>
              </button>
              <button
                className="btn btn-info facevalue"
                onClick={() => this.keys(2)}
              >
                <h4>2</h4>
              </button>
              <button
                className="btn btn-info facevalue"
                onClick={() => this.keys(3)}
              >
                <h4>3</h4>
              </button>
              <button
                className="btn btn-info facevalue"
                onClick={() => this.keys(5)}
              >
                <h4>5</h4>
              </button>
              <button
                className="btn btn-info facevalue"
                onClick={() => this.keys(7)}
              >
                <h4>7</h4>
              </button>
              <br />
              <br />
              <p>
                The value of face cards will determine the accuracy of guessing
                your card. (Hint: Try a lower number!)
              </p>
            </div>
          </div>
        </div>
        
      );
    } else if (this.state.stage == 2) {
      return (
        <div style={{paddingTop: "100px"}}>
          <button
            type="button"
            onClick={this.Show_logic}
            style={{ float: "right" }}
            className="btn btn-outline-danger"
          >
            {" "}
            Show Logic{" "}
          </button>
          <div className="game">
          <h1><strong>The Kruskal Count Card Trick</strong></h1>
          <br/>
            <p className="text-logic">
            The cards below were ordered by shuffling a deck of cards and then
              dealing them out.
              Click on any card in the first row and confirm your choice. Whatever number is on this
              card, move this many cards to the right by clicking the button given,
              treating Ace as a 1 and face cards as the chosen value.
              I magically know that you will (usually) end up on the 'trap'
              card predicted.
              </p>
            <br />
          </div>
          <button
            style={{ float: "right" }}
            className="btn btn-outline-success"
            onClick={() => this.resetstate()}
          >
            Play again
          </button>
          <br />
          <br />
          <div>
            <Board func={this.trapsarenotgay} />
          </div>
        </div>
      );
    }
  }
}
