import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../fonts/RightGrotesk/RightGrotesk-CompactBlack.otf';
import '../../fonts/NimbusSan/NimbusSanL-Reg.otf';
// prob need to add a custom class name in this file itself. You can do this, babe.


export function CustomCards({product}) {
  return (
        <div class="container">
          <div class="row gy-9">
            <Card style={styles.card}>
            <div class="prod-img" style={styles.product}>
            <Card.Img class="img-fluid" variant="top" src={product.img}/>
            </div>
              <Card.Body>
                <Card.Title style={styles.title}>{product.name} - ${product.price}</Card.Title>
                <Card.Text>
                  {product.desc}
                </Card.Text>
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
        Choose Size
      </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">S</Dropdown.Item>
          <Dropdown.Item href="#/action-2">M</Dropdown.Item>
          <Dropdown.Item href="#/action-3">XL</Dropdown.Item>
        </Dropdown.Menu>
                </Dropdown>
                <Button variant="primary">Add to Cart</Button>
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
    margin: 100,
    gap: 20,
    background: '#FF4100',
    border: 0

  },

  product: {
    position: 'absolute',
    width: 550,
    height: 338,
    left: -100,
    bottom: -3

  },

  title: {
    // margin: 50,
    fontFamily: 'Right Grotesk',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: 24,
    lineHeight: 29,

    position: 'absolute',
    left: 80,
    top: 0


  }
}
