import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import HAND from './hand.component';
import { PassThrough } from 'stream';
import Alert from 'react-s-alert';
export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 4,
            cards1: [1, 2, 3, 4],
            cards2: [4, 3, 2, 1],
            total_count: 0,
            limit: 11,
            str: "ABRACADABRA"
        }
    }
    getGCD = (a, b) => {
        if (a > b) return this.getGCD(b, a);
        if (a == 0) return b;
        return this.getGCD(b % a, a);
    }
    getMagicNumber = n => {
        let lcm = 1;
        for (let i = 2; i < n; i++) {
            lcm = (lcm * i) / (this.getGCD(lcm, i));
        }
        return lcm - 1;

    }
    // componentDidMount() {

    //     // axios.get('http://localhost:4000/a')
    //     // .then(response => {
    //     //     this.setState({cards1: response.data});
    //     //     axios.get('http://localhost:4000/b')
    //     //     .then(response => {
    //     //         this.setState({cards2: response.data});
    //     //     })
    //     // })
    // }
    updateNumber = n => {


    }
    Show_logic = () => {
        if (!window.confirm("UNLOCK LOGIC ?"))
            return
        this.props.history.push({
            pathname: '/Play/Game1/Logic'
        });
    }
    Shuffle_left = () => {
        this.setState({ total_count: this.state.total_count + 1 })
        if (this.state.total_count >= this.state.limit) {
            Alert.success("Finished Shuffling,you can see first element of both are " + String(this.state.cards1[0]),{
                offset:100,
                beep:true,
                timeout:3000
            })

            this.state.cards1.shift();
            this.state.cards2.shift();
            this.setState({ total_count: 0 });
            if (this.state.cards1.length == 1) {
                let check = window.confirm("Game Over \n Play again? ")
                if (check) {
                    this.setState({ cards1: [1, 2, 3, 4], cards2: [4, 3, 2, 1], total_count: 0, limit: 11 })
                }
                else {
                    this.props.history.push({ pathname: '/' });
                }
            }
            return;
        }
        else {
            this.state.cards1.push(this.state.cards1.shift())
        }
    }
    Shuffle_right = () => {
        this.setState({ total_count: this.state.total_count + 1 })
        if (this.state.total_count >= this.state.limit) {
            Alert.success("Finished Shuffling,you can see first element of both are " + String(this.state.cards1[0]),{
                offset:100,
                beep:true,
                timeout:3000
            })
            this.state.cards1.shift();
            this.state.cards2.shift();
            this.setState({ total_count: 0 });
            if (this.state.cards1.length == 1) {
                if (window.confirm("Game Over !! \n Play Again ? ")) {

                    this.setState({ cards1: [1, 2, 3, 4], cards2: [4, 3, 2, 1], total_count: 0, limit: 11 })
                }
                else {
                    this.props.history.push({ pathname: '/' });
                }
            }

            return;
        }
        else {
            this.state.cards2.push(this.state.cards2.shift())
        }
    }
    render() {
        return (
            <div className='comp-2-main' style={{paddingTop: "100px"}}>
                <Alert stack={{limit: 10, spacing: 50}} html={true}/>

                <br></br>
                <button className='btn btn-outline-danger' type="button" onClick={this.Show_logic} style={{ float: 'right' }} > Show Logic </button>
                <h1><strong>Chinese Remainder</strong></h1>
                <br></br>

                <div class="text-logic" >Rotate either of the decks using the left arrows in any order until the letters of the word {this.state.str} are all used up and let the magic unfold.</div>
<br></br>
                <div>
                    <br></br>
                    <div className='comp-2-set'>
                        <span>
                            <button className="comp-2-btn" onClick={this.Shuffle_left}>
                                <img src={require(`../assets/left-arrow.png`)} width="30px"></img>
                            </button>
                        </span>
                        <div className='comp-2-card-set' style={{
                            width: '100px',
                            height: '150px',
                            position: 'relative',
                            left: '100px'
                        }}>
                          
                            <HAND hand={reversedArray(this.state.cards1)} width={100} margin={10} focused={this.state.cards1.length} />
                        </div>
                    </div>
                    <br></br>
                    <div className='comp-2-set'>
                        <span>
                            <button className="comp-2-btn" onClick={this.Shuffle_right}>
                                <img src={require(`../assets/left-arrow.png`)} width="30px"></img>
                            </button>
                        </span>
                        <div className='comp-2-card-set' style={{
                            width: '100px',
                            height: '150px',
                            position: 'relative',
                            left: '100px'
                        }}>
                         
                            <HAND hand={reversedArray(this.state.cards2)} width={100} margin={10} focused={this.state.cards2.length} />

                        </div>
                    </div>
                    <br></br>


                    <div style={{ fontSize: 60, fontFamily: 'Alegreya Sans SC' }}>
                        <span style={{ color: "red" }}>{this.state.str.substr(0, this.state.total_count)}</span>
                        <span>{this.state.str.substr(this.state.total_count)}</span>
                    </div>

                </div>
                <div>

                </div>

            </div >
        )
    }
}
function reversedArray(arr){
    let brr = arr.slice();
    brr.reverse();
    return brr;
}