
import {Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'


function RouteSwitch () {
  return (
      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path = '/shop' element={<Shop />} />
      </Routes>
  )
};

export default RouteSwitch;
