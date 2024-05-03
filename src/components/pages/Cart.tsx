// import './Cart.css';
import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import CartContext from './context/CartContext.tsx';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Table from 'react-bootstrap/Table';


function Cart() {

  const { show, handleClose, cartItems, increaseQuantity, decreaseQuantity, totalPrice } = useContext(CartContext)

  return (
    <>
        <Offcanvas show={show} onHide={handleClose} placement={'end'}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>CHECK OUT</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
                  <Table striped bordered hover>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length && cartItems.map((item: any, index: number) => {
                 return <tr key={index}>
                <td><img src={item.img} style={{ height: "60 px", width: "60px"}} /></td>
                <td>{item.quantity}
                <hr />
                <Button variant="primary"  value={item.id} onClick = {(e) => increaseQuantity(e, true)}>+</Button>
                <Button variant="primary"  value={item.id} onClick = {(e) => decreaseQuantity(e, true)}>-</Button>
                </td>

                <td>${item.price}</td>
              </tr>
            })}
              <tr>
                <td>Total</td>
                <td colSpan={3}>$ { totalPrice }</td>
              </tr>
            </tbody>
          </Table>
          </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}

// const styles = {
//   add: {
//     fontFamily: 'Nimbus Sans L',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 11,
//     gap: 9,
//
//     position: 'absolute',
//     // width: 40,
//     // height: 35,
//     paddingTop: 0,
//     paddingBottom: 0,
//     left: 80,
//     top: 415,
//
//
//     border: 1.3,
//     borderRadius: 8,
//     backgroundSize: 'auto'
//
//
//   },
//
//   subtract: {
//     fontFamily: 'Nimbus Sans L',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 11,
//     gap: 9,
//
//     position: 'absolute',
//     // width: 40,
//     // height: 35,
//     paddingTop: 0,
//     paddingBottom: 0,
//     left: 180,
//     top: 415,
//
//
//     border: 1.3,
//     borderRadius: 8,
//     backgroundSize: 'auto'
//
//   }
// }

export default Cart;
