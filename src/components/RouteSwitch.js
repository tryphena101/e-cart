// import {BrowserRouter as Router, Routes, Route, redirect } from 'react-router-dom'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'


function RouteSwitch() {
    return (
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path = '/' element={<Home />}/>
          <Route path = '/shop' element={<Shop />} />
        </Routes>
      </HashRouter>

    );
  }



export default RouteSwitch
