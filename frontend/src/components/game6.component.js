import React, { Component } from 'react';
import axios from 'axios';
import Alert from 'react-s-alert';
import '../App.css';
import { tsImportEqualsDeclaration } from '@babel/types';
export default class GAME5 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            barr: null,
            available: null,
            turn: 1,
            dplayer: true,
            number: 8,
            stage: 1,
            win: null,
            blueloading: false,
            goldloading: false,
            hint : false,

        }
        this.array = [];
        this.kng = [
            [2, 1],
            [2, -1],
            [-2, 1],
            [-2, -1],
            [1, 2],
            [1, -2],
            [-1, -2],
            [-1, 2],
            [0, 0]
        ]



    }
    Show_logic = () => {
        if (!window.confirm("UNLOCK LOGIC ?")) return;
        this.props.history.push({
            pathname: "/Play/Game6/Logic",
        });
    };
    checkAv = tmp => {
        for (let p = 0; p < this.state.number; p++) {
            for (let q = 0; q < this.state.number; q++) {
                if (tmp[p][q] == 1) return true;
            }

        }
        return false;
    }
    insert=(barr,available,i,j,turn)=>{
        let temp = barr.slice();
        let line = temp[i].slice();
        line[j] = turn;
        temp[i] = line;
        let tmp = available.slice()
        turn = (turn == 1) ? 2 : 1;

        this.kng.map(
            (ar) => {
                let i_ = i + ar[0];
                let j_ = j + ar[1];
                if (i_ >= 0 && i_ < this.state.number && j_ >= 0 && j_ < this.state.number) {
                    let ln = tmp[i_].slice();
                    ln[j_] = 0;
                    tmp[i_] = ln;
                }

            }
        )
        // console.log(tmp);
        console.table(tmp);
        console.table(temp);
        return [temp,tmp,turn];
    }

    doIt = (i, j) => {
        let win= null;
      
        let t= this.insert(this.state.barr,this.state.available,i,j,this.state.turn);
        console.log(t);
        let barr=t[0],available=t[1],turn=t[2];

           if (this.state.dplayer == false && this.checkAv(available)==true) {
            let p = 0, q = 0;
            while (true) {
                 p = Math.floor(Math.random() * this.state.number);
                q = Math.floor(Math.random() * this.state.number);
                if(available[p][q]==1)break;
                // n++;
            }
            console.log(p,q);
            t = this.insert(barr,available,p,q,turn);
            barr=t[0];
            available=t[1];
            turn = t[2];
        }
        else if(this.state.dplayer==false && this.checkAv(available)==false){
            win = 'Blue';
        }

        
        this.setState({
            barr: barr,
            turn: turn,
            available: available,
        })
        if (this.checkAv(available) == false) {
            if(win==null && this.state.dplayer == false) win = 'Gold';
            else if(win==null && this.state.dplayer == true)  win = (turn == 1)?'Gold':'Blue';
            Alert.success(`${win} wins.`, { offset: 100 });
            this.setState({
                win: win,
                stage: 4
            })

        }
    }
    render() {

        return (
            <div style={{paddingTop: "100px"}}>

                <Alert stack={{ limit: 10, spacing: 50 }} />
                <br></br>
                <button
                    type="button"
                    onClick={this.Show_logic}
                    style={{ float: "right" }}
                    className="btn btn-outline-danger"
                >
                    {" "}
                    Show Logic{" "}
                </button>
                <h1><strong>Knight vs Knight</strong></h1>
                <br/>
                <p>
                A game of chess but there are only Knights! A player makes their move by placing their knight on the board. A valid move is one in which the position chosen by the player to place their knight is not in limbo (position is not occupied or under attack by another knight). The player who fails to complete their move loses.
                </p>
                <br/>{
                    (() => {

                        if (this.state.stage == 1) {
                            return (<div>
                                <br></br>
                                <div class="text-logic">Choose the number of rows and columns of the chessboard to play.</div>
                                <br></br>
                                <div style={{ top: '10px', position: 'relative', alignItems: 'center' }}>
                                    {Array.from({ length: 8 }, (_, i) => i + 1).map((e) => {
                                        return <button className="comp-4-btn" onClick={
                                            () => {
                                                let temp = new Array(e).fill(new Array(e).fill(0));

                                                // console.log(temp);
                                                for (let i = 0; i < e; i++) {
                                                    this.array.push([]);
                                                    for (let j = 0; j < e; j++) {
                                                        this.array[i].push(i * 8 + j);
                                                    }
                                                }

                                                this.setState({
                                                    number: e,
                                                    barr: temp.slice(),
                                                    available: new Array(e).fill(new Array(e).fill(1)),
                                                    stage: 2,
                                                })


                                            }
                                        }>{e}</button>
                                    })}
                                </div>

                            </div>)

                        }
                        else if (this.state.stage == 2) {
                            return (
                                <div>
                                <div class="text-logic">Choose to play against the computer or another player!</div>
                                <br/><br/>

                                    <button className={`btn ${this.state.dplayer == false ? 'btn-warning' : 'btn-outline-warning'}`}
                                        style={{ borderRadius: '0' }}
                                        onClick={() => {
                                            this.setState({
                                                dplayer: false,
                                            })
                                        }}>Against Machine</button>
                                    <button className={`btn ${this.state.dplayer == true ? 'btn-warning' : 'btn-outline-warning'}`}
                                        style={{ borderRadius: '0' }}

                                        onClick={() => {
                                            this.setState({
                                                dplayer: true,
                                            })
                                        }}>Against Player(Yourself)</button>
                                    <br></br>
                                    <br></br>
                                    <button onClick={() => { this.setState({ stage: 3 }) }} style={{
                                        border: 'none',
                                        backgroundColor: 'white',
                                    }} className='comp-3-btn'>
                                        <img src={require('../assets/right-arrow.png')} width='30px' style={{ margin: "5px" }}></img>
                                        Next
                                </button>
                                </div>
                            )
                        }
                        else if (this.state.stage == 3) return (
                            <div>
                                <br/>
                                <p>
                                    Try to make a valid move by choosing one of the positions available on the board
                                </p>
                                <br/>
                                <h5>{(this.state.turn == 1) ? "Blue's Turn" : "Gold's Turn"}</h5>
                                <br></br>
                                {

                                    this.array.map((e, i) => {
                                        return (
                                            <div style={{ margin: '0px' }}>
                                                {
                                                    e.map((n, j) => {
                                                        return (
                                                            <button onClick={() => {
                                                                if (this.state.available[i][j] != 1) {
                                                                    Alert.error("This cell is in limbo!!!", {
                                                                        offset: 100,
                                                                        beap: true,
                                                                    })
                                                                    return;
                                                                }
                                                                this.doIt(i, j);


                                                            }} style={
                                                                {
                                                                    padding: '0px',
                                                                    backgroundColor: (i + j) % 2 == 0 ? 'black' : 'white',
                                                                    minWidth: '80px',
                                                                    minHeight: '80px',
                                                                    margin: '1px',
                                                                    border: '1px',
                                                                    borderColor: 'black',

                                                                }
                                                            } >
                                                                {
                                                                    (() => {
                                                                        if ( this.state.barr[i][j] != 0) {
                                                                            return <div><img src={require(`../assets/${this.state.barr[i][j] == 1 ? 'blue-knight' : 'golden-knight'}.png`)} width="50px" height="50px" style={{ margin: '0px' }}></img></div>;
                                                                        } else {
                                                                            if(this.state.hint && this.state.available[i][j]==1){
                                                                                return <div><img src={require(`../assets/gold.jpg`)} width="80px" height="80px" style={{ margin: '0px' }}></img></div>;

                                                                            }

                                                                           else return <div><img src={require(`../assets/${(i + j) % 2 == 1 ? 'white' : 'black'}.jpg`)} width="80px" height="80px" style={{ margin: '0px' }}></img></div>;
                                                                        }

                                                                    })()


                                                                }

                                                            </button>
                                                        )


                                                    })



                                                }

                                            </div>
                                        );


                                    })
                                }
                                <br></br>
                                <button className={`btn ${this.state.hint == true ? 'btn-warning' : 'btn-outline-warning'}`}
                                 onClick={()=>{
                                     this.setState({
                                         hint: !this.state.hint,
                                     })
                                 }}>Hint</button>
                            </div>

                        )
                        else return <div>{this.state.win} Won! <br></br><br></br>
                            <button className="btn btn-outline-danger" onClick={() => {
                                window.location.reload();

                            }}>Play again</button>
                        </div>

                    })()
                }

            </div>
        )
    }
}