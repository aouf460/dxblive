import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.scss';
import React from "react";
import Threejs from './pages/ThreeJs/Threejs';
import Parallax from './pages/Parallax/Parallax';
import Home from './pages/Home/Home';
import Logo from './assets/dxblive-logo.png'
import {
  BrowserRouter as Router,
  Link, Route, Routes
} from "react-router-dom";function App() {
  return (
    <div>
      <Router>
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
      <img src={Logo} alt="Logo" className="d-inline-block"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto ">
        <li className="nav-item mx-2">
        <Link className='text-decoration-none' to="/Home">Home</Link>
        </li>
        <li className="nav-item mx-2">
        <Link className='text-decoration-none' to="/parallax">parallax</Link>
        </li>
        <li className="nav-item mx-2">
        <Link className='text-decoration-none' to="/threejs">ThreeJs</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

           <div className="App">
           <Routes>
           <Route exact path='*' element={<Home />}></Route>
           <Route exact path='/parallax' element={<Parallax />}></Route>
           <Route exact path='/ThreeJs' element={<Threejs />}></Route>
          </Routes>
          </div>
       </Router>

    </div>
  );
}

export default App;
