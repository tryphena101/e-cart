// import './Cart.css';
import React, { useState, useContext } from 'react';
import CartContext from './context/CartContext.tsx';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Table from 'react-bootstrap/Table';


function Cart() {

  const { show, handleClose, cartItems } = useContext(CartContext)

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
                <th>Size</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length && cartItems.map((item: any, index: number) => {
                 return <tr key={index}>
                <td><img src={item.img} style={{ height: "60 px", width: "60px"}} /></td>
                <td>{item.size}</td>
                <td></td>
                <td>${item.price}</td>
              </tr>
            })}
              <tr>
                <td>Total</td>
                <td colSpan={3}>$0.00</td>
              </tr>
            </tbody>
          </Table>
          </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}

export default Cart;
