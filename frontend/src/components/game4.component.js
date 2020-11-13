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
            if(e==1)
            deck = [...this.state.deck1, ...this.state.deck2, ...this.state.deck3];
            else if(e==2)
            deck = [...this.state.deck2, ...this.state.deck1, ...this.state.deck3];
            else
            deck = [...this.state.deck3, ...this.state.deck2, ...this.state.deck1];
        }
        else if (index == 1) {
            if(e==1)
            deck = [...this.state.deck2, ...this.state.deck1, ...this.state.deck3];
            else if(e==2)
            deck = [...this.state.deck1, ...this.state.deck2, ...this.state.deck3];
            else
            deck = [...this.state.deck2, ...this.state.deck3, ...this.state.deck1];
        }
        else {
            if(e==1)
            deck = [...this.state.deck3, ...this.state.deck2, ...this.state.deck1];
            else if(e==2)
            deck = [...this.state.deck3, ...this.state.deck1, ...this.state.deck2];
            else
            deck = [...this.state.deck1, ...this.state.deck2, ...this.state.deck3];
        }
        let d1 = [], d2 = [], d3 = [];
        for (let i = 0; i < 27; i++) {
            (i%3==0)?d1.push(deck[i]):(i%3==1)?d2.push(deck[i]):d3.push(deck[i]);
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
    render() {
        return (
            <div>


                <h1>
                    27 Card Trick
            </h1>
                {
                    (() => {

                        if (this.state.stage == 1) {
                            return <div>
                                <div>Select a card from the deck given below and keep it in mind.</div>
                                <div><HAND hand={deck} width={150} margin={100} focused={-1} /></div>
                                <button onClick={() => { this.setState({ stage: 2 }) }}>Next</button>
                            </div>;
                        }
                        if (this.state.stage == 2) {
                            return <div>
                                <div>Click on any number from bellow</div>
                                {Array.from({ length: 27 }, (_, i) => i + 1).map((e) => {
                                    return <button className="comp-3-btn" onClick={
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
                        }
                        if (this.state.stage == 3 || this.state.stage == 4 || this.state.stage == 5) {
                            return <div>
                                <div>Selected Number: {this.state.favNum}</div>
                                <div style={{ position: "static", left: 0, display: "flex" }}>
                                    {
                                        [1, 2, 3].map(
                                            (e) => {
                                                let d = (e == 1) ? this.state.deck1 : (e == 2) ? this.state.deck2 : this.state.deck3;
                                                return <div>
                                                    <div style={{ width: 200, height: 200, margin: 50 }}>
                                                        <HAND hand={d} width={150} margin={100} focused={-1} />
                                                    </div>
                                                    <div style={{ marginTop: "150px", marginLeft: "50px" }}>
                                                        <button className="select-btn" onClick={
                                                            () => {
                                                                this.selectDeck(e)
                                                            }
                                                        }>SELECT</button>
                                                    </div>
                                                </div>
                                            }
                                        )
                                    }

                                </div>
                            </div>

                        }
                        if (this.state.stage == 6) {
                            return <div>
                                <HAND hand={deck} width={150} margin={100} focused={this.state.favNum} />
                            </div>
                        }
                    })()
                }
            </div>
        )
    }
}