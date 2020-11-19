import React, { Component } from 'react';
import axios from 'axios';
import Alert from 'react-s-alert';
import '../App.css';
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
            win : 0,

        }
        this.array = [];
        this.kng = [
            [2,1],
            [2,-1],
            [-2,1],
            [-2,-1],
            [1,2],
            [1,-2],
            [-1,-2],
            [-1,2],
            [0,0]
        ]
       


    }
    Show_logic = () => {
        if (!window.confirm("UNLOCK LOGIC ?")) return;
        this.props.history.push({
          pathname: "/Play/Game6/Logic",
        });
      };
    checkAv =tmp=>{
        for(let p = 0; p < this.state.number;p++){
            for(let q = 0; q< this.state.number;q++){
                if(tmp[p][q]==1) return true;
            }

        }
        return false;
    }
    render() {

        return (
            <div>
          
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
                <br></br>{
                    (() => {

                        if (this.state.stage == 1) {
                            return (<div>
                                <br></br>
                                <div class="text-logic">Click the number of rows and columns in the chess board</div>
                                <br></br>
                                <div style={{ top: '10px', position: 'relative', alignItems: 'center' }}>
                                    {Array.from({ length: 8 }, (_, i) => i + 1).map((e) => {
                                        return <button className="comp-4-btn" onClick={
                                            () => {
                                                let temp = new Array(e).fill(new Array(e).fill(0));
                                                
                                                console.log(temp);
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
                        else if(this.state.stage==2)return (
                            <div>
                                <br></br>
                                <h5>{(this.state.turn==1)?"Blue's Turn":"Gold's Turn"}</h5>
                                <br></br>
                                {

                                    this.array.map((e, i) => {
                                        return (
                                            <div style={{ margin: '0px' }}>
                                                {
                                                    e.map((n, j) => {
                                                        return (
                                                            <button onClick={() => {
                                                                if (this.state.barr[i][j] == 0) {
                                                                    if (this.state.available[i][j] != 1) {
                                                                        Alert.error("This cell is in limbo!!!", {
                                                                            offset: 100,
                                                                            beap: true,

                                                                        })
                                                                        return;
                                                                    }
                                                                    let temp = this.state.barr.slice();
                                                                    let line = temp[i].slice();
                                                                    line[j] = this.state.turn;
                                                                    temp[i] = line;
                                                                    let tmp = this.state.available.slice()

                                                                    this.kng.map(
                                                                        (ar)=>{
                                                                            let i_  = i + ar[0];
                                                                            let j_  = j + ar[1];
                                                                            if(i_>=0 && i_ < this.state.number && j_>=0 && j_<this.state.number){
                                                                                let ln = tmp[i_].slice();
                                                                                ln[j_]=0;
                                                                                tmp[i_]=ln;
                                                                            }
                    
                                                                        }
                                                                    )
                                                                    console.log(tmp);
                                                                    let trn = this.state.turn;
                                                                    
                                                                    this.setState({
                                                                        barr: temp.slice(),
                                                                        turn: (this.state.turn == 1) ? 2 : 1,
                                                                        available: tmp,
                                                                    })
                                                                    if(this.checkAv(tmp)==false){
                                                                        Alert.success(`${(trn==1)?"Blue":"Gold"} wins.`, {offset:100});
                                                                        this.setState({
                                                                            win:trn,
                                                                            stage:3
                                                                        })
                                                    
                                                                    }
                                                                  

                                                                }

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
                                                                        if (this.state.barr[i][j] != 0) {
                                                                            return <div><img src={require(`../assets/${this.state.barr[i][j] == 1 ? 'blue-knight' : 'golden-knight'}.png`)} width="50px" height="50px" style={{ margin: '0px' }}></img></div>;
                                                                        } else {
                                                                            return <div><img src={require(`../assets/${(i + j) % 2 == 1 ? 'white' : 'black'}.jpg`)} width="80px" height="80px" style={{ margin: '0px' }}></img></div>;
                                                                        }

                                                                    })()


                                                                }

                                                            </button>
                                                        )


                                                    })



                                                }
                                                {/* <br></br> */}
                                               
                                            </div>
                                        );


                                    })
                                }
                            </div>

                        )
                        else return <div>{(this.state.win==1)?"Blue":"Gold"} won. <br></br><br></br>
                        <button className="btn btn-outline-danger" onClick={()=>{
                            this.props.history.push({
                                pathname: '/Play/Game6/'
                              });

                        }}>Play again</button>
                        </div>

                    })()
                }

            </div>
        )
    }
}