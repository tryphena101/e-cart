import './Shop.css';
import '../fonts/RightGrotesk/RightGrotesk-CompactBlack.otf';
import '../fonts/NimbusSan/NimbusSanL-Reg.otf';
import blackshirt from './prod_images/black shirt.png';
import whiteshirt from './prod_images/white shirt.png';
import blackshorts from './prod_images/black shorts.png';
import whiteshorts from './prod_images/white shorts.png';


function Shop() {
  return (
    <div className = 'App-header'>
      <div className = 'product-container-1'>
        <div className = 'shirt'>
            <img src = {blackshirt} className = 'black-shirt' />
        </div>
        <div className = 'product-title-1'>
          T-Shirt - $34
        </div>
        <div className = 'prod-desc-1'>
          Front pocket-area print and full back print on a super soft Bella+Canvas 3001 black unisex t-shirt.
        </div>
        <div className = 'choose-size'>
            <select className = 'choose-sze'>
              <option selected disabled>Select Size</option>
              <option value ='small'>Small</option>
              <option value = 'medium'>Medium</option>
              <option value = 'large'>Large</option>
            </select>
        </div>
        <div className = 'cart-btn'>
          <button className = 'add-to-cart'>Add to Cart</button>
        </div>
      </div>
      <div className = 'product-container-2'>
        <div className = 'shirt-2'>
          <img src = {whiteshirt} className = 'white-shirt' />
        </div>
        <div className = 'product-title-2'>
          T-Shirt - $34
        </div>
        <div className = 'prod-desc-2'>
          Front pocket-area print and full back print on a super soft Bella+Canvas 3001 white unisex t-shirt.
        </div>
        <select className = 'choose-sze-1'>
          <option selected disabled>Select Size</option>
          <option value ='small'>Small</option>
          <option value = 'medium'>Medium</option>
          <option value = 'large'>Large</option>
        </select>
        <button className = 'add-to-cart-1'>Add to Cart</button>
      </div>
      <div className = 'product-container-3'>
        <div className = 'shorts-1'>
          <img src = {blackshorts} className = 'black-shorts' />
        </div>
        <div className = 'product-title-3'>
          Shorts - $15
        </div>
        <div className = 'prod-desc-3'>
          Front pocket-area print and full back print on a super soft Bella+Canvas 3001 black unisex shorts with side pocket.
        </div>
        <select className = 'choose-sze-2'>
          <option selected disabled>Select Size</option>
          <option value ='small'>Small</option>
          <option value = 'medium'>Medium</option>
          <option value = 'large'>Large</option>
        </select>
        <button className = 'add-to-cart-2'>Add to Cart</button>
      </div>
      <div className = 'product-container-3'>
      <div className = 'shorts-2'>
        <img src = {whiteshorts} className = 'white-shorts' />
      </div>
      <div className = 'product-title-4'>
        Shorts - $15
      </div>
      <div className = 'prod-desc-4'>
        Front pocket-area print and full back print on a super soft Bella+Canvas 3001 black unisex shorts with side pocket.
      </div>
      <select className = 'choose-sze-3'>
        <option selected disabled>Select Size</option>
        <option value ='small'>Small</option>
        <option value = 'medium'>Medium</option>
        <option value = 'large'>Large</option>
      </select>
      <button className = 'add-to-cart-3'>Add to Cart</button>
      </div>

    </div>
  )
}
export default Shop;
