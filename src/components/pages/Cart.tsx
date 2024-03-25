// import './Cart.css';
import React, { useState, useContext } from 'react';
import CartContext from './context/CartContext.tsx';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Table from 'react-bootstrap/Table';


function Cart() {

  const { show, handleClose } = useContext(CartContext)

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
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
          </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}

export default Cart;
