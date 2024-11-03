
import './Home.css';
import  Cart  from './Cart.tsx';
import '../fonts/RightGrotesk/RightGrotesk-CompactBlack.otf';
import '../fonts/NimbusSan/NimbusSanL-Reg.otf';
import { Link, useLocation } from 'react-router-dom';
import swirlylink from '../swirly-link.png';

function Home() {
  return (
    <>
    <Cart></Cart>
    <body>
    <header className="App-header">
    <div className = "title-style">
      <div className ="font-face-rg">
  <p>CLOTHES FOR YOUR INNER REBEL</p>
      </div>
    </div>
    <div className ="shop-desc">
      <div className = "font-face-ns">
  <p>Our collection is designed for those who aren't afraid to stand out from the crowd. Made from premium quality materials, our graphic tees are both comfortable and durable. They're perfect for everyday wear, whether you're running errands, hanging out with friends, or hitting up a party.</p>
      </div>
        </div>
        <p>
        <div className = "shop-link">
          <img src={swirlylink} className = "swirlylink" />
        <Link to = '/e-cart/shop' className = "text-link">
        Shop now!
        </Link>
          </div>
        </p>
    </header>
    </body>
    </>



  )
}

export default Home;
