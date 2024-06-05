import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import CartContext from './context/CartContext.tsx';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Table from 'react-bootstrap/Table';
import './Cart.css';


function Cart() {

  const { show, handleClose, cartItems, increaseQuantity, decreaseQuantity, totalPrice } = useContext(CartContext)

  return (
    <>
    <div style = {styles.header}>
        <Offcanvas show={show} onHide={handleClose} placement={'end'} style= {styles.canvas}>
            <Offcanvas.Title className = 'title'>CHECK OUT</Offcanvas.Title>
          <Offcanvas.Header closeButton className = 'closeButton'>
          </Offcanvas.Header>
          <Offcanvas.Body style = {styles.body}>
            <div className = 'mainTable'>
                  <Table class ='table' className ='innerTable'>
            <tbody>
              {cartItems.map((item: any, index: number) => {
                 return <tr key={index} className ='trItem'>
                <td className = 'tdImage'><img src={item.img} style={{ height: "160 px", width: "160px"}} /></td>
                <td className = 'tdDesc'>{item.name}<br />${item.price}</td>
                <td className = 'tdQuantity'>
                <div className='itemQuantity'>{item.quantity}</div>
                <Button variant="primary" className = 'buttonAdd' value={item.id} onClick = {(e) => increaseQuantity(e, true)}>+</Button>
                <Button variant="primary" className = 'buttonRemove' value={item.id} onClick = {(e) => decreaseQuantity(e, true)}>-</Button>
                </td>
              </tr>
            })}
            </tbody>
          </Table>
          <hr className = 'hr'/>
            <div className = 'bottom'>
                <div className = 'total'>Total</div>
                <div colSpan={3} className = 'totalPrice'>${ totalPrice }</div>
                <Button className = 'checkOut'>Check Out</Button>
                </div>

          </div>
          </Offcanvas.Body>
        </Offcanvas>
        </div>
    </>
  )
}

const styles = {

  header: {
    background: '#FFA900'

  },

  body: {
    background: '#FFA900'
  },

  canvas: {
    background: '#FFA900'
  },

  title: {
    background: '#FFA900',
    fontSize: '48px',
    fontFamily: 'Right Grotesk',
    fontweight: 900,
    letterSpacing: 0,
    textAlign: 'center',
    color: 'red',

    textShadowColor: 'white',
    textShadowRadius: 10,

    position: 'absolute',
    left: 80,
    top: 0
  },

  // mainTable: {
  //   background: '#FFA900',
  //   border: 0
  // }
}


export default Cart;
