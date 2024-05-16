import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../fonts/RightGrotesk/RightGrotesk-CompactBlack.otf';
import '../../fonts/NimbusSan/NimbusSanL-Reg.otf';
import './CustomCards.css';
import CartContext from '../context/CartContext.tsx';

// still need to fix dropdown menu styling and the background but you're basically done! Well done!


export function CustomCards({product}) {

  const { increaseQuantity, decreaseQuantity, addProductToCart, productList } = useContext(CartContext)



  return (
        <div class="container">
          <div class="row gy-9">
            <Card style={styles.card}>
            <div class="prod-img" style={styles.product}>
            <Card.Img class="img-fluid" variant="top" src={product.img}/>
            </div>
              <Card.Body>
                <Card.Title style={styles.title}>{product.name} - ${product.price}</Card.Title>
                <Card.Text style={styles.desc}>
                  {product.desc}
                </Card.Text>
                <div style = {styles.quantity}>

                    </div>
                    <div style={styles.quantitySpace}>
                    <Button variant="primary" style={styles.add} value={product.id} onClick = {(e) => increaseQuantity(e, false)}>+</Button>
                    <div style={styles.quantity}>{product.quantity > 0 ? product.quantity : null}</div>
                    <Button variant="primary" style={styles.subtract} value={product.id} onClick = {(e) => decreaseQuantity(e, true)}>-</Button>
                    </div>
                          <Button variant="primary" style={styles.button}
                                  onClick ={(e) => { addProductToCart(productList) }}> Add to Cart</Button>
              </Card.Body>
           </Card>
          </div>
        </div>
  );

};

const styles = {
  card: {
    width: 345,
    height: 312,
    left: 50,
    top: 100,
    margin: 150,
    gap: 130,
    background: '#FF4100',
    border: 0

  },

  product: {
    position: 'absolute',
    width: 550,
    height: 338,
    left: 5,
    bottom: 235

  },

  title: {
    fontFamily: 'Right Grotesk',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: 24,
    lineHeight: 29,

    position: 'absolute',
    left: 80,
    top: -20,

    color: '#FF4100'



  },

  desc: {
    position: 'absolute',
    left: 5,
    top: 350,

    fontFamily: 'Nimbus Sans L',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 15,
    textAlign: 'justify',
    letterSpacing: 0.05,

    color: '#FF4100'
  },

  quantity: {
    fontFamily: 'Nimbus Sans L',
    fontWeight: 400,
    fontSize: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 11,
    gap: 9,

    position: 'absolute',
    width: 140,
    height: 0,
    paddingTop: 0,
    paddingBottom: 0,
    left: 130,
    top: 430,
    color: '#FF4100'
  },

  add: {
    fontFamily: 'Nimbus Sans L',
    // textAlign: 'center',
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',


    position: 'absolute',
    lineHeight: 0,
    boxSizing: 'border box',
    width: 32,
    height: 30,
    left: 80,
    top: 415,
    background: '#FF4100',
    borderColor: '#FF4100'


  },

  subtract: {
    fontFamily: 'Nimbus Sans L',
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',

    position: 'absolute',
    lineHeight: 0,
    boxSizing: 'border box',
    width: 32,
    height: 30,
    left: 180,
    top: 415,
    background: '#FF4100',
    borderColor: '#FF4100'


    // border: 1.3,
    // borderRadius: 8,
    // backgroundSize: 'auto'

  },

  quantitySpace: {
    position: 'relative',
    left: 0,
    top: -10
  },

  button: {
    fontFamily: 'Nimbus Sans L',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    letterSpacing: 0.05,

    color: '#FF4100',

    boxSizing: 'border-box',

    position: 'absolute',
    width: 238,
    height: 34,
    left: 50,
    top: 480,

    background: '#FFA900',
    border: '1',
    borderColor: '#FF4100',
    borderSize: 1.3,
    borderRadius: 8
  }
}
