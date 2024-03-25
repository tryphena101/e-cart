// For the app to pass data from parent to child components directly without having to pass through other components and make the code difficult to refactor.
import React, { createContext, useState } from 'react'

interface ContextTypeInterface {
    id: number;
    quantity: number;
    name: string;
    price: number;
    desc: string;
    img: string
}

interface ProductInterface extends Array<ContextTypeInterface> {}

const CartContext = createContext();

export const CartProvider = ({children}) => {

  const [productList, setProductList] = useState<ProductInterface>([
    {
      "id": 121213,
      "quantity": 0,
      "name": "Black T-Shirt",
      "price": 34,
      "desc": "Front pocket-area print and full back print on a super soft Bella+Canvas 3001 black unisex t-shirt.",
      "img": "/imgs/black shirt.png"
    },
    {
      "id": 312345,
      "quantity": 0,
      "name": "White T-Shirt",
      "price": 34,
      "desc": "Front pocket-area print and full back print on a super soft Bella+Canvas 3001 white unisex t-shirt.",
      "img": "/imgs/white shirt.png"
    },
    {
      "id": 678890,
      "quantity": 0,
      "name": "Black Shorts",
      "price": 15,
      "desc": "Front pocket-area print and full back print on a super soft Bella+Canvas 3001 black unisex shorts with side pocket.",
      "img": "/imgs/black shorts.png"


    },
    {
      "id": 198765,
      "quantity": 0,
      "name": "White Shorts",
      "price": 15,
      "desc": "Front pocket-area print and full back print on a super soft Bella+Canvas 3001 white unisex shorts with side pocket.",
      "img": "/imgs/white shorts.png"

    }
  ])

/**
 * Canvas functions
 */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /**
    * Select Item function
    */
  const [selectedItem, setSelectedItem] = useState()
  const onChange = (e) => {
    setSelectedItem(e.target.value)
    console.log(e.target.value)
  }

  /**
    * Cart Item Counter
    */
  const [cartCount, setCartCount] = useState(0)
  const incrementItem = () => {
    if (onChange) {
      setCartCount(cartCount + 1)
      console.log(cartCount);
    }
    }


  return (
    <CartContext.Provider value={{
      productList,
      handleClose,
      handleShow,
      show,
      selectedItem,
      onChange,
      cartCount,
      incrementItem}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;
