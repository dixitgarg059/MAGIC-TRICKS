import React, { Component } from 'react';
import axios from 'axios';
import HAND from './hand.component';
let deck = Array.from({ length: 52 }, (_, i) => i + 1);
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
function numToBaseThree(n) {
    let l = []; let b = 9;
    for (let i = 0; i < 3; i++) {
        l.push(Math.floor((n / b)));
        n = n - (Math.floor((n / b)) * b);
        b /= 3;
    }
    l.reverse();
    console.log(l);
    return l;
}
export default class GAME4 extends Component {

    constructor(props) {

        super(props);
        this.state = {
            deck1: [],
            deck2: [],
            deck3: [],
            stage: 1,
            favNum: 0,
            cards: 27,
        }
        deck = shuffle(deck);
        deck = deck.slice(0, 27);
    }
    // Show_logic=() => {
    //       alert("UNLOCK LOGIC ??\n");
    //     this.props.history.push({
    //     pathname:'/Play/Game4/Logic'
    //   });
    // }
    selectDeck = e => {
        let arr = numToBaseThree(this.state.favNum - 1);
        let stateNum = this.state.stage - 3;
        let index = arr[stateNum];
        if (index == 0) {
            if (e == 1)
                deck = [...this.state.deck1, ...this.state.deck2, ...this.state.deck3];
            else if (e == 2)
                deck = [...this.state.deck2, ...this.state.deck1, ...this.state.deck3];
            else
                deck = [...this.state.deck3, ...this.state.deck2, ...this.state.deck1];
        }
        else if (index == 1) {
            if (e == 1)
                deck = [...this.state.deck2, ...this.state.deck1, ...this.state.deck3];
            else if (e == 2)
                deck = [...this.state.deck1, ...this.state.deck2, ...this.state.deck3];
            else
                deck = [...this.state.deck2, ...this.state.deck3, ...this.state.deck1];
        }
        else {
            if (e == 1)
                deck = [...this.state.deck3, ...this.state.deck2, ...this.state.deck1];
            else if (e == 2)
                deck = [...this.state.deck3, ...this.state.deck1, ...this.state.deck2];
            else
                deck = [...this.state.deck1, ...this.state.deck2, ...this.state.deck3];
        }
        let d1 = [], d2 = [], d3 = [];
        for (let i = 0; i < 27; i++) {
            (i % 3 == 0) ? d1.push(deck[i]) : (i % 3 == 1) ? d2.push(deck[i]) : d3.push(deck[i]);
        }
        this.setState({
            stage: this.state.stage + 1,
            deck1: d1,
            deck2: d2,
            deck3: d3,
        })

        console.log(deck);
        console.log(d1);
        console.log(d2);
        console.log(d3);
    }
    helper = (e) => {
        if (e - 1 < this.state.stage) return 'rgb(138, 241, 138)';
        else return 'grey';
    }
    render() {
        return (
            <div style={{paddingTop: "100px"}}>


                <h1>
                    <strong> 27 Card Trick</strong>
                </h1>
                <br></br>
                <div style={{ position: 'relative', height: '30px', width: '100%', }}>
                    <div style={{ marginTop: '10px', width: '100%', backgroundColor: 'rgb(206, 206, 206)', height: '10px', position: 'absolute' }}></div>
                    <div className={
                        `progressbar${this.state.stage - 1}`
                    } style={{ marginTop: '10px' }}></div>
                    {
                        [
                            'Choose a Card', 'Choose a number', '#1 Select deck', '#2 Select deck', '#3 Select deck', 'Our Guess'
                        ].map(
                            (str, index) => {
                                return <div className='circle' style={{
                                    left: `${index * 20}%`,
                                    backgroundColor: this.helper(index + 1),
                                    color: this.helper(index + 1),
                                }}>{str}</div>;

                            }
                        )
                    }


                </div>
                <div style={{ height: '60px' }}></div>

                {
                    (() => {

                        if (this.state.stage == 1) {
                            return <div>
                                <br></br>
                                <div class="text-logic">Pick a card from the deck given below and make sure to remember it!</div>
                                <br></br>
                                <button onClick={() => { this.setState({ stage: 2 }) }} style={{
                                    border: 'none',
                                    backgroundColor: 'white',
                                }} className='comp-3-btn'>
                                    <img src={require('../assets/right-arrow.png')} width='30px' style={{ margin: "5px" }}></img>
                                    Next
                                </button>
                                <div style={{ left: '400px', display: 'flex', position: 'static', alignItems: 'center' }}>
                                    <div style={{ width: '100px', height: '100px', left: '400px', position: 'relative' }}
                                    ><HAND hand={deck} width={150} margin={100} focused={-1} />
                                    </div>
                                </div>
                            </div>;
                        }
                        if (this.state.stage == 2) {
                            return <div>
                                <br></br>
                                <div class="text-logic">Click on your favorite number</div>
                                <br></br>
                                <div style={{ top: '10px', position: 'relative', alignItems: 'center' }}>
                                    {Array.from({ length: 27 }, (_, i) => i + 1).map((e) => {
                                        return <button className="comp-4-btn" onClick={
                                            () => {
                                                this.setState({
                                                    stage: 3,
                                                    favNum: e,
                                                    deck1: deck.slice(0, 9),
                                                    deck2: deck.slice(9, 18),
                                                    deck3: deck.slice(18, 27),
                                                })
                                            }
                                        }>{e}</button>
                                    })}
                                </div>
                            </div>
                        }
                        if (this.state.stage == 3 || this.state.stage == 4 || this.state.stage == 5) {
                            return <div>
                                <br></br>
                                <div class="text-logic">Choose the deck your card is present in.</div>
                                <br></br>
                                <div style={{
                                    fontSize: '30px',
                                    fontFamily: 'Alegreya Sans SC'
                                }}>Your Number: {this.state.favNum}</div>
                                <div style={{ position: "static", left: 0, display: "flex", flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                                    {
                                        [1, 2, 3].map(
                                            (e) => {
                                                let d = (e == 1) ? this.state.deck1 : (e == 2) ? this.state.deck2 : this.state.deck3;
                                                return <div>
                                                    <div style={{ width: '200px', height: '200px' }}>
                                                        <HAND hand={d} width={150} margin={100} focused={-1} straight={1} />
                                                    </div>
                                                    <div style={{ marginTop: "170px", marginLeft: "100px", marginBottom: "10px", position: "relative" }}>
                                                        <button className="btn btn-outline-light" onClick={
                                                            () => {
                                                                this.selectDeck(e)
                                                            }
                                                        }>
                                                            {/* <img src={require('../assets/cards.png')} width='40px'></img> */}
                                                            Select #{e}</button>
                                                    </div>
                                                </div>
                                            }
                                        )
                                    }

                                </div>
                            </div>

                        }
                        if (this.state.stage == 6) {
                            return <div style={{
                                position: 'relative',
                                left: '200px',
                                display: 'flex',
                                flexWrap: 'wrap'
                            }}>
                                <div style={{
                                    width: '400px',
                                    height: '500px'
                                }}>
                                    <HAND hand={deck} width={150} margin={100} focused={this.state.favNum} />
                                </div>
                                <span style={{ paddingLeft: "10em" }}></span>
                                <br />
                                <div class="text-logic">
                                    <br /> 
                                    Your card is: <br /> <img src={require(`../card_pics/${deck[this.state.favNum - 1]}.png`)} width="100px"></img><br></br><br />
                                    At the position {this.state.favNum} (Your Number) in the deck<br></br>
                                    <br></br>
                                    <button className='btn btn-outline-danger' onClick={
                                        () => {
                                            this.setState({
                                                stage: 1,
                                            })

                                        }
                                    }>Play Again</button>
                                    <button className='btn btn-outline-danger' style={{ marginLeft: '30px' }} onClick={
                                        () => {
                                            this.props.history.push({
                                                pathname: '/Play/Game4/Logic'
                                            });
                                        }
                                    }

                                    >Logic</button>
                                    <br/> <br/>
                                    <img src={require("../assets/magic.gif")} alt="magic-gif"/>
                                </div>
                            </div>
                        }
                    })()
                }
            </div>
        )
    }
}