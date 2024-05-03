// For the app to pass data from parent to child components directly without having to pass through other components and make the code difficult to refactor.
import React, { createContext, useState, useEffect, setState } from 'react'

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
* Custom Quantity Increase/Decrease function
*/

const increaseQuantity = (e: { target: { value: number } }, updateProductList: any) =>
 {
  const newArr = [...productList];
  newArr.map((item) => {
    if(item.id == e.target.value)
    {
      item.quantity = item.quantity + 1;
      setProductList(newArr);
      console.log(e.target.value)
    }
  });

  if(updateProductList) {
    addProductToCart(productList)
  }
}

const decreaseQuantity = (e: { target: { value: number } }, updateProductList: any) =>
 {
  const newArr = [...productList];
  newArr.map((item) => {
    if(item.id == e.target.value)
    {
      if(item.quantity >= 1) {
        item.quantity = item.quantity - 1;
        setProductList(newArr);
        console.log(e.target.value)
      }

    }
  });

  if(updateProductList) {
    addProductToCart(productList)
  }
}

/**
 * Canvas functions
 */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /**
    *Add to Cart functionality
    */
    const [cartItems, setCartItems] = useState([]);

    const addProductToCart = (productList) => {
        setCartItems(productList.filter((item) => item.quantity > 0 ? item:null))
      }

  /**
    * Cart Item Counter
    */
    const [quantity, setQuantity] = useState(0)
    useEffect(() => {

      if(cartItems.length) {

        setQuantity(cartItems.length)
        let total = 0
        cartItems.map((item) => {
          total += item.quantity * item.price
        });

        setTotalPrice(total)

      } else {
        setQuantity(cartItems.length)
        setTotalPrice(0)
      }

    }, [cartItems])

    /**
      * Total Price Calculate function
      */

    const [totalPrice, setTotalPrice] = useState(0)


  return (
    <CartContext.Provider value={{
      productList,
      increaseQuantity,
      decreaseQuantity,
      handleClose,
      handleShow,
      show,
      addProductToCart,
      quantity,
      cartItems,
      totalPrice}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;
