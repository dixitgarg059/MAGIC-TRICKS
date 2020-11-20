import React, {Component} from 'react';
import axios from 'axios';
import _img from '../assets/home.jpg';
import '../App.css';
export default class ABOUTUS extends Component {
    
    componentDidMount() {
        this.props.setActive(2)
    }
   
    render() {
        return (
            <div style={{ paddingTop: '100px' }}>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
            <a href="https://github.com/amul-agrawal">
          <div className="card play-card" style={{ width: "18rem" }}> 
            <img className="card-img-top" src="https://avatars1.githubusercontent.com/u/54325353?s=400&u=5fc77d30fa2f733750aeb9f0d8f6b6c23b6d6ee8&v=4" 
            alt="27 cards trick" />
            <div className="card-body">
              <h5 className="card-title">Amul Agrawal</h5>
              <p className="card-text">2019101113</p>
            </div>
            <div className="card-footer">
            </div>
          </div>
          </a>
          <a href="https://github.com/ace-spadez">
          <div className="card play-card" style={{ width: "18rem" }}> 
            <img className="card-img-top" src="https://avatars0.githubusercontent.com/u/43886544?s=460&u=c46a93aba5ca2cf646dfec3045ff5af247eac717&v=4" 
            alt="27 cards trick" />
            <div className="card-body">
              <h5 className="card-title">Anvay Karmore</h5>
              <p className="card-text">2019101107</p>
            </div>
            <div className="card-footer">
            </div>
          </div>
          </a>
          <a href="https://github.com/dixitgarg059">
          <div className="card play-card" style={{ width: "18rem" }}> 
            <img className="card-img-top" src="https://avatars2.githubusercontent.com/u/47675767?s=400&u=2310f3de0951d7b0df76e857fcc05a2898430b5c&v=4" 
            alt="27 cards trick" height="285px"/>
            <div className="card-body">
              <h5 className="card-title">Dixit Kumar Garg</h5>
              <p className="card-text">2018101077</p>
            </div>
            <div className="card-footer">
            </div>
          </div>
          </a>
          <a href="https://github.com/snehalkumar5">
          <div className="card play-card" style={{ width: "18rem" }}> 
            <img className="card-img-top" src="https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.fit-760w.jpg" 
            alt="27 cards trick" height="285px"/>
            <div className="card-body">
              <h5 className="card-title">Snehal Kumar</h5>
              <p className="card-text">2019101003</p>
            </div>
            <div className="card-footer">
            </div>
          </div>
          </a>
          <a href="https://github.com/MihirBani2000">
          <div className="card play-card" style={{ width: "18rem" }}> 
            <img className="card-img-top" src="https://scontent.fbho3-1.fna.fbcdn.net/v/t1.0-9/67550878_100179631325008_1622195695861628928_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=-dAkl4qmg3IAX-FwVwP&_nc_ht=scontent.fbho3-1.fna&oh=de11a96cb9619c6212e6bd115bf058be&oe=5FDF8C1F" 
            alt="27 cards trick" />
            <div className="card-body">
              <h5 className="card-title">Mihir Bani</h5>
              <p className="card-text">2019113003</p>
            </div>
            <div className="card-footer">
            </div>
          </div>
          </a>
          <a href="https://github.com/naman632">
          <div className="card play-card" style={{ width: "18rem" }}> 
            <img className="card-img-top" src="https://scontent.famd5-1.fna.fbcdn.net/v/t1.0-9/69455318_120546009278447_538058135449894912_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=40jsJdiyoisAX_t_EKe&_nc_ht=scontent.famd5-1.fna&oh=1f97888df39c1564ce8f4a2aac3a2432&oe=5FDBDE3F" 
            alt="27 cards trick" />
            <div className="card-body">
              <h5 className="card-title">Naman Verma</h5>
              <p className="card-text">2019101066</p>
            </div>
            <div className="card-footer">
            </div>
          </div>
          </a>
        </div>
      </div>
        )
    }
}