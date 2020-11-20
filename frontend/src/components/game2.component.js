import React, { Component } from 'react';
import axios from 'axios';
import $ from "jquery";
import '../App.css';
import Alert from 'react-s-alert';
export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards1: [
                String(Math.floor(Math.random() * 2)),
                String(Math.floor(Math.random() * 2)),
                String(Math.floor(Math.random() * 2)),
                String(Math.floor(Math.random() * 2)),
                String(Math.floor(Math.random() * 2)),
                String(Math.floor(Math.random() * 2)),
                String(Math.floor(Math.random() * 2)),
                String(Math.floor(Math.random() * 2)),
                //  '0', '0', '1', '1', '0', '1', '1', '0'
            ],
            selected_indices: [],
            Player: "Player1",
            // cards2:"",
            total_count: 0,
            limit: 11,
            // hintArr:[null,null]
        
        queens:[
            require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 12}.png`),
            require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 12}.png`),
            require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 12}.png`),
            require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 12}.png`),
            require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 12}.png`),
            require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 12}.png`),
            require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 12}.png`),
            require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 12}.png`),
        ],
        kings:[
            require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 13}.png`),
            require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 13}.png`),
            require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 13}.png`),
            require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 13}.png`),
            require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 13}.png`),
            require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 13}.png`),
            require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 13}.png`),
            require(`../card_pics/${Math.floor(Math.random() * 4) * 13 + 13}.png`),

        ]
    }

    }
    componentDidMount() {
        $(".play").show();
        $(".loose").hide();
    }
    Show_logic = () => {
        if (!window.confirm("UNLOCK LOGIC ?"))
            return
        this.props.history.push({
            pathname: '/Play/Game2/Logic'
        });
    }
    Erase = () => {

        var arr = this.state.selected_indices.slice()

        if (arr.length != 2 || (this.state.cards1[arr[0]] == this.state.cards1[arr[1]])) {
            Alert.error("Invalid Move",
                {
                    beep: true,
                    offset: '100',
                    timeout: 1000
                });
           
            this.setState({
                selected_indices: [],
            })

            return;
        }

        Alert.success("Successfully Married off.", {
            beep: true,
            offset: '100',
            timeout: 1000
        })
        var cards2 = []
        for (var i = 0; i < this.state.cards1.length; i++) {
            if (arr.indexOf(i) == -1)
                cards2.push(this.state.cards1[i]);
        }
        console.log(arr);
        console.log(cards2);

        this.setState({ cards1: cards2, selected_indices: [] });
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
                    offset: '100',
                    timeout: 1000
                });
        else
            Alert.success("Player1 Wins",
                {
                    beep: true,
                    offset: '100',
                    timeout: 1000
                });

        window.location.reload();
    }

    render() {
        return (
            <div style={{paddingTop: "100px"}}>
                <Alert stack={{ limit: 10, spacing: 50 }} />

                <button type="button" onClick={this.Show_logic} style={{ float: 'right' }} className='btn btn-outline-danger'> Show Logic </button>


                <div className="container" style={
                    {
                        marginBottom: '25px',
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
                <div className="container" style={{ 
                    display: "flex", flexWrap: "wrap"
                     }}>
                    {this.state.cards1.map((char, index) => {
                        if (this.state.selected_indices.indexOf(index) != -1) {
                            return  <button style={{ border: 'none', backgroundColor:'transparent' }} onClick={() => {
                                if (this.state.selected_indices.indexOf(index) != -1)
                                    this.setState({
                                        selected_indices: [...this.state.selected_indices.slice(0,this.state.selected_indices.indexOf(index)),
                                            ...this.state.selected_indices.slice(this.state.selected_indices.indexOf(index)+1)
                                        
                                        ],
                                    })

                            }}>
                            <div className='kingqueen-card' class={`${index} kingqueen-card `} style={{ boxShadow: "0 0 20px yellow" }} >
                                <img src={char == '0' ? this.state.kings[index] : this.state.queens[index]} width="100px"></img>
                            </div></button>;
                        }
                        return (
                         

                            <button style={{ border: 'none', backgroundColor:'transparent' }} onClick={() => {
                                if (this.state.selected_indices.indexOf(index) == -1)
                                    this.setState({
                                        selected_indices: [...this.state.selected_indices, index],
                                    })

                            }}><div className='kingqueen-card' class={`${index} kingqueen-card`} >
                                    <img src={char == '0' ? this.state.kings[index] : this.state.queens[index]} width="100px"></img>
                                </div></button>
                        )
                    }
                    )}
                </div>


                <div className="container" style={
                    {
                        marginTop: '18px'
                    }
                }>
  
                    <ul className="navbar-nav mr-auto">
                        <li class="play"><button type="button" onClick={this.Erase} className='btn btn-outline-danger'>Marry them off</button></li>
                        <li class="loose"><button type="button" onClick={this.Loose} className='btn btn-outline-danger'>Finish</button></li>

                    </ul>
                    <br />
                    <button className='btn btn-warning' onClick={
                        () => {
                            for (let i = 1; i < this.state.cards1.length; i++) {
                                let a = this.state.cards1[i - 1];
                                let b = this.state.cards1[i];
                                if (a != b) {
                                    console.log(i - 1, i);
                                    this.setState({
                                        selected_indices: [i - 1, i],
                                    })
                                    break;
                                }


                            }

                        }
                    }>Hint</button>
                </div>
                <br />
                <br />

            </div>
        )
    }
}