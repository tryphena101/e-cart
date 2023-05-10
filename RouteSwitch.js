import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header';
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'


function RouteSwitch() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path = '/' element={<Home />} />
          <Route path = '/shop' element={<Shop />} />
        </Routes>
      </Router>

    );
  }



export default RouteSwitch
