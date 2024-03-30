// For the app to pass data from parent to child components directly without having to pass through other components and make the code difficult to refactor.
import React, { createContext, useState, useEffect } from 'react'

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
    * Capturing size selection of item and adding it as key-value pair to productList
    */
  const [eventVal, setEventVal] = useState<number>()
  const selectedItem = (e: { target: {value: number}}, updateProductList: any) =>
  {
    const newArr = [...productList];
    e.preventDefault();
    setEventVal(e.target.value)
    newArr.map((item) => {
      if(item.id == e.target.value)
      {
        item['size'] = e.nativeEvent.target[e.target.selectedIndex].text;
        setProductList(newArr)
        console.log(item["size"] + ' ' + item["id"])
        console.log(eventVal)
      }
    })
  }


  /**
    *Add Product to Cart
    */
    const [cartItems, setCartItems] = useState<[]>([]);
    const addProductToCart = ( newArr: ProductInterface ) => {
      setCartItems(newArr.filter((item) => { return item.id == eventVal ? item: null}))
      console.log(cartItems)
    }


  /**
    * Cart Item Counter
    */
    const [quantity, setQuantity] = useState(0)
    useEffect(() => {
        if(cartItems.length) {
          setQuantity(quantity + 1)
        }
    }, [cartItems])


  return (
    <CartContext.Provider value={{
      productList,
      handleClose,
      handleShow,
      show,
      selectedItem,
      addProductToCart,
      quantity}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;
