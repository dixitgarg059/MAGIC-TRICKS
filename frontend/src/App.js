import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"
import  PLAY from './components/play.component'
import WELCOME from './components/welcome.component'
import GAME1 from './components/game1.component'
import GAME2 from './components/game2.component'
import GAME3 from './components/game3.component'
import GAME4 from './components/game4.component'
import LOGIC1 from './components/logic1.component'
import LOGIC2 from './components/logic2.component'
import LOGIC3 from './components/logic3.component'
import LOGIC4 from './components/logic4.component'
function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Home</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/Play" className="nav-link">Play</Link>
              </li>
            </ul>
          </div>
        </nav>

        <br/>
        <Route path="/" exact component={WELCOME}/>
        <Route path="/Play" exact component={PLAY}/>
        <Route path="/Play/Game1" exact component={GAME1}/>
        <Route path="/Play/Game2" exact component={GAME2}/>
        <Route path="/Play/Game3" exact component={GAME3}/>
        <Route path="/Play/Game4" exact component={GAME4}/>
        <Route path="/Play/Game1/Logic" exact component={LOGIC1}/>
        <Route path="/Play/Game2/Logic" exact component={LOGIC2}/>
        <Route path="/Play/Game3/Logic" exact component={LOGIC3}/>
        <Route path="/Play/Game4/Logic" exact component={LOGIC4}/>
      </div>
    </Router>
  );
}

export default App;
