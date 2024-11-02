import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import  CartContext  from './components/pages/context/CartContext.tsx';
import Cart from './components/pages/Cart.tsx';
import './fonts/RightGrotesk/RightGrotesk-CompactBlack.otf';
import './fonts/NimbusSan/NimbusSanL-Reg.otf';
import shopicon from './shopicon.png';
import './Header.css';



function Header() {

  const { handleShow, quantity } = useContext(CartContext)
  return (
          <nav className="App-nav">
            <div className="nav-box">
              <div className ="text-style">
                <div className ="font-face-rg">
                  <div className="hypdshirts">
                      <Link to = '/home' className = 'active'>
                        HYPDSHIRTS
                          </Link>



                    </div>
                      <div className="shop">
                        <Link to = '/shop' className = 'active'>
                            SHOP
                          </Link>
                        </div>
                        <Button onClick={handleShow} className ='handleShow'>
                            <img src={shopicon} className ="cart"/>
                            <div className = 'addCart'>({quantity})</div>
                        </Button>

            </div>
              </div>
                </div>

          </nav>
  )
}
export default Header;
