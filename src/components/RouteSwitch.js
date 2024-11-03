// import {BrowserRouter as Router, Routes, Route, redirect } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'


function RouteSwitch() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path = '/e-cart/' element={<Home />}/>
          <Route path = '/e-cart/shop' element={<Shop />} />
        </Routes>
      </BrowserRouter>

    );
  }



export default RouteSwitch
