import React, { Component } from 'react';
import axios from 'axios';
import $ from "jquery";
import '../App.css';
import Alert from 'react-s-alert';
var lt = new Array(11).fill(false);
export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards1: ['1', '0', '0', '1', '1', '0', '1', '1', '0'],
            selected_indices: [],
            Player: "Player1",
            // cards2:"",
            total_count: 0,
            limit: 11
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
        $(".0").on('click', function (event) {
            $(event.delegateTarget).css("background-color", "blue");
            $(event.delegateTarget).css("box-shadow", "0 0 20px yellow");
            lt[0] = true;
        });
        $(".1").on('click', function (event) {
            $(event.delegateTarget).css("background-color", "blue")

            $(event.delegateTarget).css("box-shadow", "0 0 20px yellow");
            lt[1] = true;
        });
        $(".2").on('click', function (event) {
            $(event.delegateTarget).css("background-color", "blue");

            $(event.delegateTarget).css("box-shadow", "0 0 20px yellow");
            lt[2] = true;
        });
        $(".3").on('click', function (event) {
            $(event.delegateTarget).css("background-color", "blue");

            $(event.delegateTarget).css("box-shadow", "0 0 20px yellow");
            lt[3] = true;
        });
        $(".4").on('click', function (event) {
            $(event.delegateTarget).css("background-color", "blue");

            $(event.delegateTarget).css("box-shadow", "0 0 20px yellow");
            lt[4] = true;
        });
        $(".5").on('click', function (event) {
            $(event.delegateTarget).css("background-color", "blue");

            $(event.delegateTarget).css("box-shadow", "0 0 20px yellow");
            lt[5] = true;
        });
        $(".6").on('click', function (event) {
            $(event.delegateTarget).css("background-color", "blue");

            $(event.delegateTarget).css("box-shadow", "0 0 20px yellow");
            lt[6] = true;
        });
        $(".7").on('click', function (event) {
            $(event.delegateTarget).css("background-color", "blue");

            $(event.delegateTarget).css("box-shadow", "0 0 20px yellow");
            lt[7] = true;
        });
        $(".8").on('click', function (event) {
            $(event.delegateTarget).css("background-color", "blue");

            $(event.delegateTarget).css("box-shadow", "0 0 20px yellow");
            lt[8] = true;
        });
        $(".9").on('click', function (event) {
            $(event.delegateTarget).css("background-color", "blue");

            $(event.delegateTarget).css("box-shadow", "0 0 20px yellow");
            lt[9] = true;
        });

    }
    Show_logic = () => {
        if (!window.confirm("UNLOCK LOGIC ?"))
            return
        this.props.history.push({
            pathname: '/Play/Game2/Logic'
        });
    }
    Erase = () => {

        var arr = []
        for (var i = 0; i < 10; i++) {
            if (lt[i]) {
                arr.push(i);
            }
        }
        if (arr.length != 2 || (arr[0] != arr[1] - 1) || (this.state.cards1[arr[0]] == this.state.cards1[arr[1]])) {
            Alert.error("Invalid Move",
            {
                beep: true,
                offset:'100',
                timeout:1000
            });
            for (var i = 0; i < 10; i++) {
                $("." + String(i)).css("background-color", "white")
                $("." + String(i)).css("box-shadow", "none");
                $("." + String(i)).css("transform", "none");
                // $("." + String(i)).addClass("kingqueen-card");

                lt = new Array(11).fill(false);

            }
            return;
        }
        Alert.success("Successfully Married off.",{
            beep: true,
            offset:'100',
            timeout:1000
        })
        var cards2 = []
        for (var i = 0; i < this.state.cards1.length; i++) {
            if (!lt[i])
                cards2.push(this.state.cards1[i]);
            else {

                $("." + String(i)).css("background-color", "white")
                $("." + String(i)).css("transform", "none");
                $("." + String(i)).css("box-shadow", "none");
                // $("." + String(i)).addClass("kingqueen-card");


            }
        }

        this.setState({ cards1: cards2 });
        lt = new Array(11).fill(false);
        if (this.state.Player == "Player1") {
            this.setState({ Player: "Player2" });
        }
        else
            this.setState({ Player: "Player1" });
        var possible = false;
        for (var i = 0; i < cards2.length - 1; i++) {
            if (cards2[i] != cards2[i + 1]) {
                possible = true;
                break;
            }
        }
        if (possible)
            return;
        $(".play").hide();
        $(".loose").show();
    }
    Loose = () => {

        if (this.state.Player == "Player1")
        Alert.success("Player2 Wins",
        {
            beep: true,
            offset:'100',
            timeout:1000
        });
        else
            Alert.success("Player1 Wins",
            {
                beep: true,
                offset:'100',
                timeout:1000
            });

        // this.props.history.push({pathname:'/Play/Game2'})
        window.location.reload();
    }

    render() {
        return (
            <div>
                <Alert stack={{limit: 10, spacing: 50}} />

                <button type="button" onClick={this.Show_logic} style={{ float: 'right' }} className='btn btn-outline-danger'> Show Logic </button>


                <div className="container" style={
                    {
                        marginBottom: '25px',
                        //   backgroundColor:'white',
                        //   color:'white'
                        // borderRadius:'10px',
                        // boxShadow:'0 0 5px black'
                    }
                }>
                    <br></br>
                    <h1><strong> King-Queen Game</strong></h1>
                    <br></br>
                    <p>
                    Player1 and Player2 are playing a game <br></br>
                    There are some kings and queens in the order given below. <br></br>
                    Player1 and Player2 make alternating moves: Player1 makes the first move, Player2 makes the second move,
                    Player1 makes the third one, and so on. During each move, the current player must choose an adjacent pair of king and queen and marry them off.
                <br></br>
                    If a player can't make any move, they lose. Both players play optimally.
                    </p>
    
            </div>



                <div className="container" style={
                    {
                        marginBottom: '18px'
                    }
                }>
                    {
                        (() => {
                            if (this.state.Player === "Player2")
                                return <img src={require('../assets/man.png')} width='40px'></img>
                            else return <img src={require('../assets/woman.png')} width='40px'></img>

                        })()
                    }
                    {this.state.Player}'s Turn
            </div>
                <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
                    {this.state.cards1.map((char, index) => (
                        //   <span class = {index} style={
                        //     {
                        //      border: '1px solid black',
                        //      padding: '11.4px 12px',

                        //     }
                        //   } > {char} </span>
                        <div className='kingqueen-card' class={`${index} kingqueen-card`} >
                            <img src={char == '0' ? require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 12}.png`) : require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 13}.png`)} width="100px"></img>
                        </div>
                    ))}
                </div>


                <div className="container" style={
                    {
                        marginTop: '18px'
                    }
                }>
                    {/* <nav className="navbar navbar-expand-lg navbar-light "> */}
                    {/* <div className="collapse navbar-collapse"> */}
                    <ul className="navbar-nav mr-auto">
                        <li class="play"><button type="button" onClick={this.Erase} className='btn btn-outline-danger'>Marry them off</button></li>
                        <li class="loose"><button type="button" onClick={this.Loose} className='btn btn-outline-danger'>Finish</button></li>

                    </ul>
                    {/* </div> */}
                    {/* </nav> */}
                </div>
            </div>
        )
    }
}