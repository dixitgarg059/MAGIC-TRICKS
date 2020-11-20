import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import PLAY from './components/play.component'
import WELCOME from './components/welcome.component'
import ABOUTUS from './components/AboutUs.component'
import GAME1 from './components/game1.component'
import GAME2 from './components/game2.component'
import GAME3 from './components/game3.component'
import GAME4 from './components/game4.component'
import GAME5 from './components/game5.component'
import GAME6 from './components/game6.component'

import LOGIC1 from './components/logic1.component'
import LOGIC2 from './components/logic2.component'
import LOGIC3 from './components/logic3.component'
import LOGIC4 from './components/logic4.component'
import LOGIC5 from './components/logic5.component'
import LOGIC6 from './components/logic6.component'
function App() {

  const [active,setActive] = useState('');



  return (
    <Router basename="/CARD-TRICKS">
      <div>
        <nav className="navbar navbar-expand-xl navbar-dark fixed-top" style={{ backgroundColor: 'rgb(40,40,40)',padding:'0px', opacity: "0.7" }}>

          <div className="navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className={``}
              className={`${active==0?"nav-ele-active":'nav-ele'}`}

              onClick={()=>{
                setActive(0);
              }}>
              <strong>ARENA</strong></Link>
              <Link to="/Play" className={`${active==1?"nav-ele-active":'nav-ele'}`} 
             
              onClick={()=>{
                setActive(1);
              }}>Play</Link>
              <Link to="/AboutUs" className={`${active==2?"nav-ele-active":'nav-ele'}`} 
             
              onClick={()=>{
                setActive(2);
              }}>About Us</Link>
            </div>
          </div>
        </nav>
          {/* <br /> */}
          <Route path="/" exact render={()=>{
           return  <WELCOME func={setActive}/>
          }}/>

        <div className="container"
        // style={{ paddingTop: '50px' }}
        >

          <Route path="/Play" exact render={(props)=>{
            return <PLAY {...props} setActive={setActive}/>
          }} />
          <Route path="/AboutUs" exact render={(props)=>{
            return <ABOUTUS {...props} setActive={setActive}/>
          }} />          
          {/* <Route path="/Purpose" exact component={PURPOSE} /> */}
          <Route path="/Play/Game1" exact component={GAME1} />
          <Route path="/Play/Game2" exact component={GAME2} />
          <Route path="/Play/Game3" exact component={GAME3} />
          <Route path="/Play/Game4" exact component={GAME4} />
          <Route path="/Play/Game5" exact component={GAME5} />
          <Route path="/Play/Game6" exact component={GAME6} />
          <Route path="/Play/Game1/Logic" exact component={LOGIC1} />
          <Route path="/Play/Game2/Logic" exact component={LOGIC2} />
          <Route path="/Play/Game3/Logic" exact component={LOGIC3} />
          <Route path="/Play/Game4/Logic" exact component={LOGIC4} />
          <Route path="/Play/Game5/Logic" exact component={LOGIC5} />
          <Route path="/Play/Game6/Logic" exact component={LOGIC6} />
        </div>
      </div>
    </Router>
  );
}

export default App;
