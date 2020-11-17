import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"
import PLAY from './components/play.component'
import WELCOME from './components/welcome.component'
import GAME1 from './components/game1.component'
import GAME2 from './components/game2.component'
import GAME3 from './components/game3.component'
import GAME4 from './components/game4.component'
import GAME5 from './components/game5.component'

import LOGIC1 from './components/logic1.component'
import LOGIC2 from './components/logic2.component'
import LOGIC3 from './components/logic3.component'
import LOGIC4 from './components/logic4.component'
function App() {

  const [active,setActive] = useState('');



  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-xl navbar-dark fixed-top" style={{ backgroundColor: 'rgb(40,40,40)' }}>

          <div className="navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className={`nav-item nav-link ${active==0?"active":''}`} onClick={()=>{
                setActive(0);
              }}>
                {/* <img src={require('./assets/home.png')} width="20px"></img> */}
              Home</Link>
              <Link to="/Play" className={`nav-item nav-link ${active==1?"active":''}`} onClick={()=>{
                setActive(1);
              }}>Play</Link>
              <a className="nav-item nav-link" href="#">About us</a>
            </div>
          </div>
        </nav>
          <br />
          <Route path="/" exact component={WELCOME} />
        <div className="container" style={{ paddingTop: '50px' }}>
          <Route path="/Play" exact component={PLAY} />
          <Route path="/Play/Game1" exact component={GAME1} />
          <Route path="/Play/Game2" exact component={GAME2} />
          <Route path="/Play/Game3" exact component={GAME3} />
          <Route path="/Play/Game4" exact component={GAME4} />
          <Route path="/Play/Game5" exact component={GAME5} />
          <Route path="/Play/Game1/Logic" exact component={LOGIC1} />
          <Route path="/Play/Game2/Logic" exact component={LOGIC2} />
          <Route path="/Play/Game3/Logic" exact component={LOGIC3} />
          <Route path="/Play/Game4/Logic" exact component={LOGIC4} />
        </div>
      </div>
    </Router>
  );
}

export default App;
