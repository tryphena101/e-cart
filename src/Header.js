import { Link } from 'react-router-dom';
import Cart from './components/pages/Cart';
import './fonts/RightGrotesk/RightGrotesk-CompactBlack.otf';
import './fonts/NimbusSan/NimbusSanL-Reg.otf';
import shopicon from './shopicon.png';
import './Header.css';



function Header() {
  return (
          <nav className="App-nav">
            <div className="nav-box">
              <div className ="text-style">
                <div className ="font-face-rg">
                  <div className="hypdshirts">
                      <Link to = '/' className = 'active'>
                        HYPDSHIRTS
                          </Link>



                    </div>
                      <div className="shop">
                        <Link to = '/shop' className = 'active'>
                            SHOP
                          </Link>
                        </div>
                            <img src={shopicon} className ="cart"/>

            </div>
              </div>
                </div>

          </nav>
  )
}
export default Header;
