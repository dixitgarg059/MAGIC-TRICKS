import React, { Component, PureComponent } from "react";
import axios from "axios";
import Alert from "react-s-alert";

var pictures = [];
for (let i = 1; i <= 52; i++) {
  pictures.push(i);
}
var first = -1;
var steps = [];
var value = 0;

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
  Alert.error("Caught in trap!", { offset: 100 });
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
    if (first == -1) first = i;
    // else
    // return;
    if (this.state.selarr.indexOf(i) == -1)
      this.setState({
        selarr: [...this.state.selarr, i],
      });
    else
      this.setState({
        selarr: [
          ...this.state.selarr.slice(0, this.state.selarr.indexOf(i)),
          ...this.state.selarr.slice(this.state.selarr.indexOf(i) + 1),
        ],
      });
  }

  nextstep(i) {
    this.setState({
      set: 1,
    });
    document.getElementById("mydiv").scrollTop += "40px";
    let loop = i % 13,
      next = 0;
    console.log(i);
    console.log(steps[i]);
    loop = steps[i];
    // console.log(loop); // pic num
    next = this.arr.indexOf(i);
    // console.log(next); // index in array
    if (next + loop >= 52) {
      Alert.success("Walk complete", { offset: 100 });
      if(next != this.props.trapid){
        Alert.error("Trap avoided", { offset: 100 });
      }
      console.log("DONE");
      return;
    }
    loop = this.arr[next + loop];
    this.handleClick(loop);
    first = loop;
  }
  trapset() {
    let pick = Math.floor(Math.random() * 7);
    console.log(pick);
    let nt = 0;
    while (1) {
      let val = this.arr[pick]; //pic num
      nt = steps[val]; //steps
      if (nt + pick > 52) {
        break;
      }
      let lp = this.arr[nt + pick];
      pick = pick + nt;
    }
    this.props.func(pick);
  }
  renderSquare(i) {
    console.log(`render called:`, { i });
    if (first == -1) {
      if (this.arr.indexOf(i) < 7) {
        return (
          <Square class={"mycard"} id={i} onClick={() => this.handleClick(i)} />
        );
      } else {
        return <Square class={"mycard"} id={i} />;
      }
    } else {
      console.log(`first:`, first);
      if (this.state.selarr.indexOf(i) == -1) {
        return <Square class={"mycard"} id={i} />;
      } else {
        if (this.arr.indexOf(i) == this.props.trapid) {
          
          return <Trap class={"trap"} id={i} />;
        } else {
          return <Square class={"mycard-bold"} id={i} />;
        }
      }
    }
  }
  componentDidMount() {
    this.trapset();
  }
  render() {
    return (
      <div>
        <Alert stack={{ limit: 10, spacing: 50 }} />
        <div>
          <button
            style={{ left: "45%", position: "relative" }}
            className="btn btn-outline-primary"
            onClick={() => this.nextstep(first)}
          >
            {this.state.set == 0
              ? `Choose the first card`
              : `Find the next card`}
          </button>
          <br />
          <br />
        </div>
        <div
          style={{
            overflow: "auto",
            height: "350px",
            backgroundColor: "#252525",
          }}
          id={"mydiv"}
        >
          <br />
          <br />
          {this.arr.map((value, index) => {
            console.log(index);
            return this.renderSquare(value);
          })}
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
      trapid: -1,
    };
  }
  trapsarenotgay = (id) => {
    this.setState({
      trapid: id,
    });
    console.log(`ttt:`, id);
  };
  keys = (num) => {
    value = num;
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
        <div>
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
            <p class="h2">The Kruskal Count Card Trick</p>
            <p>
              The cards below were ordered by shuffling a deck of cards and then
              dealing them out.
              <br />
              Click on any card in the first row. Whatever number is on this
              card move this many cards to the right and click the new card,
              treating Ace as a 1 and face cards as 5, and wrapping around to
              the left side of the next row. Repeat from the card just clicked.
              I magically know that you will (usually) end up on the 'trap'
              card, indicated by a thick border.
            </p>
            <br />
            <div className="game">
              <h2>Choose one of the following values for the face cards:</h2>
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
                your card. (Lower => Better chance)
              </p>
            </div>
          </div>
        </div>
      );
    } else if (this.state.stage == 2) {
      return (
        <div>
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
            <p class="h2">The Kruskal Count Card Trick</p>
            <p class="h3">Choose your card from the first row of the deck</p>
            <br />
          </div>
          <button
            className="btn btn-outline-success"
            onClick={() => this.resetstate()}
          >
            Play again
          </button>
          <br />
          <br />
          <div>
            <Board trapid={this.state.trapid} func={this.trapsarenotgay} />
          </div>
        </div>
      );
    }
  }
}
