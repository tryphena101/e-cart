// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import NavTest from './NavTest';
import RouteSwitch from './RouteSwitch';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart.tsx';
import { CartProvider } from './components/pages/context/CartContext.tsx';

function App() {
  return (
    <div>
    <CartProvider>
    <HashRouter>
    <RouteSwitch />
    <Header />
    </HashRouter>
    </CartProvider>
    </div>

  )
}


export default App
