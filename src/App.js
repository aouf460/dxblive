import './App.scss';
import React from "react";
import Threejs from './pages/ThreeJs/Threejs';
import Parallax from './pages/Parallax/Parallax';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Link, Route, Routes
} from "react-router-dom";function App() {
  return (
    <div>
      <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/parallax">parallax</Link>
              </li>
              <li>
                <Link to="/threejs">ThreeJs</Link>
              </li>
            </ul>
           <Routes>
           <Route exact path='/Home' element={<Home />}></Route>
                 <Route exact path='/parallax' element={<Parallax />}></Route>
                 <Route exact path='/ThreeJs' element={<Threejs />}></Route>
          </Routes>
          </div>
       </Router>
    </div>
  );
}

export default App;
