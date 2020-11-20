import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import '../home.css';
import { wrap } from 'module';
// import * as contentful from 'contentful'


export default class PLAY extends Component {
  componentDidMount() {
    this.props.setActive(1);

  }

constructor(props){

  super(props);
  this.Game4 = this
  .Game4
  .bind(this);
}



  Game1 = () => {
    this.props.history.push({
      pathname: '/Play/Game1/'
    });
  }
  Game2 = () => {
    this.props.history.push({
      pathname: '/Play/Game2/'
    });
  }
  Game3 = () => {
    this.props.history.push({
      pathname: '/Play/Game3/'
    });
  }
  Game4 = () => {
    this.props.history.push({
      pathname: '/Play/Game4/'
    });
  }
  Game5 = () => {
    this.props.history.push({
      pathname: '/Play/Game5/'
    });
  }
  Game6 = () => {
    this.props.history.push({
      pathname: '/Play/Game6/'
    });
  }
  render() {
    return (
      <div style={{ paddingTop: '100px' }}>

        {/* <div>
          <ol className="navbar-nav mr-auto">
            <li>Game1<button type="button" style={{ float: 'right' }} onClick={this.Game1}>Play</button></li>
            <li >0-1 Game<button type="button" style={{ float: 'right' }} onClick={this.Game2}>Play</button></li>
            <li >Game3<button type="button" style={{ float: 'right' }} onClick={this.Game3}>Play</button></li>
            <li >Game4<button type="button" style={{ float: 'right' }} onClick={this.Game4}>Play</button></li>
            <li >Game5<button type="button" style={{ float: 'right' }} onClick={this.Game5}>Play</button></li>
          </ol>
        </div> */}
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="card play-card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={require('../assets/27cards.jpg')} onClick={this.Game4} alt="27 cards trick" />
            <div className="card-body">
              <h5 className="card-title">27 Cards</h5>
              <p className="card-text">Keep track of your card in the deck while we try to guess it!</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-danger" onClick={()=>{
                this.props.history.push({
                  pathname: '/Play/Game4/'
                });
              }}>Play</button>
              {/* <div className='play-play'>
                <a href='/Play' onClick={this.Game4}>
                  <p>
                    <span className='bg'></span>
                    <span className='base'></span>
                    <span className='text'>Play</span>
                  </p>
                </a>
              </div> */}
            </div>
          </div>
          <div className="card play-card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={require('../assets/chinese.jpg')} onClick={this.Game1} alt="Chinese Remainder" />
            <div className="card-body">
              <h5 className="card-title">Chinese Remainder</h5>
              <p className="card-text">Rotate either of the decks fixed number of times and let the magic unfold!!</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-danger" onClick={this.Game1}>Play</button>
            </div>
          </div>
          <div className="card play-card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={require('../assets/king-queen.jpg')} onClick={this.Game2} alt="Zero-One" />
            <div className="card-body" >
              <h5 className="card-title">King-Queen</h5>
              <p className="card-text">Remove king-queen pairs one by one to see who wins!!! </p>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-danger" onClick={this.Game2}>Play</button>
            </div>
          </div>
          <div className="card play-card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={require('../assets/hamiltonian.jpg')} onClick={this.Game3} alt="Hamiltonian" />
            <div className="card-body">
              <h5 className="card-title">Square Sum</h5>
              <p className="card-text">Arrange the numbers such that any adjacent numbers' sum is a perfect square!! </p>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-danger" onClick={this.Game3}>Play</button>
            </div>
          </div>
          <div className="card play-card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={require('../assets/kruskal.jpg')} onClick={this.Game5} alt="Kruskal" />
            <div className="card-body">
              <h5 className="card-title">Kruskal Count Card</h5>
              <p className="card-text">Walk your path and wait for the end!</p>
              <p className="card-text">Your mind will be blown!!</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-danger" onClick={this.Game5}>Play</button>
            </div>
          </div>
          <div className="card play-card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={require('../assets/knight.jpg')} onClick={this.Game6} alt="Kruskal" />
            <div className="card-body">
              <h5 className="card-title">Knight vs Knight</h5>
              <p className="card-text">Place the knights one by one to see who gets in limbo!! </p>
              <p className="card-text"></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-danger" onClick={this.Game6}>Play</button>
            </div>
          </div>
        </div>


      </div>

    )
  }
}