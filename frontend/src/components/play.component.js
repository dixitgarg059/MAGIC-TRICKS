import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { wrap } from 'module';
// import * as contentful from 'contentful'


export default class PLAY extends Component {


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
      <div>

        {/* <h2> Here are the list of some awesome card games you'd enjoy !! </h2> */}
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
            <img className="card-img-top" src={require('../assets/27cards.jpg')} alt="27 cards trick" />
            <div className="card-body">
              <h5 className="card-title">27 Cards</h5>
              <p className="card-text">Choose the decks your card is in, while we guess your card!</p> 
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-danger" onClick={this.Game4}>Play</button>
            </div>
          </div>
          <div className="card play-card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={require('../assets/chinese.jpg')} alt="Chinese Remainder" />
            <div className="card-body">
              <h5 className="card-title">Chinese Remainder</h5>
              <p className="card-text">Rotate either of the decks fixed number of times and let the magic unfold!!</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-danger" onClick={this.Game1}>Play</button>
            </div>
          </div>
          <div className="card play-card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={require('../assets/king-queen.jpg')} alt="Zero-One" />
            <div className="card-body" >
              <h5 className="card-title">King-Queen</h5>
              <p className="card-text">Remove king-queen pairs one by one to see who wins!!! </p>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-danger" onClick={this.Game2}>Play</button>
            </div>
          </div>
          <div className="card play-card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={require('../assets/hamiltonian.jpg')} alt="Hamiltonian" />
            <div className="card-body">
              <h5 className="card-title">Square Sum</h5>
              <p className="card-text">Arrange the numbers such that any adjacent numbers' sum is a perfect square!! </p>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-danger" onClick={this.Game3}>Play</button>
            </div>
          </div>
          <div className="card play-card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={require('../assets/kruskal.jpg')} alt="Kruskal" />
            <div className="card-body">
              <h5 className="card-title">Kruskal</h5>
              <p className="card-text">!!! SPOILER ALERT !!! </p>
              <p className="card-text">You will be mind blown!!! </p>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-danger" onClick={this.Game5}>Play</button>
            </div>
          </div>
          <div className="card play-card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={require('../assets/knight.jpg')} alt="Kruskal" />
            <div className="card-body">
              <h5 className="card-title">Knight vs Knight</h5>
              <p className="card-text">Place the knights one by one to see who gets in limbo!!! </p>
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