// 26:00 for video reference
// import './Shop.css';
//import { Products } from './assets/Products';
import React, { useContext } from 'react';
import { CustomCards } from './assets/CustomCards';
import  Cart  from './Cart.tsx';
import CartContext from './context/CartContext.tsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../fonts/RightGrotesk/RightGrotesk-CompactBlack.otf';
import '../fonts/NimbusSan/NimbusSanL-Reg.otf';
import blackshirt from './prod_images/black shirt.png';
import whiteshirt from './prod_images/white shirt.png';
import blackshorts from './prod_images/black shorts.png';
import whiteshorts from './prod_images/white shorts.png';


function Shop() {

  const {productList} = useContext(CartContext)

  return (
  <>
    <Cart></Cart>
    <div className = 'App-header'>
    <Container>
      <Row>
      {productList.length && productList.map((product, index) => {
        return <Col xs={5}><CustomCards product={product} key = {index}/></Col>
      })}
    </Row>
    </Container>
    </div>
  </>
  )
}
export default Shop;
