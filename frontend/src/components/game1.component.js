import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 4,
            cards1: [1, 2, 3, 4],
            cards2: [4, 3, 2, 1],
            total_count: 0,
            limit: 11,
            str: "NUMBERPHILE"
        }
    }
    getGCD=(a,b)=>{
        if(a>b) return this.getGCD(b,a);
        if(a==0) return b;
        return this.getGCD(b%a,a);
    }
    getMagicNumber=n=>{
        let lcm = 1;
        for(let i = 2;i<n;i++){
            lcm = (lcm * i)/(this.getGCD(lcm,i));  
        }
        return lcm-1;

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
    updateNumber=n=>{


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
            alert("Finished Shuffling,you can see first element of both are " + String(this.state.cards1[0]))

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
            alert("Finished Shuffling,you can see first element of both are " + String(this.state.cards1[0]))
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
            <div className='comp-2-main'>
                <div style={{}}>Rotate either of the decks using the left arrows in any order until the letters of the word {this.state.str} are all used up and let the magic unfold.</div>

                <button className='logic-btn' type="button" onClick={this.Show_logic} style={{ float: 'right' }} > Show Logic </button>
                <div>

                    <div className='comp-2-set'>
                        <span>
                            <button className="comp-2-btn" onClick={this.Shuffle_left}>
                                <img src={require(`../assets/left-arrow.png`)} width="30px"></img>
                            </button>
                        </span>
                        <div className='comp-2-card-set'>
                            {this.state.cards1.map((e,index) => {
                                let path = require(`../card_pics/${e}.png`);
                                if(index==0)
                                return  <div className='comp-2-card-first'>
                                <img src={path} key={e} alt={e} width='100px'></img>
                            </div>;
                                return <div className='comp-2-card'>
                                    <img src={path} key={e} alt={e} width='100px'></img>
                                </div>;
                            })}
                        </div>
                    </div>
                    <div className='comp-2-set'>
                        <span>
                            <button className="comp-2-btn" onClick={this.Shuffle_right}>
                                <img src={require(`../assets/left-arrow.png`)} width="30px"></img>
                            </button>
                        </span>
                        <div className='comp-2-card-set'>
                            {this.state.cards2.map((e,index) => {
                                let path = require(`../card_pics/${e}.png`);
                                if(index==0)
                                return  <div className='comp-2-card-first'>
                                <img src={path} key={e} alt={e} width='100px'></img>
                            </div>;
                                return <div className='comp-2-card'>
                                    <img src={path} key={e} alt={e} width='100px'></img>
                                </div>;
                            })}
                        </div>
                    </div>


                    <div style={{fontSize:60,fontFamily:'Alegreya Sans SC'}}>
                        <span style={{color:"red"}}>{this.state.str.substr(0,this.state.total_count)}</span>
                        <span>{this.state.str.substr(this.state.total_count)}</span>
                    </div>
                    
                </div>
                <div>

                </div>
                
            </div >
        )
    }
}