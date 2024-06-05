import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './components/fonts/RightGrotesk/RightGrotesk-CompactBlack.otf';
import './components/fonts/NimbusSan/NimbusSanL-Reg.otf';
import shopicon from './components/shopicon.png';
import swirlylink from './components/swirly-link.png';
import './App.css';
// import Shop from './Shop';



function App() {
  return (
    <div className="App">
      <header className="App-header">
            <nav className="App-nav">
              <div className="nav-box">
                <div className ="text-style">
                  <div className ="font-face-rg">
                    <div className="hypdshirts">
                    HYPDSHIRTS
                      </div>
                        <div className="shop">
                          SHOP
                          </div>
                              <img src={shopicon} className ="cart" />

              </div>
                </div>
                  </div>

            </nav>
        <br/>
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
        <a
          className="text-link"
          href="./defunct"
          target="_blank"
        >

        Shop now!
        </a>
          </div>
        </p>


      </header>
    </div>
  );
}

export default App;
